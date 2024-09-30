import React from "react";
import tgall1 from "../Donate/Donateimage/don1.png";
import tgall2 from "../Donate/Donateimage/don2.png";
import tgall3 from "../Donate/Donateimage/don3.png";
import tgall4 from "../Donate/Donateimage/don4.png";
import tgall5 from "../Donate/Donateimage/don5.png";
import edu1 from "../DonateNow/DonateNowimage/edu1.png";
import edu2 from "../DonateNow/DonateNowimage/edu2.png";
import edu3 from "../DonateNow/DonateNowimage/edu3.png";
import edu4 from "../DonateNow/DonateNowimage/edu4.png";
import edu5 from "../DonateNow/DonateNowimage/edu5.png";
import dbimg from "../DonateNow/DonateNowimage/doncardimg.png";
import "./DonateNow.css"

const DonateNow = () => {
  return (
    <div className="donatenow">
      <div className="donatenow-conatainer">
        <div className="donatenow-content">
          <h1>What you are about to do <span>will change a life forever</span></h1>
          <p>
            With our donations, we operate effectively and efficiently. Every
            action we take on our trip is well thought out. Contributions of any
            size are allocated to projects where they will have the most impact.
          </p>
          <button className="doNow-btn">Donate Now</button>
        </div>
        <div className="dn-gallery">
          <div className="dngall">
            <img src={tgall1} alt="" />
          </div>
          <div className="dngall">
            <img src={tgall2} alt="" />
          </div>
          <div className="dngall">
            <img src={tgall3} alt="" />
          </div>
          <div className="dngall">
            <img src={tgall4} alt="" />
          </div>
          <div className="dngall">
            <img src={tgall5} alt="" />
          </div>
        </div>
        <div className="donatenow-center">
          <h1>Donate Now For The Cause</h1>
          <p>
            Make a significant one-time contribution or a continuing,
            sustainable donation.
          </p>
          <button className="doNow-btn">
            Positive Change through <span>Donations</span> 
          </button>
        </div>

        <div className="donation-container">
          <div className="donation-left">
            <h2>All of your contributions are <br/><span>greatly valued.</span></h2>
            <p>
              Through a variety of programs, we are dedicated to promoting
              constructive change and enhancing communities. Your decision to
              donate makes you a vital component of our effort to make the world
              a better place for everyone.
            </p>
            <div className="counter">
              <div className="row-counter">
                <h1>600+ <br/><span>Volunteers Engaged</span>
                </h1>
              </div>
              <div className="row-counter">
                <h1>12+ <br/> <span>years of voluntary service</span></h1>
              </div>
              <div className="row-counter">
                <h1>1000+ <br/><span>we impacted people life</span></h1>
              </div>
            </div>

            <button className="doNow-btn">Donate-now</button>
          </div>
          <div class="donate-card-container">
            <div className="backimage">
              <img src={dbimg} alt="" />
            </div>
            <div class="dn-card">
              <div class="dn-icon">
                <img src={edu1} alt="Educations Program" />
              </div>
              <div class="dn-text">
                <h1>EDUCATION PROGRAM</h1>
              </div>
            </div>

            <div class="dn-card">
              <div class="dn-icon">
                <img src={edu2} alt="Healthcare Program" />
              </div>
              <div class="dn-text">
                <h1>HEALTHCARE PROGRAM</h1>
              </div>
            </div>

            <div class="dn-card">
              <div class="dn-icon">
                <img src={edu3} alt="Feed the Poor" />
              </div>
              <div class="dn-text">
                <h1>FEED THE POOR</h1>
              </div>
            </div>

            <div class="dn-card">
              <div class="dn-icon">
                <img src={edu4} alt="Flood Relief" />
              </div>
              <div class="dn-text">
                <h1>FLOOD RELIEF</h1>
              </div>
            </div>

            <div class="dn-card">
              <div class="dn-icon">
                <img src={edu5} alt="Blood Donation" />
              </div>
              <div class="dn-text">
                <h1>BLOOD DONATION</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
