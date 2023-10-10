import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { User } from './user.entity';
import { CreateUserType } from './types/create-user.type';
import { v4 as uuid } from 'uuid';
import { Pagination, QueryOptions } from 'ts/types';
import { checkValueEmpty } from 'utils/common';
import * as bcrypt from 'bcrypt';
import { UpdateUserType } from './types/update-user.type';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async getUsers(
    query: QueryOptions<
      Omit<User, 'id' | 'desc' | 'avatar' | 'username' | 'password'>
    >,
  ): Promise<Pagination<Omit<User, 'password'>>> {
    const { fullname, email, phoneNumber, page, limit, address, role } = query;
    const q = { fullname, email, phoneNumber, address, role };
    const take = limit || 10;
    const p = page || 1;
    const skip = p === 1 ? 0 : p * take;
    if (checkValueEmpty(fullname)) {
      delete q['fullname'];
    }
    if (checkValueEmpty(email)) {
      delete q['email'];
    }
    if (checkValueEmpty(phoneNumber)) {
      delete q['phoneNumber'];
    }
    if (checkValueEmpty(address)) {
      delete q['address'];
    }
    if (role === 0) {
      delete q['role'];
    }

    const [result, total] = await this.userRepository.findAndCount(q, {
      offset: skip,
      limit: take,
    });

    return {
      page: page,
      limit: limit,
      totalPage: total,
      data: result,
    };
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  async getUserByUserName(username: string): Promise<User> {
    return this.userRepository.findOne({ username });
  }

  async createUser(body: CreateUserType): Promise<User> {
    const password = await bcrypt.hash(body.password, 10);
    const user = this.userRepository.create({
      id: uuid(),
      password,
      ...body,
    });

    this.userRepository.persistAndFlush(user);
    return user;
  }

  async updateUser(
    id: string,
    body: UpdateUserType,
  ): Promise<{ status: string; data: User }> {
    const user = await this.getUserById(id);

    if (!user) {
      throw new Error('User not found');
    }

    wrap(user).assign(body, { mergeObjects: true });

    await this.userRepository.flush();

    return {
      status: 'success',
      data: user,
    };
  }

  async updatePassword(
    id: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<{ status: string; data: User }> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new Error('User not found!');
    }

    const validPass = await bcrypt.compare(oldPassword, user.password);

    if (!validPass) {
      throw new Error('The old password not valid!');
    }

    const password = await bcrypt.hash(newPassword, 10);

    wrap(user).assign({ password }, { mergeObjects: true });
    await this.userRepository.flush();

    return {
      status: 'success',
      data: user,
    };
  }

  async deleteUser(id: string): Promise<{ status: string; data: User }> {
    const user = await this.getUserById(id);
    if (!user) {
      throw new Error('User not found!');
    }

    this.userRepository.removeAndFlush(user);

    return {
      status: 'success',
      data: user,
    };
  }
}
