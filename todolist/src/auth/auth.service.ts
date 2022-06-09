import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from 'src/auth/dto/login-response';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<Users | null> {
        const user = await this.usersService.findUnique({ where: { email: email } });

        if (user && bcrypt.compareSync(password, user.password)) {
            return user;
        }

        return null;
    }

    async login(user: Users): Promise<LoginResponse> {
        const payload = { email: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
            user: user
        };
    }
}