import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Admin user credentials
  const adminEmail = 'isabelita@executivespower.com';
  const adminPassword = 'Admin@123123';
  const adminName = 'Isabelita Castilho';

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail }
    });

    if (existingAdmin) {
      console.log('✅ Admin user already exists:', adminEmail);
      
      // Update password if needed
      const hashedPassword = await bcrypt.hash(adminPassword, 12);
      await prisma.user.update({
        where: { email: adminEmail },
        data: { 
          password: hashedPassword,
          name: adminName 
        }
      });
      console.log('🔄 Admin password updated');
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(adminPassword, 12);

      // Create admin user
      await prisma.user.create({
        data: {
          email: adminEmail,
          name: adminName,
          password: hashedPassword,
          role: 'admin'
        }
      });

      console.log('✅ Admin user created successfully:');
      console.log('📧 Email:', adminEmail);
      console.log('👤 Name:', adminName);
      console.log('🔑 Password:', adminPassword);
    }

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
