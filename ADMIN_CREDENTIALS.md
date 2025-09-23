# Admin Portal Access

## 🔐 Admin Login Credentials

**Email:** `isabelita@executivespower.com`  
**Password:** `Admin@123123`

## 🌐 Access URLs

- **Admin Portal:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Sign In Page:** [http://localhost:3000/auth/signin](http://localhost:3000/auth/signin)

## 🚀 Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the admin portal:**
   - Navigate to: http://localhost:3000/admin
   - You'll be redirected to sign-in if not authenticated

3. **Sign in with the credentials above**

4. **Manage leads:**
   - View all leads from checkout forms
   - Filter by status (Pending, Paid, Cancelled, Refunded)
   - Search by name, email, or employer
   - Update lead status and add notes
   - View detailed lead information

## 📊 Admin Portal Features

- **Dashboard Statistics:** Total leads, conversion rates, revenue tracking
- **Lead Management:** Complete CRUD operations for leads
- **Payment Integration:** Automatic status updates from Stripe webhooks
- **Search & Filter:** Advanced filtering and search capabilities
- **Notes System:** Add internal notes and comments to leads
- **Secure Authentication:** Protected routes with session management

## 🔧 Database Management

- **View Database:** `npm run db:studio` (opens Prisma Studio)
- **Reset Admin:** `npm run seed:admin` (recreates admin user)
- **Full Setup:** `npm run setup` (complete database setup)

## 🛡️ Security Notes

- Change the default password after first login
- The admin user has full access to all lead data
- All admin routes are protected by authentication
- Sessions are managed securely with NextAuth

---

**Note:** This admin user was created automatically during the database setup process.
