import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Encode Club Lesson 16',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
