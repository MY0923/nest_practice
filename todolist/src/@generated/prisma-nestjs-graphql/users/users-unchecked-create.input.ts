import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TodoUncheckedCreateNestedManyWithoutUsersInput } from '../todo/todo-unchecked-create-nested-many-without-users.input';

@InputType()
export class UsersUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => TodoUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    todo?: TodoUncheckedCreateNestedManyWithoutUsersInput;
}
