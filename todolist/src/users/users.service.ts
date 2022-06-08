import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { FindFirstUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-first-users.args';
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import { FindUniqueUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-unique-users.args';
import { FindManyUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-many-users.args';
import { DeleteOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/delete-one-users.args';
import { UpdateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/update-one-users.args';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findFirst(args: FindFirstUsersArgs): Promise<Users | null> {
        return this.prisma.users.findFirst(args);
    }

    async findUnique(args: FindUniqueUsersArgs): Promise<Users | null> {
        return this.prisma.users.findUnique(args);
    }


    //作成
    async createUser(args: CreateOneUsersArgs): Promise<Users> {
        return this.prisma.users.create(args);
    }
    //参照
    async findMany(args: FindManyUsersArgs): Promise<Users[]> {
        return this.prisma.users.findMany(args);
    }
    //削除
    async deleteOneUsers(args: DeleteOneUsersArgs): Promise<Users> {
        return this.prisma.users.delete(args);
    }

    //更新
    async updateUser(args: UpdateOneUsersArgs): Promise<Users> {
        return this.prisma.users.update(args);
    }
}
