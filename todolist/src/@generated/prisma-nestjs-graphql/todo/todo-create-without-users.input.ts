import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TodoCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    title!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    done?: boolean;
}
