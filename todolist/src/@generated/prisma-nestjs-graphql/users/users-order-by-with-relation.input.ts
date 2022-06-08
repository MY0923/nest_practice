import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TodoOrderByRelationAggregateInput } from '../todo/todo-order-by-relation-aggregate.input';

@InputType()
export class UsersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => TodoOrderByRelationAggregateInput, {nullable:true})
    todo?: TodoOrderByRelationAggregateInput;
}
