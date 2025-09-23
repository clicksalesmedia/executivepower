# Troubleshooting Guide

## Common Issues and Solutions

### 1. Prisma Client Not Initialized Error

**Error Message:**
```
@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
```

**Solution:**
```bash
# Generate the Prisma client
npx prisma generate

# Restart the development server
npm run dev
```

**Prevention:**
The `npm run dev` command now automatically runs `prisma generate` before starting the server.

### 2. Database Connection Issues

**Error Message:**
```
Can't reach database server at localhost:51214
```

**Solution:**
```bash
# Start the Prisma Postgres server
npx prisma dev

# In another terminal, run the app
npm run dev
```

### 3. Migration Issues

**Error Message:**
```
Drift detected: Your database schema is not in sync
```

**Solution:**
```bash
# Reset and recreate the database
npx prisma migrate reset

# Or push the schema directly
npx prisma db push

# Recreate admin user
npm run seed:admin
```

### 4. Authentication Issues

**Problem:** Can't sign in to admin portal

**Solution:**
1. Ensure admin user exists:
   ```bash
   npm run seed:admin
   ```

2. Check credentials:
   - Email: `isabelita@executivespower.com`
   - Password: `Admin@123123`

3. Verify environment variables in `.env`:
   ```env
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key-change-this-in-production"
   ```

### 5. Build Issues

**Error:** Build fails with Prisma errors

**Solution:**
```bash
# Clean and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run setup
npm run dev
```

### 6. TypeScript Errors

**Error:** Type errors related to Prisma

**Solution:**
```bash
# Regenerate Prisma client and types
npx prisma generate

# Restart TypeScript server in your IDE
```

## Quick Reset Commands

### Complete Reset
```bash
# Full reset of everything
npm run setup
```

### Database Only Reset
```bash
npx prisma migrate reset
npm run seed:admin
```

### Client Only Reset
```bash
npx prisma generate
```

## Environment Setup Checklist

- [ ] `.env` file exists with all required variables
- [ ] Database server is running (`npx prisma dev`)
- [ ] Prisma client is generated (`npx prisma generate`)
- [ ] Database tables are created (`npx prisma migrate dev`)
- [ ] Admin user is created (`npm run seed:admin`)

## Getting Help

If you're still experiencing issues:

1. Check the terminal output for specific error messages
2. Verify all environment variables are set correctly
3. Ensure the database server is running
4. Try the complete reset process above

## Development Workflow

1. **First time setup:**
   ```bash
   npm install
   npm run setup
   npm run dev
   ```

2. **Daily development:**
   ```bash
   npm run dev
   ```

3. **After schema changes:**
   ```bash
   npx prisma migrate dev
   npm run dev
   ```

4. **After pulling changes:**
   ```bash
   npm install
   npx prisma generate
   npm run dev
   ```
