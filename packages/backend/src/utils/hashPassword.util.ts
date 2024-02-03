import * as bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
};

export { hashPassword };
