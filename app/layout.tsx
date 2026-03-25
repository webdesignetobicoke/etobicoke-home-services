import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '#1 Home Services in Etobicoke | Heating, Cooling, Plumbing | Etobicoke Home Services',
  description: 'Etobicoke Home Services is your trusted local contractor for heating, cooling, plumbing and electrical. Serving Etobicoke, Toronto and the GTA. Call now for same-day service!',
  keywords: 'HVAC Etobicoke, furnace repair Toronto, AC repair GTA, plumber Etobicoke, Etobicoke Home Services, heating cooling plumbing electrical Toronto',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
