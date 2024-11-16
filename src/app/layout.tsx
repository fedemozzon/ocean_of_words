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
      <body className={`${lora.className} min-h-screen flex flex-col items-center justify-center bg-[#f4e8d1] bg-[url('/paper-texture.png')] bg-repeat`}>
        <main className="w-full max-w-4xl px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}