# EmailJS Setup Instructions

To enable automatic email sending from the forms, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Templates

### Template 1: Quote Request
1. Go to "Email Templates"
2. Click "Create New Template"
3. Name it: `template_quote_request`
4. Use this template:
```
Subject: New Quote Request - Reham Shipping

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Location: {{location}}

Message:
{{message}}

---
This is a quote request from the Reham Shipping website.
```

5. Set "To Email" to: `animeshbms@gmail.com`
6. Copy the **Template ID** (e.g., `template_xxxxx`)

### Template 2: Contact Form
1. Create another template
2. Name it: `template_contact_form`
3. Use this template:
```
Subject: New Contact Form - Reham Shipping

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Required: {{service}}
Shipment Type: {{shipment_type}}

Message:
{{message}}

---
This is a contact form submission from the Reham Shipping website.
```

4. Set "To Email" to: `animeshbms@gmail.com`
5. Copy the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Code
Update the following files with your EmailJS credentials:

### QuoteRequestForm.tsx
Replace these lines (around line 71-73):
```typescript
const serviceId = 'service_reham_shipping'; // Replace with your EmailJS service ID
const templateId = 'template_quote_request'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

### Contact.tsx
Replace these lines (around line 30-32):
```typescript
const serviceId = 'service_reham_shipping'; // Replace with your EmailJS service ID
const templateId = 'template_contact_form'; // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
```

## Testing
1. Fill out the "Request a Quote" form and submit
2. Check `animeshbms@gmail.com` for the email
3. Fill out the "Get in Touch" form and submit
4. Check `animeshbms@gmail.com` for the email

## Free Tier Limits
- 200 emails per month (free tier)
- Upgrade to paid plan for more emails if needed

