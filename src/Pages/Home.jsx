import React from 'react'
import './Pages.css'
// import About from './About'
import {Button} from "@mui/material"

const Home = () => {
    const handleDownload = () => {
        const resumePath = 'documents/Resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Athulya_Santhosh_Resume.pdf';
        link.click();
    };
  return (
    <>
        <div className='home'>
            <div className='home-left'>
                <div className='home-name-div w3-animate-top'>
                    <p className='home-name'>I'm</p>
                    <p className='home-name'>Athulya Santhosh</p>
                </div>
                <div className='home-desc w3-animate-left' style = {{marginTop:'-2%'}}>
                    <p>Meet Athulya T S, the B.Tech student extraordinaire from Sri Krishna College of Engineering and Technology, on her epic quest through the wilds of her final year in the Information Technology department. Armed with determination and a touch of cluelessness, she bravely forges ahead, hoping to stumble upon her elusive career path amidst the chaos of code and caffeine.</p>
                    <p>Like a true explorer in the jungle of academia, she swings from one project to the next, occasionally getting tangled in the vines of confusion but always managing to find her way out with a laugh and a smile. With her trademark clumsiness and relentless curiosity, she's not just charting new territory - she's rewriting the map entirely!</p>
                </div>
                <Button sx = {{backgroundColor:"rgba(255, 105, 135)",marginLeft:"73%",marginTop:"2%"}} variant = "contained" onClick={handleDownload}>Download my CV&nbsp;&nbsp;<i className="fa fa-arrow-right" style={{fontSize:20}}></i></Button>
            </div>
            <div className='home-right w3-animate-right'>
                <img src = "/images/img_pinkk.jpg" className='home-img' alt = "my-pic" width = {300}/>
                <img src = "images/flower2.png" alt = "flower" className='home-img-flower' width = {150}/>
            </div>
        </div>
    </>
  )
}

export default Home
