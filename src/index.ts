import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.user
  .create({
    data: {
      name: "André Coelho",
      email: "andrevrcoelho@hotmail.com",
    },
  })
  .then(() => {
    console.log("🚀");
  });
