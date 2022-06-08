import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTodoInput } from './users-create-without-todo.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutTodoInput } from './users-create-or-connect-without-todo.input';
import { UsersUpsertWithoutTodoInput } from './users-upsert-without-todo.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutTodoInput } from './users-update-without-todo.input';

@InputType()
export class UsersUpdateOneWithoutTodoInput {

    @Field(() => UsersCreateWithoutTodoInput, {nullable:true})
    @Type(() => UsersCreateWithoutTodoInput)
    create?: UsersCreateWithoutTodoInput;

    @Field(() => UsersCreateOrConnectWithoutTodoInput, {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutTodoInput)
    connectOrCreate?: UsersCreateOrConnectWithoutTodoInput;

    @Field(() => UsersUpsertWithoutTodoInput, {nullable:true})
    @Type(() => UsersUpsertWithoutTodoInput)
    upsert?: UsersUpsertWithoutTodoInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutTodoInput, {nullable:true})
    @Type(() => UsersUpdateWithoutTodoInput)
    update?: UsersUpdateWithoutTodoInput;
}
