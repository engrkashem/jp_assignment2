import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  //   saltRound: process.env.SALT_ROUND,
  //   jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  //   jwtExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
};
