import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { TodoListRelationFilter } from '../todo/todo-list-relation-filter.input';

@InputType()
export class UsersWhereInput {

    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => TodoListRelationFilter, {nullable:true})
    todo?: TodoListRelationFilter;
}
