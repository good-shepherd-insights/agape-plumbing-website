# EmailJS Setup Instructions

## Overview
EmailJS has been successfully integrated into your Agape Plumbing website forms. Both the Hero section form and Contact page form are now configured to send emails to your Gmail account.

## What's Already Done
✅ EmailJS package installed (`@emailjs/browser`)
✅ Environment variables configured in `.env`
✅ EmailJS configuration file created (`src/lib/emailjs.ts`)
✅ Hero form updated with EmailJS integration
✅ Contact form updated with EmailJS integration
✅ Form validation and error handling implemented
✅ Loading states and success/error messages added

## Required Setup Steps

To complete the EmailJS integration, you need to:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Connect Your Gmail Account
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Follow the OAuth flow to connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - Agape Plumbing

From: {{first_name}} {{last_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Service: {{service_type}}

Message:
{{message}}

---
Sent from Agape Plumbing website contact form
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### 4. Update Configuration
The configuration in `src/lib/emailjs.ts` now supports multiple templates:
```typescript
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    hero: import.meta.env.VITE_EMAILJS_HERO_TEMPLATE_ID || 'hero_contact_form',
    contact: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'contact_page_form',
  },
};
```

### 5. Test the Forms
1. Start your development server: `npm run dev`
2. Navigate to the homepage and test the Hero form
3. Navigate to `/contact` and test the Contact form
4. Check your Gmail inbox for test emails

## Template Design

Two separate templates are recommended for optimal user experience:

### Hero Form Template (`hero_contact_form`)
**Purpose**: Quick contact form for immediate service requests
**Fields**:
- `{{user_name}}` - Customer's full name
- `{{user_phone}}` - Customer's phone number
- `{{user_email}}` - Customer's email address
- `{{message}}` - Customer's message/inquiry
- `{{submission_date}}` - Auto-generated submission date
- `{{submission_time}}` - Auto-generated submission time

### Contact Form Template (`contact_page_form`)
**Purpose**: Detailed contact form for comprehensive service inquiries
**Fields**:
- `{{first_name}}` - Customer's first name
- `{{last_name}}` - Customer's last name
- `{{user_email}}` - Customer's email address
- `{{user_phone}}` - Customer's phone number
- `{{service_type}}` - Type of plumbing service needed
- `{{message}}` - Detailed message/description
- `{{submission_date}}` - Auto-generated submission date
- `{{submission_time}}` - Auto-generated submission time

## Environment Variables
Your `.env` file contains:
```
VITE_EMAILJS_PUBLIC_KEY=NZU8zBYQlVOVMY-Hz
VITE_EMAILJS_PRIVATE_KEY=X7KULWxk8IQwS-YU-GuEW
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_HERO_TEMPLATE_ID=hero_contact_form
VITE_EMAILJS_CONTACT_TEMPLATE_ID=contact_page_form
```

## Features Included

### Form Validation
- All fields are required
- Email format validation
- Phone number format validation

### User Experience
- Loading states during submission
- Success/error messages
- Form reset after successful submission
- Disabled submit button during processing
- Multiple template support
- Automatic timestamp injection

### Error Handling
- Network error recovery
- EmailJS service error handling
- User-friendly error messages
- Template-specific helper functions
- Enhanced error handling

### Rate Limiting
- 10-second throttle between submissions
- Prevents spam submissions

## Troubleshooting

### Common Issues:
1. **"EmailJS public key not configured"** - Check your `.env` file
2. **"Service not found"** - Verify your Service ID in `emailjs.ts`
3. **"Template not found"** - Verify your Template ID in `emailjs.ts`
4. **Emails not received** - Check Gmail spam folder

### Testing Tips:
- Use your own email for testing
- Check EmailJS dashboard for delivery logs
- Monitor browser console for errors

## Security Notes
- Public key is safe to expose in frontend
- Private key is not used in frontend code
- Rate limiting prevents abuse
- Form validation prevents malicious input

## Support
For EmailJS-specific issues, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)