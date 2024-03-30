import React from 'react'
import twitterIcon from "../assets/icons/twitter.svg"
import githubIcon from "../assets/icons/github.svg"
import headerLogo from "../assets/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderComponent() {
  return (
    <header>
        {/* Navbar */}
        <nav className="nav-header font-bold">
            <div className='pb-4'>
                <Link href={"/"}>
                    <div className='flex float-left'>
                        <Image
                            className='header-logo'
                            src={headerLogo}
                            alt='Didi AI search'
                            height={20}
                            priority={true}
                        />
                        Search<span className='text-blue-500'>Didi</span>
                    </div>
                </Link>
                {/* Link to twitter account  */}
                <a href='https://twitter.com/Divine_Er' rel="noreferrer" target="_blank" >
                    <span className='float-right'>
                        <Image
                            src={twitterIcon}
                            alt='Didi AI search'
                            height={20}
                            priority={true}
                        />
                    </span>
                </a>
                {/* Link to codebase  */}
                <a href='https://github.com/divinejoshua/didiai-v2-next-js' rel="noreferrer" target="_blank" >
                    <span className='float-right'>
                        <Image
                            src={githubIcon}
                            alt='Didi AI search'
                            height={20}
                            priority={true}
                        />
                    </span>
                </a>
            </div>
        </nav>
    </header>
  )
}
