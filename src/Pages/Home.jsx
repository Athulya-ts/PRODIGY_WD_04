import React from 'react';
import './Pages.css'; // Make sure the CSS file is linked correctly
import { Button } from "@mui/material";

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
            <div className='home-container'>
                <div className='home-left'>
                    <div className='home-name-div'>
                        <h1>I'm <span className='highlight'>Athulya Santhosh</span></h1>
                    </div>
                    <div className='home-desc'>
                        <p>
                            I'm Athulya T S, a dedicated B.Tech student in the Information Technology department at Sri Krishna College of Engineering and Technology. As I approach my final year, I am focused on building a solid foundation in technology while exploring various opportunities to apply my skills in real-world projects.
                        </p>
                        <p>
                            With a passion for coding and problem-solving, I am continually learning and adapting to new technologies. I enjoy collaborating on projects that challenge me to grow and improve, and I strive to make meaningful contributions to every team I am a part of. Although my journey is still unfolding, I am excited about the possibilities that lie ahead and am committed to developing my skills in a way that adds value to both my career and the communities I serve.
                        </p>
                    </div>
                    <Button sx={{ backgroundColor: "rgba(255, 105, 135)", marginTop: "2%" }} variant="contained" onClick={handleDownload}>
                        Download my CV&nbsp;&nbsp;<i className="fa fa-arrow-right" style={{ fontSize: 20 }}></i>
                    </Button>
                </div>
                <div className='home-right'>
                    <div className='image-wrapper'>
                        <img src="/images/img_pinkk.jpg" className='home-img' alt="my-pic" />
                        {/* <img src="images/flower2.png" alt="flower" className='home-img-flower' /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
