import dotenv from 'dotenv';

dotenv.config();

import { z } from 'zod';

const schema = z.object({
  // Node
  NODE_ENV: z
    .union([z.literal('development'), z.literal('production')])
    .optional()
    .default('development'),

  // Server
  SERVER_URL: z.string(),

  // Firebase Admin
  FIREBASE_ADMIN_PROJECT_ID: z.string(),
  FIREBASE_ADMIN_CLIENT_EMAIL: z.string(),
  FIREBASE_ADMIN_PRIVATE_KEY: z.string(),
});

export const env = schema.parse({
  NODE_ENV: process.env.NODE_ENV,
  SERVER_URL: process.env.SERVER_URL,
  FIREBASE_ADMIN_PROJECT_ID: process.env.FIREBASE_ADMIN_PROJECT_ID,
  FIREBASE_ADMIN_CLIENT_EMAIL: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  FIREBASE_ADMIN_PRIVATE_KEY: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
});
