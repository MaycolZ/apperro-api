import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './users.interface';

@Injectable()
export class UsersService {
    private users: User[] = []

    async createUser(data: any) {
        const hashed = await bcrypt.hash(data.password, 10)

        const newUser = {
            id: this.users.length + 1,
            name: data.name,
            email: data.email,
            password: hashed
        }
    
        this.users.push(newUser)
        return newUser
    }

    async findByEmail(email: String) {
        return this.users.find(u => u.email === email)
    }

    async findAll() {
        return this.users
    }
}
