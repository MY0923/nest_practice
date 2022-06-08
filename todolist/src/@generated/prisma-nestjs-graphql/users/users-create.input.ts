import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TodoCreateNestedManyWithoutUsersInput } from '../todo/todo-create-nested-many-without-users.input';

@InputType()
export class UsersCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => TodoCreateNestedManyWithoutUsersInput, {nullable:true})
    todo?: TodoCreateNestedManyWithoutUsersInput;
}
