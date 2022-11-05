import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='body'>
      <div className='nav-con'>
        <div className='logo'>
          <Image src='/logo.png' width={100} height={50} />
        </div>
        <div className='tags-con'>
          <p>Details</p>
          <p>Requirements</p>
          <p>Apply</p>
          <p>Contact Us</p>
          <p>About Mr. Lue-Fung</p>
        </div>
      </div>
      <div className='main-banner-container'>
        <img className='banner-img' src="/mainbanner.jpg" />
        <img className='absolute-img' src="/dbackgroundblank.png" />
        <div className='content-box'>
          <h1> DLF Scholarship Programme </h1>
          <hr />
          <p>This scholarship is designed to give a deserving person in need, access to this life-changing career path through formal training and work experience.</p>
        </div>
      </div>
    </div>
  )
}
