import { Bungee_Shade } from 'next/font/google'
import './globals.css'

 const BungeeShade = Bungee_Shade({
    subsets: ['latin'],
    variable:"--font-Bungee-Shade",
    weight:"400",
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={{BungeeShade}}>{children}</body>

    </html>
  )
}
