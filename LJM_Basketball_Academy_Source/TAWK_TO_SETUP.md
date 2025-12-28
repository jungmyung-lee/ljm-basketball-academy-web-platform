# Tawk.to Live Chat Setup Guide

This guide explains how to set up the Tawk.to live chat widget for LJM Basketball Academy.

## What is Tawk.to?

Tawk.to is a free live chat service that allows parents and visitors to contact you in real-time. It's perfect for:
- Answering quick questions from parents
- Helping with registration inquiries
- Providing immediate support to non-technical users
- Building stronger community connections

## Setup Instructions

### Step 1: Create a Tawk.to Account

1. Go to [https://www.tawk.to](https://www.tawk.to)
2. Click "Sign Up Free" (it's completely free, no credit card required)
3. Complete the registration process

### Step 2: Add Your Website

1. After logging in, go to "Administration" → "Property Settings"
2. Click "Add Property"
3. Enter your website name: "LJM Basketball Academy"
4. Enter your website URL (your actual domain or the Vercel preview URL)
5. Click "Save"

### Step 3: Get Your Widget Code

1. Go to "Administration" → "Chat Widget"
2. Click on "Direct Chat Link"
3. You'll see a code snippet that looks like this:
   ```
   https://embed.tawk.to/XXXXXXXXXXXXXX/YYYYYYYYYYYYY
   ```
4. Copy this entire URL (this is your widget URL)

### Step 4: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add a new environment variable:
   - **Name:** `NEXT_PUBLIC_TAWK_WIDGET_URL`
   - **Value:** Paste the URL you copied from Step 3
   - **Environments:** Select "Production", "Preview", and "Development"
4. Click "Save"
5. Redeploy your website for the changes to take effect

### Step 5: Test the Widget

1. After redeploying, visit your website
2. You should see a chat widget appear in the bottom-right corner
3. Click on it to test the chat functionality
4. You can monitor and respond to chats from your Tawk.to dashboard

## Customization Options

You can customize the widget appearance in your Tawk.to dashboard:

- **Widget Position:** Bottom-right, bottom-left, etc.
- **Widget Color:** Match your brand colors (orange/navy for LJM)
- **Greeting Message:** Welcome message for parents
- **Offline Message:** Auto-reply when you're not available
- **Operating Hours:** Set when the widget is active

Go to "Administration" → "Chat Widget" → "Widget Appearance" to make these changes.

## Managing Conversations

### Desktop App
Download the Tawk.to desktop app to receive notifications and respond quickly:
- [Windows](https://www.tawk.to/downloads/windows/)
- [macOS](https://www.tawk.to/downloads/mac/)

### Mobile App
Download the mobile app to respond on the go:
- [iOS App Store](https://apps.apple.com/app/tawk-to/id1038971825)
- [Android Play Store](https://play.google.com/store/apps/details?id=com.tawk.mobile)

## How to Disable the Chat Widget

If you need to temporarily disable or remove the chat widget:

### Option 1: Disable via Environment Variable (Recommended)
1. Go to Vercel → Settings → Environment Variables
2. Delete or rename the `NEXT_PUBLIC_TAWK_WIDGET_URL` variable
3. Redeploy the website

### Option 2: Remove from Code
1. Open `app/layout.tsx`
2. Comment out or delete this line:
   ```tsx
   <TawkToWidget />
   ```
3. Commit and deploy the change

### Option 3: Hide via Tawk.to Dashboard
1. Log into your Tawk.to dashboard
2. Go to "Administration" → "Chat Widget"
3. Toggle the widget to "Offline" or "Hidden"

## Troubleshooting

### Widget Not Appearing?
- Check that `NEXT_PUBLIC_TAWK_WIDGET_URL` is set correctly in Vercel
- Make sure you've redeployed after adding the environment variable
- Check browser console for any error messages
- Verify the URL format is correct (starts with `https://embed.tawk.to/`)

### Widget Appears but Can't Receive Messages?
- Check your Tawk.to dashboard to ensure the property is active
- Make sure you're logged into the Tawk.to dashboard or have the mobile app installed
- Check your email for message notifications

### Multiple Widgets Appearing?
- This shouldn't happen with the current setup
- If it does, clear your browser cache and reload

## Best Practices for Parents

To help parents use the chat effectively, consider:
1. Adding a note on the Contact page mentioning live chat availability
2. Setting clear operating hours in the Tawk.to dashboard
3. Creating auto-responses for common questions (registration, schedule, fees)
4. Enabling email notifications so you don't miss messages

## Support

For Tawk.to support:
- Documentation: [https://help.tawk.to](https://help.tawk.to)
- Contact: support@tawk.to
