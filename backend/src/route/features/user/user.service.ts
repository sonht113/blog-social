import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';
import { User } from './user.entity';
import { CreateUserType } from './types/create-user.type';
import { v4 as uuid } from 'uuid';
import { Pagination, QueryOptions } from 'ts/types';
import { checkValueEmpty } from 'utils/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: EntityRepository<User>,
  ) {}

  async getUsers(
    query: QueryOptions<Omit<User, 'id' | 'desc' | 'avatar' | 'username'>>,
  ): Promise<Pagination<User>> {
    console.log(query);
    console.log(checkValueEmpty(query.fullname));
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

  async createUser(body: CreateUserType): Promise<User> {
    const user = this.userRepository.create({
      id: uuid(),
      ...body,
    });

    this.userRepository.persistAndFlush(user);
    return user;
  }
}
