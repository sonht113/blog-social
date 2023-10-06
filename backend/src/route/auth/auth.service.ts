/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserService } from '../features';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserInputType } from './types/input-login-user.type';
import { LoginResponseType } from './types/login-respone.type';
import { SignUpUserInputType } from './types/input-signup-user.type';
import { User } from '../features';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<unknown> {
    const user = await this.userService.getUserByUserName(username);

    const valid = await bcrypt.compare(password, user.password);
    if (user && valid) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(loginUserInput: LoginUserInputType): Promise<LoginResponseType> {
    const user = await this.userService.getUserByUserName(
      loginUserInput.username,
    );

    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id + process.env.SECRET_KEY,
      }),
      user: result,
    };
  }

  async signup(signupUserInput: SignUpUserInputType): Promise<User> {
    const saltRounds = 10;
    const user = await this.userService.getUserByUserName(
      signupUserInput.username,
    );

    if (user) {
      throw new Error('User already exists!');
    }

    const password = await bcrypt.hash(signupUserInput.password, saltRounds);
    return this.userService.createUser({ ...signupUserInput, password });
  }
}
