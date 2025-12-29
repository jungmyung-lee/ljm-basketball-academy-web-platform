# Email Setup Instructions

This contact form sends emails to **jm0541@naver.com** using the Resend email service.

## Setup Steps

1. **Get a Resend API Key** (Free)
   - Go to [resend.com](https://resend.com)
   - Sign up for a free account
   - Navigate to API Keys section
   - Create a new API key

2. **Add Environment Variable**
   - In your Vercel project settings, go to "Environment Variables"
   - Add a new variable:
     - **Name:** `RESEND_API_KEY`
     - **Value:** Your Resend API key (starts with `re_`)
   - Save and redeploy your project

3. **Test the Form**
   - After deployment, fill out the contact form on your website
   - Check jm0541@naver.com for the email

## How It Works

- When a user submits the contact form, it sends a POST request to `/api/contact`
- The API route uses Resend to send an email to jm0541@naver.com
- The email contains all the form information (name, email, phone, student age, message)
- User sees a success message after submission

## Troubleshooting

If emails aren't being received:
- Check that RESEND_API_KEY is set correctly in Vercel
- Verify the email isn't in spam/junk folder
- Check Vercel function logs for error messages
- Make sure you've redeployed after adding the environment variable

## Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month
- Perfect for a contact form
