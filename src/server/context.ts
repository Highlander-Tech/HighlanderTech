import type { inferAsyncReturnType } from '@trpc/server';
import { sendEmail } from '../utils/sendEmail';

export async function createContext() {
  return {
    sendEmail,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
