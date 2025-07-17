# EmailJS Template Design Guide for Agape Plumbing

This guide provides detailed instructions for creating EmailJS templates that work with the Hero form and Contact page form.

## Form Field Analysis

### Hero Form Fields (Quick Contact)
- `user_name` - Customer's full name
- `user_phone` - Customer's phone number
- `user_email` - Customer's email address
- `message` - Customer's message/inquiry

### Contact Page Form Fields (Detailed Contact)
- `first_name` - Customer's first name
- `last_name` - Customer's last name
- `user_email` - Customer's email address
- `user_phone` - Customer's phone number
- `service_type` - Selected service category
- `message` - Detailed message/inquiry

## Recommended Template Structure

### Template 1: Hero Form Template (ID: `hero_contact_form`)

**Subject Line:**
```
New Quick Contact Request from {{user_name}}
```

**Email Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🔧 New Contact Request</h1>
            <p style="margin: 10px 0 0 0;">Agape Plumbing - Hero Form Submission</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">Customer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{user_name}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{user_email}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{user_phone}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px 0;">{{message}}</td>
                </tr>
            </table>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 15px; margin-top: 20px;">
                <p style="margin: 0; font-weight: bold; color: #92400e;">⚡ Quick Response Required</p>
                <p style="margin: 5px 0 0 0; color: #92400e;">This is a hero form submission - customer expects fast response!</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #64748b; font-size: 14px;">Submitted on {{submission_date}} at {{submission_time}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Email Fields:**
- **To Email:** your-business-email@domain.com
- **From Name:** Agape Plumbing Website
- **From Email:** Use default EmailJS email
- **Reply-To:** {{user_email}}
- **Subject:** New Quick Contact Request from {{user_name}}

### Template 2: Contact Page Template (ID: `contact_page_form`)

**Subject Line:**
```
Detailed Contact Request - {{service_type}} Service
```

**Email Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Detailed Contact Request</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🔧 Detailed Contact Request</h1>
            <p style="margin: 10px 0 0 0;">Agape Plumbing - Contact Page Submission</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1e40af; margin-top: 0;">Customer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{first_name}} {{last_name}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{user_email}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">{{user_phone}}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Service Type:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 4px; font-weight: bold;">{{service_type}}</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                    <td style="padding: 10px 0;">{{message}}</td>
                </tr>
            </table>
            
            <div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: 6px; padding: 15px; margin-top: 20px;">
                <p style="margin: 0; font-weight: bold; color: #047857;">📋 Detailed Inquiry</p>
                <p style="margin: 5px 0 0 0; color: #047857;">Customer provided detailed information - review service type and message carefully.</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <p style="color: #64748b; font-size: 14px;">Submitted on {{submission_date}} at {{submission_time}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Email Fields:**
- **To Email:** your-business-email@domain.com
- **From Name:** Agape Plumbing Website
- **From Email:** Use default EmailJS email
- **Reply-To:** {{user_email}}
- **Subject:** Detailed Contact Request - {{service_type}} Service

## Auto-Reply Templates (Optional)

### Auto-Reply for Hero Form (ID: `hero_auto_reply`)

**Subject Line:**
```
Thank you for contacting Agape Plumbing!
```

**Email Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank You</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🔧 Thank You, {{user_name}}!</h1>
            <p style="margin: 10px 0 0 0;">We received your message</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px;">
            <p>Hi {{user_name}},</p>
            
            <p>Thank you for reaching out to Agape Plumbing! We've received your message and will get back to you within 2-4 hours during business hours.</p>
            
            <div style="background: #fef2f2; border: 1px solid #ef4444; border-radius: 6px; padding: 15px; margin: 20px 0;">
                <p style="margin: 0; font-weight: bold; color: #dc2626;">🚨 Emergency?</p>
                <p style="margin: 5px 0 0 0; color: #dc2626;">If this is a plumbing emergency, please call us immediately at <strong>(555) 123-4567</strong></p>
            </div>
            
            <p><strong>What happens next:</strong></p>
            <ul>
                <li>We'll review your request</li>
                <li>A team member will contact you within 2-4 hours</li>
                <li>We'll schedule a convenient time for service</li>
            </ul>
            
            <p>Best regards,<br>
            <strong>The Agape Plumbing Team</strong></p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 14px;">📞 (555) 123-4567 | 📧 info@agapeplumbing.com</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Email Fields:**
- **To Email:** {{user_email}}
- **From Name:** Agape Plumbing
- **From Email:** Use default EmailJS email
- **Reply-To:** your-business-email@domain.com

## Dynamic Variables Available

### Standard Variables (Available in all templates)
- `{{submission_date}}` - Date of form submission
- `{{submission_time}}` - Time of form submission
- `{{user_email}}` - Customer's email
- `{{user_phone}}` - Customer's phone
- `{{message}}` - Customer's message

### Hero Form Specific
- `{{user_name}}` - Full name from hero form

### Contact Form Specific
- `{{first_name}}` - First name
- `{{last_name}}` - Last name
- `{{service_type}}` - Selected service category

## Environment Variables Needed

Add these to your `.env` file:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_PRIVATE_KEY=your_private_key
VITE_EMAILJS_HERO_TEMPLATE_ID=hero_contact_form
VITE_EMAILJS_CONTACT_TEMPLATE_ID=contact_page_form
```

## Implementation Notes

1. **Template IDs**: Use descriptive IDs like `hero_contact_form` and `contact_page_form`
2. **Field Mapping**: Ensure form field names match template variables exactly
3. **Testing**: Use EmailJS test feature to verify templates work correctly
4. **Styling**: Templates use inline CSS for maximum email client compatibility
5. **Responsive**: Templates are designed to work on mobile and desktop email clients
6. **Branding**: Update colors and styling to match your brand guidelines

## Security Considerations

- Never expose private keys in frontend code
- Use environment variables for all sensitive data
- Enable rate limiting to prevent spam
- Consider adding CAPTCHA for additional protection
- Monitor EmailJS usage to detect unusual activity