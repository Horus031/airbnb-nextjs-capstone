import { OmitType } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

export class UpdateUserDto extends OmitType(UserDto, ['password']) {}
