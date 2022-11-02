import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='sheet'>
    <div className="sheet-top">
      <img src='/wbi.jpg/' alt="DLue" className='img' /> 
      <div className='info-box'>
        <Link href="https://www.jamaicaobserver.com/news/lue-fung-launching-sales-scholarship-and-internship-programme/">
        <div className='description'>
          Lue-Fung launches sales scholarship and internship programme.
        </div>
        </Link>
        <div className='sub-description'>
          {`Entrepreneur and chairman of Think Grow Lead ${'(TGL)'} Duane Lue-Fung has launched a comprehensive programme to empower the next generation of industry leaders who may not have otherwise had the opportunity.`}
        </div>
      
        <div className='large-text'>
          Find out how to apply below!
        </div>
      </div>
    </div>
    <div className='sheet-bottom'>
      <div className='application-form'>
        <div className='notice'>
          Scholarship recpients must be 18-30 years old and are selected based on a statement of goals and aspirations, financial need, and a perosnal professional recommendation.
        </div>
        <div className='email'>Email the following to <Link aria-disabled={true} href="">DLueFungScholarship@gmail.com</Link>:</div>
        <ul>
          <li>Statement of goals and aspirations as well as explaining financial needs</li>
          <li>Personal professional recommendations</li>
          <li>{`Personal Information or Resume including: Name, Age, Professional Background ${"(if any)"} and Educational Background`} </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
