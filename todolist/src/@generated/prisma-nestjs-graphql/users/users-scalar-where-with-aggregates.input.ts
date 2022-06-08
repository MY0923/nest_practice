import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UsersScalarWhereWithAggregatesInput {

    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsersScalarWhereWithAggregatesInput>;

    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsersScalarWhereWithAggregatesInput>;

    @Field(() => [UsersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
