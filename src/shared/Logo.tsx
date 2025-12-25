import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import LogoSvg from './LogoSvg'
import LogoSvgLight from './LogoSvgLight'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = 'w-26 sm:w-28' }) => {
  return (
    <Link href="/" className={`inline-block text-primary-600 focus:ring-0 focus:outline-hidden ${className}`}>
      <Image src="https://gamius.ma/img/logo-gamius-white.png" alt="Logo" width={300} height={300} className="dark:hidden w-full h-auto" />
    </Link>
  )
}

export default Logo
