const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up database and admin user...');

// Check if .env exists
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.log('❌ .env file not found. Please create one based on .env.example');
  process.exit(1);
}

try {
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  console.log('🗄️ Running database migrations...');
  try {
    execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Migration failed, trying to push schema...');
    execSync('npx prisma db push', { stdio: 'inherit' });
  }

  console.log('👤 Creating admin user...');
  execSync('node scripts/seed-admin.js', { stdio: 'inherit' });

  console.log('');
  console.log('🎉 Setup completed successfully!');
  console.log('');
  console.log('Admin Login Credentials:');
  console.log('📧 Email: isabelita@executivespower.com');
  console.log('🔑 Password: Admin@123123');
  console.log('');
  console.log('🌐 Access the admin portal at: http://localhost:3000/admin');
  console.log('');
  console.log('To start the development server, run: npm run dev');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  console.log('');
  console.log('💡 Troubleshooting:');
  console.log('1. Make sure your DATABASE_URL in .env is correct');
  console.log('2. Ensure your database server is running');
  console.log('3. Try running commands individually:');
  console.log('   - npx prisma generate');
  console.log('   - npx prisma migrate dev --name init');
  console.log('   - node scripts/seed-admin.js');
  process.exit(1);
}
