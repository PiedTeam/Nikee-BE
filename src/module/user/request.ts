import { JwtPayload } from 'jsonwebtoken';
import { TokenType, UserStatus } from '../../constants/enum';

export interface TokenPayload extends JwtPayload {
  user_id: string;
  token_type: TokenType;
  verify: UserStatus;
  exp: number;
  iat: number;
}
