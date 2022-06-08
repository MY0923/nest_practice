import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TodoCountAggregate } from './todo-count-aggregate.output';
import { TodoAvgAggregate } from './todo-avg-aggregate.output';
import { TodoSumAggregate } from './todo-sum-aggregate.output';
import { TodoMinAggregate } from './todo-min-aggregate.output';
import { TodoMaxAggregate } from './todo-max-aggregate.output';

@ObjectType()
export class AggregateTodo {

    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: TodoCountAggregate;

    @Field(() => TodoAvgAggregate, {nullable:true})
    _avg?: TodoAvgAggregate;

    @Field(() => TodoSumAggregate, {nullable:true})
    _sum?: TodoSumAggregate;

    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: TodoMinAggregate;

    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: TodoMaxAggregate;
}
