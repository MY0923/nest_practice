import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-first-users.args';
import { FindManyUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-many-users.args';
import { DeleteOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import { UpdateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';

@Resolver(() => Users)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => Users)
    user(
        @Args() args: FindFirstUsersArgs
    ) {
        return this.usersService.findFirst(args)
    }

    //登録
    @Mutation(() => Users)
    async createUser(
        @Args() args: CreateOneUsersArgs
    ) {
        return this.usersService.createUser(args);
    }

    //参照
    @Query(() => [Users])
    async readUsers(
        @Args() args: FindManyUsersArgs
    ) {
        return this.usersService.findMany(args);
    }

    //削除
    @Mutation(() => Users)
    async deleteUsers(
        @Args() args: DeleteOneUsersArgs
    ) {
        return this.usersService.deleteOneUsers(args);
    }    

    //更新
    @Mutation(() => Users)
    async updateUsers(
        @Args() args: UpdateOneUsersArgs    
    ) {
        return this.usersService.updateUser(args);
    }

}