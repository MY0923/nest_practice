import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutTodoInput } from '../users/users-create-nested-one-without-todo.input';

@InputType()
export class TodoCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    title!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    done?: boolean;

    @Field(() => UsersCreateNestedOneWithoutTodoInput, {nullable:true})
    users?: UsersCreateNestedOneWithoutTodoInput;
}
