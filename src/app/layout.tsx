import './globals.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const metadata = {
  title: 'Phrase Ocean',
  description: 'A sea of words and phrases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}