"use client"

import { useEffect } from "react"

/**
 * Tawk.to Live Chat Widget
 *
 * This component integrates real-time live chat support for LJM Basketball Academy.
 * Parents can use this to contact the academy directly for inquiries and support.
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.tawk.to and sign up for a free account
 * 2. Add your website (ljmbasketball.com or your domain)
 * 3. Copy the widget code they provide (it will look like a URL)
 * 4. Add the NEXT_PUBLIC_TAWK_WIDGET_URL environment variable in Vercel
 *    Format: https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID
 * 5. Deploy and the chat widget will appear on all pages
 *
 * TO DISABLE THE WIDGET:
 * - Option 1: Remove the NEXT_PUBLIC_TAWK_WIDGET_URL environment variable
 * - Option 2: Comment out <TawkToWidget /> in app/layout.tsx
 * - Option 3: Delete this file and remove the import from layout.tsx
 *
 * CUSTOMIZATION:
 * - You can customize the widget appearance in your Tawk.to dashboard
 * - Position, colors, and messages can all be configured there
 */
export default function TawkToWidget() {
  useEffect(() => {
    // Get the Tawk.to widget URL from environment variables
    const tawkWidgetUrl = process.env.NEXT_PUBLIC_TAWK_WIDGET_URL

    // Only load the widget if the URL is configured
    if (!tawkWidgetUrl) {
      console.warn(
        "[Tawk.to] Widget URL not configured. Add NEXT_PUBLIC_TAWK_WIDGET_URL to your environment variables.",
      )
      return
    }

    // Ensure this only runs in the browser (client-side)
    if (typeof window === "undefined") return

    // Check if Tawk.to is already loaded to prevent duplicate loading
    if (window.Tawk_API) {
      return
    }

    // Load the Tawk.to widget script
    const script = document.createElement("script")
    script.async = true
    script.src = tawkWidgetUrl
    script.charset = "UTF-8"
    script.setAttribute("crossorigin", "*")

    // Append script to body
    document.body.appendChild(script)

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // This component doesn't render any visible elements
  // The Tawk.to script will inject the chat widget into the page
  return null
}

// Type declaration for Tawk_API to avoid TypeScript errors
declare global {
  interface Window {
    Tawk_API?: unknown
  }
}
