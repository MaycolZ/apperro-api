import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private users = []

    async createUser(data) {
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
