require('dotenv').config({ path: '../.env' });
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Find all yield opportunities with APY > 5%
    const opportunities = await prisma.yieldOpportunity.findMany({
      where: {
        apy: {
          gt: 5.0
        }
      },
      select: {
        name: true,
        apy: true,
        protocol: true,
        tokenSymbol: true,
        tvl: true
      }
    });

    console.log('Found opportunities:', opportunities);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 