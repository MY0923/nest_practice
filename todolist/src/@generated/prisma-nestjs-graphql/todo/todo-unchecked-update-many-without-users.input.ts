import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutUsersInput } from './todo-create-without-users.input';
import { Type } from 'class-transformer';
import { TodoCreateOrConnectWithoutUsersInput } from './todo-create-or-connect-without-users.input';
import { TodoUpsertWithWhereUniqueWithoutUsersInput } from './todo-upsert-with-where-unique-without-users.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithWhereUniqueWithoutUsersInput } from './todo-update-with-where-unique-without-users.input';
import { TodoUpdateManyWithWhereWithoutUsersInput } from './todo-update-many-with-where-without-users.input';
import { TodoScalarWhereInput } from './todo-scalar-where.input';

@InputType()
export class TodoUncheckedUpdateManyWithoutUsersInput {

    @Field(() => [TodoCreateWithoutUsersInput], {nullable:true})
    @Type(() => TodoCreateWithoutUsersInput)
    create?: Array<TodoCreateWithoutUsersInput>;

    @Field(() => [TodoCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutUsersInput>;

    @Field(() => [TodoUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<TodoWhereUniqueInput>;

    @Field(() => [TodoUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [TodoUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}
