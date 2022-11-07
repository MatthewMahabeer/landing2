import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='page'>
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
      <div className='right-container' style={{ height: "40rem" }}>
        <div className='title-box'>Details</div>
        <img className='right-img' src="/second-from-top.jpg" />
        <div className='detail-container'>
          <h1>The DLF Scholarship Programme is Duane Lue-Fung's brainchild, aimed at giving a deserving recipient access to a life-changing career path by providing them access to formal training and work experience.</h1>
          <hr />
          <h1 style={{ marginTop: '2rem', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', textTransform: 'uppercase' }}>
            Part 1
          </h1>
          <p>This includes full tuition coverage for the TGL School of Sales Fundamentals of Professional Sales Programme. The course is designed for people who are just entering the field as it will provide the foundational knowledge and framework necessary to compete effectively and develop quickly into a high-performing sales professional.</p>

          <h1 style={{ marginTop: '2rem', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', textTransform: 'uppercase' }}>
            Part 2
          </h1>
          <p>Includes an internship within the TGL Group which will allow recipients to immediately apply their knowledge within a professional setting while building their resume to jump-start their career. </p>
        </div>
      </div>
      <div className='left-container' style={{ height: "30rem" }}>
        <div className='title-box'>Requirements</div>
        <img className='right-img' src="/third-from-top-two.jpg" />
        <div className='list-box'>
          <ul>
            <li>Must be 18-30 years old</li>
            <li>Personal Information of Resume Including:</li>
            <div style={{
              paddingLeft: '3rem', paddingTop: '.3rem', paddingBottom: '0',
              listStyleType: 'square', fontStyle: 'italic'
            }}>
              <ul style={{ listStyleType: "square" }}>
                <li style={{ paddingTop: "0rem", marginTop: "0rem" }}>Full Name</li>
                <li style={{ paddingTop: "0rem", marginTop: "0rem" }}>Age</li>
                <li style={{ paddingTop: "0rem", marginTop: "0rem" }}>Educational Background</li>
                <li style={{ paddingTop: "0rem", marginTop: "0rem" }}>{`Professional Background (if any)`}</li>
              </ul>
            </div>
            <li>1-2 Personal Recommendations</li>
            <li>{`Personal Statement outlining goals & aspirations as well as explaining financial needs (500-1000 words)`}</li>
          </ul>
        </div>
      </div>

      <div className='right-container' style={{ height: "30rem" }}>
        <div className='title-box'>Apply</div>
        <img className='right-img' src="/fourth-from-top.jpg" />
        <div className='small-detail-container'>
          <h1>To Apply, send an email with the necessary requirements to the following email address:
          </h1>
          <h1>DLueFungScholarship@gmail.com</h1>
          <hr />
          <h1>{`(Subject line should be: DLF Scholarship Programme Application)`}</h1>
        </div>
      </div>
      <div className='left-container' style={{ height: "20rem" }}>
        <div className='title-box'>Contact Us</div>
        <img className='right-img' src="/fifth-from-top-two.jpg" />
        <div className='right-container'>
          <h1>info@tgltrainers.com - Email</h1>
          <h1>876-978-1364 - Phone</h1>
          <hr />
        </div>
      </div>
      <div className='right-container' style={{ height: "30rem" }}>
        <div className='title-box'>About Mr. Lue-Fung</div>
        <img className='right-img' src="/sixth-from-top.jpg" />
        <div className='top-left-content-box'>
          <h1> Entrepreneur and Chairman of Think Grow Lead (TGL) Group.</h1>
          <hr />
          <p>Mr. Lue-Fung loves to give back and most importantly believes in investing in one's future. This scholarship is a brainchild of his as he sees it as an avenue to not only strengthen the sales force of Jamaica but will aid in laying the building blocks for future sales enthusiasts.</p>
        </div>
        <img className='absolute-img' src="/abs-img-two.png" />
      </div>
    </div>
  )
}
