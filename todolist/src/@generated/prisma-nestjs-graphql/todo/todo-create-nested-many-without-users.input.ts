import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutUsersInput } from './todo-create-without-users.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutUsersInput } from './todo-create-or-connect-without-users.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@InputType()
export class TodoCreateNestedManyWithoutUsersInput {

    @Field(() => [TodoCreateWithoutUsersInput], {nullable:true})
    @Type(() => TodoCreateWithoutUsersInput)
    create?: Array<TodoCreateWithoutUsersInput>;

    @Field(() => [TodoCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUsersInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;
}
