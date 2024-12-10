import React from 'react'
import './Pages.css'

const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="w3-row-padding w3-margin-top">
        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
              <a href = "achievements/codehers.png" target = "_blank">
              <img className="project-img" src="achievements/codehers.png" alt="CODEHER'24" />
              </a>
            </div>
            <div className="w3-container">
              <h5>CODEHER'24</h5>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
              <a href = "achievements/hackerrank -java-gold.png" target = "_blank">
              <img className="project-img" src="achievements/hackerrank -java-gold.png" alt="Hackerrank gold badge in JAVA" />
              </a>
            </div>
            <div className="w3-container">
              <h5>Hackerrank gold badge in JAVA</h5>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
              <a href = "achievements/skcet-rank.jpg" target = "_blank">
              <img className="project-img" src="achievements/skcet-rank.jpg" alt="III Rank in End semester Nov/Dec 2022" />
              </a>
            </div>
            <div className="w3-container">
              <h5>III Rank in End semester Nov/Dec 2022</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w3-row-padding w3-margin-top">
        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
              <video className="project-img" controls>
                <source src="achievements/leetcode-100-2024.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w3-container">
              <h5>Leetcode badge for 100+ days coding in 2024</h5>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
              <a href = "achievements/leetcode-400.png" target = "_blank">
              <img className="project-img" src="achievements/leetcode-400.png" alt="Leetcode 300+ problems milestone" />
              </a>
            </div>
            <div className="w3-container">
              <h5>Leetcode 400+ problems milestone</h5>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <div className="project-img-container">
            <a href = "achievements/sns.jpg" target = "_blank">
              <img className="project-img sns-img" src="achievements/sns.jpg" alt="AI Hackgen in SNS" />
            </a>
            </div>
            <div className="w3-container">
              <h5>AI Hackgen in SNS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
