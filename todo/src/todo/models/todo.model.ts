import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: number;
  @Field()
  title: string;
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
  @Field()
  done: boolean;
}

