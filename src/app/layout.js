
import Navigation from '@/components/Navigation/page'
import '../styles/globals.scss'
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
