import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Type } from 'class-transformer';
import { TodoUpdateWithoutUsersInput } from './todo-update-without-users.input';

@InputType()
export class TodoUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: TodoWhereUniqueInput;

    @Field(() => TodoUpdateWithoutUsersInput, {nullable:false})
    @Type(() => TodoUpdateWithoutUsersInput)
    data!: TodoUpdateWithoutUsersInput;
}
