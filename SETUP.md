# Executive Power Lead Management System Setup

This guide will help you set up the complete lead management system with PostgreSQL, Prisma, and NextAuth authentication.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Stripe account for payments

## Setup Instructions

### 1. Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Update the following variables in `.env`:

```env
# Database - Replace with your PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/isabellita_leads"

# NextAuth - Generate a secure secret
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Stripe - Get from your Stripe dashboard
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Admin User - For initial admin account
ADMIN_EMAIL="admin@executivepower.com"
ADMIN_PASSWORD="your-secure-password"
ADMIN_NAME="Admin User"
```

### 2. Database Setup

Run the Prisma migrations to create the database tables:

```bash
npx prisma migrate dev --name init
```

### 3. Create Admin User

Run the script to create your first admin user:

```bash
node scripts/create-admin.js
```

This will create an admin user with the credentials from your `.env` file.

### 4. Start the Development Server

```bash
npm run dev
```

## Usage

### Admin Portal

1. Navigate to `/admin`
2. Sign in with your admin credentials
3. View and manage leads from the dashboard

### Lead Flow

1. Users visit `/checkout` to select a package
2. Fill out the form at `/checkout/form`
3. Complete payment at `/checkout/[packageId]`
4. Leads are automatically created and tracked
5. Payment success updates lead status to "PAID"

## Database Schema

### Lead Model
- **id**: Unique identifier
- **name**: Customer name
- **email**: Customer email
- **linkedinUrl**: LinkedIn profile
- **currentEmployer**: Current/last employer
- **jobTitles**: Current and previous job titles
- **jobSearchDuration**: How long they've been searching
- **freelanceConsulting**: Whether they do freelance work
- **cvFileName**: Uploaded CV filename
- **packageId**: Selected package (basic/comprehensive)
- **packageName**: Package display name
- **price**: Package price
- **currency**: Currency (EUR)
- **status**: PENDING | PAID | CANCELLED | REFUNDED
- **paymentIntentId**: Stripe payment intent ID
- **notes**: Admin notes
- **createdAt**: Creation timestamp
- **updatedAt**: Last update timestamp

### User Model (Admin)
- **id**: Unique identifier
- **name**: Admin name
- **email**: Admin email (login)
- **password**: Hashed password
- **role**: User role (admin)
- **createdAt**: Creation timestamp
- **updatedAt**: Last update timestamp

## API Endpoints

### Public Endpoints
- `POST /api/leads` - Create new lead (form submission)

### Protected Endpoints (Admin only)
- `GET /api/leads` - Fetch all leads
- `PUT /api/leads` - Update lead status/notes

### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out

### Webhooks
- `POST /api/webhook/stripe` - Stripe payment webhooks

## Features

### Admin Dashboard
- **Real-time Statistics**: Total leads, conversion rates, revenue
- **Lead Management**: View, filter, and update lead status
- **Search & Filter**: Find leads by name, email, status
- **Notes System**: Add internal notes to leads
- **Payment Tracking**: Automatic status updates from Stripe

### Security
- **Authentication**: NextAuth with credentials provider
- **Protected Routes**: Admin routes require authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Session Management**: JWT-based sessions

### Payment Integration
- **Stripe Integration**: Secure payment processing
- **Webhook Handling**: Automatic status updates
- **Multiple Currencies**: EUR support
- **Payment Tracking**: Link payments to leads

## Deployment

### Database Migration (Production)
```bash
npx prisma migrate deploy
```

### Environment Variables
Make sure to set all production environment variables in your hosting platform.

### Stripe Webhooks
Configure your Stripe webhook endpoint to point to:
`https://yourdomain.com/api/webhook/stripe`

## Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Check firewall settings for database access

### Authentication Issues
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Ensure admin user was created successfully

### Payment Issues
- Verify Stripe keys are correct
- Check webhook endpoint configuration
- Monitor Stripe dashboard for errors

## Support

For technical support or questions about the lead management system, please contact the development team.
