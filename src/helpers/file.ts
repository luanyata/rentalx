import fs from 'fs';

import { AppError } from '@shared/errors/AppError';

const deleteFile = async (filename: string): Promise<void> => {
  try {
    await fs.promises.stat(filename);
    await fs.promises.unlink(filename);
  } catch {
    throw new AppError('File not fund');
  }
};

export { deleteFile };
