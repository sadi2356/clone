import { Nunito } from 'next/font/google';

import './globals.css'

import ToastProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
// Components
import Navbar from './components/navbar';
import ClientOnly from './components/ClientOnly';
// Modals
import RegisterModal from './components/modals/RegisterModal';
import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import SearchModal from './components/modals/SearchModal';
import Categories from './components/navbar/Categories';

export const metadata = {
  title: 'Urban States | Home',
  description: 'Urban Real Estates',
  icon: {
    url: "/favicon.png",
    type: "image/png",
  },
  shortcut: { url: "/favicon.png", type: "image/png" },
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({ children, }: { children: React.ReactNode }) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28 grid grid-cols-1 md:grid-cols-[10%_90%] gap-10'>
          <Categories />
          {children}
        </div>
      </body>
    </html>
  )
}
