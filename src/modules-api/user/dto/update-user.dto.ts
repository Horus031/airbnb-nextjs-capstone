import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from 'src/common/dto/user.dto';

export class UpdateUserDto extends OmitType(UserDto, ['password']) {}
