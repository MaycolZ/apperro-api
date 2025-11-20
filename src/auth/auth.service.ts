import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signup(data) {
    const user = await this.usersService.createUser(data);
    return { message: 'Usuario creado', user };
  }

  async signin(data) {
    const user = await this.usersService.findByEmail(data.email);
    if (!user) throw new UnauthorizedException('Credenciales incorrectas');

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Credenciales incorrectas');

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return { message: 'Login correcto', token };
  }
  
}
