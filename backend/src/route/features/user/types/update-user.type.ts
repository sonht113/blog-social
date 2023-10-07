import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserType } from './create-user.type';

@InputType()
export class UpdateUserType extends PartialType(CreateUserType) {}
