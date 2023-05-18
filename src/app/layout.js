import './../styles/index.css';
import { Poppins } from 'next/font/google'
import Providers from './Providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Test IMP Studio',
  description: 'FE Submission : Aziz Nur Abdul Qodir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
