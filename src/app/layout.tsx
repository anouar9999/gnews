import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'rc-slider/assets/index.css'
import CustomizeControl from './customize-control'
import ThemeProvider from './theme-provider'
import localFont from 'next/font/local'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const myFont = localFont({
  src: '../../public/fonts/Samuel-font-defharo.ttf',
  // Or multiple weights:
  // src: [
  //   { path: '/fonts/font-regular.woff2', weight: '400' },
  //   { path: '/fonts/font-bold.woff2', weight: '700' },
  // ],
  display: 'swap',
})
export const metadata: Metadata = {
  title: {
    template: '%s - Gnews',
    default: 'Gnews - Booking online React Next.js template',
  },
  description: 'Booking online & rental online Next.js Template',
  keywords: ['Gnews', 'Booking online', 'Rental online', 'React Next.js template'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>
            {children}

            {/* For Gnews's demo  -- you can remove it  */}
            {/* <CustomizeControl /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
