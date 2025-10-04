import { PrismaClient } from './generated/prisma'

const globalForPrisma = globalThis;

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;

// globalThis is a Node.js global variable that is accessible in all modules. This global variable ensures that the PrismaClient instance is reused across hot reloads during development, preventing multiple instances from being created. Without this, each time your application reloads, a new instance of PrismaClient would be created, which could lead to exhausting your database connections. By attaching the PrismaClient instance to globalThis, we ensure that only one instance is used throughout the application lifecycle in a development environment.