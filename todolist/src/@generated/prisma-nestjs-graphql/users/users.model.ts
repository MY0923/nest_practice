import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Todo } from '../todo/todo.model';
import { UsersCount } from './users-count.output';


@ObjectType()
export class Users {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Todo], {nullable:true})
    todo?: Array<Todo>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
