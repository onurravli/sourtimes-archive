import * as crypto from 'crypto';

const generateId = (length?: number) => {
  const id = crypto.randomBytes(length || 25).toString('hex');
  return id;
};

export { generateId };
