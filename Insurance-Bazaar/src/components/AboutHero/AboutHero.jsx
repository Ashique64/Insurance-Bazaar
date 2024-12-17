import React from 'react'
import './AboutHero.scss'

const AboutHero = () => {
  return (
    <div className='about_hero' >
        <div className="circle_one"></div>
        <div className="circle_two"></div>
      <div className="container">
        <div className="row">
            <div className="col-12 about_hero_col">
                <div className="about_hero_wrapper">
                    <div className="about_hero_content">
                        <h3>About Company</h3>
                    </div>
                    <div className="about_hero_button">
                        <button>Contact us today</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
