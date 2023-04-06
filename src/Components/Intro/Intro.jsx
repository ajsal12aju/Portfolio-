import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from "react";

 function Intro() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
       <div className="i-left">
          <div className="i-name">
            <span style={{color:darkMode ? 'white' : ''}}>Hy! I Am</span>
            <span>Mohammed Ajsal vp</span>
            <span>Fullstack Developer with high level of knowledge in web designing and development, producting the Quality work</span>
          </div>
          <button className="button i-button">

            Hire me
          </button>
          <div className="i-icons">
            <a href="https://github.com/ajsal12aju/Portfolio-.git"><img src={Github} alt="" /></a>
           <a href=""> <img src={LinkedIn} alt="" /></a>
           <a href=""> <img src={Instagram} alt="" /></a>
          </div>
       </div>
       <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top:'-4%',left:'68%'}}><FloatingDiv image={Crown} text1='Web' text2='Developer'/></div>
        <div style={{top:'18rem',left:'0rem'}}><FloatingDiv image={thumbup} text1='Best Design' text2='Award'/></div>

        {/* for blur divs */}
        <div className="blur" style={{background:"rgba(238 210 255)"}}></div>
        <div className='blur' style={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'
        }}></div>
       </div>
    </div>
  )
}
export default Intro