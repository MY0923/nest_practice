import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import * as bcrypt from 'bcrypt';
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-first-users.args';
import { FindManyUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-many-users.args';
import { DeleteOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import { UpdateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => Users)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Query(() => Users)
    @UseGuards(JwtAuthGuard)
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
        args.data.password = await bcrypt.hash(args.data.password, 10);
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