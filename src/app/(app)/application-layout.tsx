import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Footer3 from '@/components/Footer3'
import Footer4 from '@/components/Footer4'
import FooterQuickNavigation from '@/components/FooterQuickNavigation'
import Header from '@/components/Header/Header'
import HeroSearchFormMobile from '@/components/HeroSearchFormMobile/HeroSearchFormMobile'
import Aside from '@/components/aside'
import AsideSidebarNavigation from '@/components/aside-sidebar-navigation'
import Link from 'next/link'
import 'rc-slider/assets/index.css'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  header?: ReactNode
}

const ApplicationLayout: React.FC<Props> = ({ children, header }) => {
  
  return (
    <Aside.Provider>
      {/* Desktop Header - Hidden on mobile, visible on lg and up */}
      <div className="hidden lg:block relative z-20">{header ? header : <Header />}</div>

      {/* Mobile Header - Visible only on mobile devices, hidden on lg and up */}
      <div className="lg:hidden">
        <HeroSearchFormMobile />
      </div>
      {/*  */}
      {children}
      {/*  */}
      {/* FooterQuickNavigation - Displays on mobile devices and is fixed at the bottom of the screen */}
      {/* <FooterQuickNavigation /> */}
      {/* Chose footer style here!!!! */}
      {/* <Footer2 />  */}
      {/* <Footer /> or <Footer2 /> or <Footer3 /> or <Footer4 />*/}
      {/*  */}
       <Footer />
        {/* <Footer3 />
        <Footer4 /> */}
      {/* <AsideSidebarNavigation /> */}
    </Aside.Provider>
  )
}

export { ApplicationLayout }
