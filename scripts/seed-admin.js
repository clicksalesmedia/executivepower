const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  console.log('🌱 Creating admin user...');

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
      const admin = await prisma.user.create({
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

    console.log('🎉 Admin user setup completed!');
    console.log('');
    console.log('You can now sign in at: http://localhost:3000/auth/signin');
    console.log('Email:', adminEmail);
    console.log('Password:', adminPassword);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    
    if (error.code === 'P1001') {
      console.log('');
      console.log('💡 Database connection failed. Please ensure:');
      console.log('1. Your database is running');
      console.log('2. DATABASE_URL in .env is correct');
      console.log('3. Run: npx prisma migrate dev --name init');
    }
    
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
