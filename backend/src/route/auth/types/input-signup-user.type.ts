import { InputType } from '@nestjs/graphql';
import { CreateUserType } from '../../features';

@InputType()
export class SignUpUserInputType extends CreateUserType {}
