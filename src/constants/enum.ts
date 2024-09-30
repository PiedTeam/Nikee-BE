export enum TokenType {
  AccessToken,
  RefreshToken,
}

export enum UserStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực email
  Banned, // bị khóa
}
