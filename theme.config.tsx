import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import logo_small from './public/images/logo-512.png';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({ subsets: ['latin'] });



const config: DocsThemeConfig = {
  logo: <div className={urbanist.className}>
          <div className='' style={
            {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }
          }>
            <Image src={logo_small} draggable="false" alt='' height={35} style={
              {
                marginRight: '10px',
              }
            }></Image>
            <p className='text-2xl font-normal'
            style={
              {
                fontSize: '24px',
                fontWeight: '500',
              }
            }>internalize</p>
          </div>
        </div>,
  project: {
    link: 'https://github.com/Internalize-io',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/SaarthShah/InternalizeDocs',
  footer: {
    text: 'Internalize, Inc 2023',
  },
}

export default config
