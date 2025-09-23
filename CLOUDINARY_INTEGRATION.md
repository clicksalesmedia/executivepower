# Cloudinary CV Upload Integration

## Overview
This integration allows users to upload their CV files during the checkout process. Files are securely stored in Cloudinary and can be viewed/downloaded from the admin dashboard.

## Features

### 🔄 File Upload Process
1. **User uploads CV** in checkout form (`/checkout/form`)
2. **Lead is created** in database
3. **CV is uploaded** to Cloudinary with validation
4. **Database is updated** with CV metadata
5. **User proceeds** to payment

### 📁 File Management
- **Storage**: Cloudinary cloud storage
- **Organization**: Files stored in `executive-power/cvs/` folder
- **Naming**: `cv_{leadId}_{timestamp}.{extension}`
- **Validation**: PDF, DOC, DOCX files only, max 10MB

### 🔒 Security
- **File type validation** prevents malicious uploads
- **Size limits** prevent abuse
- **Secure URLs** from Cloudinary
- **Lead association** ensures proper access control

## Configuration

### Environment Variables
```env
CLOUDINARY_CLOUD_NAME="do2rvetvsm"
CLOUDINARY_API_KEY="432328447536336"
CLOUDINARY_API_SECRET="RBUvJEXjL3FohabGR2YXmMQkg4I"
```

### Database Schema
New fields added to `Lead` model:
- `cvUrl`: Cloudinary secure URL
- `cvPublicId`: Cloudinary public ID for management
- `cvFileSize`: File size in bytes
- `cvFormat`: File format (pdf, doc, docx)

## API Endpoints

### POST `/api/upload-cv`
Uploads CV file to Cloudinary
- **Input**: FormData with `file` and `leadId`
- **Output**: Upload result with URL and metadata
- **Validation**: File type, size, lead ID

### PUT `/api/leads`
Updated to handle CV metadata
- **CV Update**: Public route for CV data
- **Admin Update**: Protected route for status/notes

## Admin Dashboard Features

### 📊 Lead List View
- **CV Indicator**: Green badge shows "CV" for leads with uploaded files
- **Visual Feedback**: Easy identification of complete applications

### 📋 Lead Details View
- **Download Button**: Direct link to CV file
- **File Metadata**: Size and format information
- **Secure Access**: Opens in new tab with Cloudinary security

## File Flow

```
User Upload → Validation → Cloudinary → Database → Admin Dashboard
     ↓             ↓           ↓           ↓            ↓
  Form Submit → Size/Type → Cloud Store → CV Metadata → Download Link
```

## Error Handling

### Upload Failures
- **Network Issues**: Graceful degradation, form still submits
- **File Validation**: Clear error messages to user
- **Storage Errors**: Logged for debugging, user notified

### Admin Access
- **Missing Files**: Handled gracefully in UI
- **Broken Links**: Cloudinary provides reliable URLs
- **Permissions**: Secure access through Cloudinary

## Testing

### Manual Testing Steps
1. Go to `/checkout/form?package=signature_intensive&price=2083`
2. Fill out form and upload a CV file
3. Submit form and complete payment flow
4. Check admin dashboard at `/admin`
5. Verify CV indicator and download functionality

### File Types to Test
- ✅ PDF files
- ✅ DOC files  
- ✅ DOCX files
- ❌ Other formats (should be rejected)

## Monitoring

### Cloudinary Dashboard
- Monitor upload usage
- View stored files
- Manage storage quotas

### Application Logs
- Upload success/failure rates
- File validation errors
- Database update issues

## Future Enhancements

### Potential Improvements
- **File Preview**: In-browser PDF preview
- **Multiple Files**: Support for cover letters, portfolios
- **File Versioning**: Track CV updates over time
- **Bulk Operations**: Admin bulk download/management
- **Analytics**: Track upload completion rates

### Performance Optimizations
- **Lazy Loading**: Load CV data on demand
- **Caching**: Cache file metadata
- **CDN**: Leverage Cloudinary's global CDN
- **Compression**: Automatic file optimization

## Troubleshooting

### Common Issues
1. **Upload Timeout**: Check file size and network
2. **Invalid File Type**: Verify PDF/DOC/DOCX format
3. **Missing CV in Admin**: Check database CV fields
4. **Download Fails**: Verify Cloudinary URL validity

### Debug Steps
1. Check browser network tab for API calls
2. Verify environment variables are set
3. Check Cloudinary dashboard for uploaded files
4. Review application logs for errors

