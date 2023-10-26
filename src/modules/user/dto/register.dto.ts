import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { regMobileCN } from 'src/utils/regex.util';

export class RegisterDTO {
  @Matches(regMobileCN, { message: '请输入正确手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  @IsNotEmpty({ message: '请输入用户昵称' })
  @IsString({ message: '名字必须是 String 类型' })
  readonly nickname: string;

  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;

  @IsNotEmpty({ message: '请再次输入密码' })
  readonly passwordRepeat: string;
}
