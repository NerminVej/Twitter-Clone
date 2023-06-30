import { PrismaClient } from "@prisma/client";

// Declare a global variable for PrismaClient
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient instance or use the existing global instance
const client = globalThis.prisma || new PrismaClient();

// Set the global prisma variable in development environment
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

// Export the PrismaClient instance
export default client;
