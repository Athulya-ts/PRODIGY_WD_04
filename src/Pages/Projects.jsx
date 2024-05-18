import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
    <center>
        <br/>
        <div class="w3-row-padding w3-margin-top">
            <div class="w3-third">
                <Link to = "/Pixels">
                    <div class="w3-card">
                        <img className = "project-img" src="images/3-pixels.png" style={{width: '100%'}} alt = "3Pixels"/>
                        <div class="w3-container">
                            <h5>3 PIXELS</h5>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="w3-third">
                <Link to = "/EZRecharge">
                    <div class="w3-card">
                        <img className = "project-img" src="images/EZRecharge.png" style={{width: '100%'}} alt = "EZRecharge"/>
                        <div class="w3-container">
                            <h5>EZRecharge</h5>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="w3-third">
                <Link to = "/HRManagement">
                    <div class="w3-card">
                        <img className = "project-img" src="images/HR-management-portal.png" style={{width: '100%'}} alt = "HR Manegement Portal"/>
                        <div class="w3-container">
                            <h5>HR Management Portal</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        <div class="w3-row-padding w3-margin-top" style = {{marginLeft:'17%',minWidth: '100%'}}>
            <div class="w3-third">
                <Link to = "/TicTacToe">
                    <div class="w3-card">
                        <img className = "project-img" src="images/tic-tac-toe.png" style={{width: '100%'}} alt = "Tic Tac Toe"/>
                        <div class="w3-container">
                            <h5>Tic Tac Toe</h5>
                        </div>
                    </div>
                </Link>
            </div>

            <div class="w3-third">
                <Link to = "/WeatherApp">
                    <div class="w3-card">
                        <img className = "project-img" src="images/weather-app.png" style={{width: '100%'}} alt = "Weather App"/>
                        <div class="w3-container">
                            <h5>Weather App</h5>
                        </div>
                    </div>
                </Link>
            </div>
            

            {/* <div class="w3-third">
                <Link to = "/Portfolio">
                    <div class="w3-card">
                        <img className = "project-img" src="images/portfolio.png" style={{width: '100%'}} alt = "Portfolio"/>
                        <div class="w3-container">
                            <h5>Portfolio</h5>
                        </div>
                    </div>
                </Link>
            </div> */}
        </div>
        </center>
    </div>
  )
}

export default Projects