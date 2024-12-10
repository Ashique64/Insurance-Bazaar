import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 item1">
                <div className="about_image">
                    <img src="/images/about/about-big-1.png" alt="" />
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 item2">
                <div className="about_content">
                    <h4 className='subtitle'>About Us</h4>
                    <h3 className='title'>Change the way but
                        <span>
                            <br />
                            life Insurance
                        </span>
                    </h3>
                    <p className='para1'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
                        claritatem insitamconse
                        quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse
                        quat.Exerci tationlobortis nisl aliquip ex ea commodo
                        n ullamcorper suscipit loborti excommodo</p>
                    <p className='para2'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse
                    quat.Exerci tation ullamcorper suscipit loborti </p>
                </div>
                <div className="about_button">
                    <button>ABOUT US</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
