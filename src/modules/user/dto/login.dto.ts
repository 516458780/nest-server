import { IsNotEmpty, Matches } from 'class-validator';
import { regMobileCN } from 'src/utils/regex.util';

export class LoginDTO {
  @Matches(regMobileCN, { message: '请输入正确手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;
}
