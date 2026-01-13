/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { QueryDto } from '../room/dto/query.dto';
import { buildQuery } from 'src/common/helper/build-query.helper';
import { UserDto } from 'src/common/dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async createUser(createUserDto: UserDto) {
    const { name, email, password, phone, birthday, gender, role } =
      createUserDto;

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new BadRequestException('Email đã tồn tại');
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await this.prisma.nguoiDung.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        phone: phone,
        birthday: birthday,
        genderId: gender,
        ...(role !== null && role !== 0 ? { roleId: role } : { roleId: 2 }),
      },
    });

    console.log({ email, password, name, userExists });

    return true;
  }

  async findAll() {
    const result = await this.prisma.nguoiDung.findMany();

    return result;
  }

  async findAllPagination(query: QueryDto) {
    const { page, pageSize, index, filters } = buildQuery(query);

    const userPromise = await this.prisma.nguoiDung.findMany({
      where: {
        name: filters,
      },
      skip: index,
      take: pageSize,
    });

    const totalItemsPromise = await this.prisma.nguoiDung.count();

    const [location, totalItems] = await Promise.all([
      userPromise,
      totalItemsPromise,
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPage: totalPages,
      items: location || [],
    };
  }

  async findOne(id: number) {
    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        `Người dùng với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    return userExists;
  }

  async searchUser(tenNguoiDung: string) {
    const keyword = tenNguoiDung?.trim();
    const userExists = await this.prisma.nguoiDung.findMany({
      where: keyword
        ? {
            name: {
              contains: keyword,
            },
          }
        : undefined,
    });

    if (!userExists.length) {
      throw new BadRequestException(
        'Người dùng không tồn tại, vui lòng thử lại',
      );
    }

    return userExists;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        `Người dùng với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    const { name, email, phone, birthday, gender, role } = updateUserDto;

    const emailExists = await this.prisma.nguoiDung.findUnique({
      where: {
        email: email,
      },
    });

    if (emailExists && email !== userExists.email) {
      throw new BadRequestException('Email đã tồn tại');
    }

    const genderExists = await this.prisma.genders.findUnique({
      where: {
        id: gender,
      },
    });

    if (!genderExists) {
      throw new BadRequestException(
        'Không có giới tính này trong hệ thống, vui lòng thử 1, 2 hoặc 3',
      );
    }

    const roleExists = await this.prisma.roles.findUnique({
      where: {
        id: gender,
      },
    });

    if (!roleExists) {
      throw new BadRequestException(
        'Không có vai trò này trong hệ thống, vui lòng 1 hoặc 2',
      );
    }

    const updatedUser = await this.prisma.nguoiDung.update({
      where: {
        id: id,
      },

      data: {
        name: name,
        email: email,
        phone: phone,
        birthday: birthday,
        genderId: gender,
        ...(role !== null && role !== 0 ? { roleId: role } : { roleId: 2 }),
      },
    });

    return updatedUser;
  }

  async removeUser(id: number) {
    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        `Người dùng với ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    await this.prisma.nguoiDung.delete({
      where: {
        id,
      },
    });

    return true;
  }
}
