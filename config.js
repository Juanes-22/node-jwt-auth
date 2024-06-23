export const {
  PORT = 3000,
  SALT_ROUNDS = 10, // prod = 10, test = 1
  SECRET_JWT_KEY = 'this-is-an-awesome-secret-key'
} = process.env
