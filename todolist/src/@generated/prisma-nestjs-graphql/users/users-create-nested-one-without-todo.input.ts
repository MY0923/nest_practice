import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTodoInput } from './users-create-without-todo.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutTodoInput } from './users-create-or-connect-without-todo.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutTodoInput {

    @Field(() => UsersCreateWithoutTodoInput, {nullable:true})
    @Type(() => UsersCreateWithoutTodoInput)
    create?: UsersCreateWithoutTodoInput;

    @Field(() => UsersCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutTodoInput)
    connectOrCreate?: UsersCreateOrConnectWithoutTodoInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;
}
