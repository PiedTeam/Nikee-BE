import { config } from 'dotenv';
import fs from 'fs';
import path from 'path';

const env = process.env['NODE_ENV'];
console.log(env);
const envFileName = `.env.${env}`;

if (!env) {
  console.log(`Bạn chưa cung cấp biến môi trường cho file NODE_ENV`);
  console.log(`Hiện tại NODE_ENV=${env}`);
  process.exit(1);
}
console.log(`Phát hiện NODE_ENV=${env}, vì thế app sẽ dùng file môi trường là ${envFileName}`);

if (!fs.existsSync(path.resolve(envFileName))) {
  console.log(`Không tìm thấy file môi trường ${envFileName}`);
  console.log(
    `Lưu ý app không dùng file .env, ví dụ môi trường development thì app sẽ dùng file .env.development`,
  );
  process.exit(1);
}

export const isProduction = env == 'production';
config({
  path: envFileName,
});

export const envConfig = {
  PORT: process.env['PORT'] as string,
  NODE_ENV: process.env['NODE_ENV'] as string,
  DB_URI: process.env['DB_URI'] as string,
  DB_NAME: process.env['DB_NAME'] as string,
} as const;
