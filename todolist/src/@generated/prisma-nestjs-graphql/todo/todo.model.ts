import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @HideField()
    createdAt!: Date;

    @HideField()
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    done!: boolean;

    @Field(() => Users, {nullable:true})
    users?: Users | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
