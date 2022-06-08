import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class TodoScalarWhereInput {

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    AND?: Array<TodoScalarWhereInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    OR?: Array<TodoScalarWhereInput>;

    @Field(() => [TodoScalarWhereInput], {nullable:true})
    NOT?: Array<TodoScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    done?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
