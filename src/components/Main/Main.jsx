import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Main=()=>{
  const{onSent,recent,showResult,loading,resultData,input,settInput} = useContext(Context)
  return(
    <div className='main'>
        <div className="nav">
            <p>D-Bot</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          {!showResult
          ?<>
          <div className="greet">
            <p><span>Hello,Chan...</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest places to gain knowledge and skills for a Professional life</p>
              <img src={assets.compass_icon} alt="cmp" />
            </div>
            <div className="card">
              <p>Breifly summarize this concept:Course planning</p>
              <img src={assets.bulb_icon} alt="cmp" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="cmp" />
            </div>
            <div className="card">
              <p>Efficient way to improve the Coding Skills</p>
              <img src={assets.code_icon} alt="cmp" />
            </div>
          </div>
          </>
          :<div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recent}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
          }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>settInput(e.target.value)} value={input} type="text" placeholder='Ask Your Queries' />
            <div>
              <img src={assets.gallery_icon} alt="gly" />
              <img src={assets.mic_icon} alt="mc" />
              {input?<img onClick={()=>onSent(input)} src={assets.send_icon} alt="snd" />:null}
            </div>
          </div>
          <p className="bottom-info">
            This bot may display inaccurate info,including about people,so double-check its response.</p>
            </div>
        </div>
    </div>
  )
}
export default Main;