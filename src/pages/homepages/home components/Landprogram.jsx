import React, { useState } from "react";
import "./Landprogram.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import images for the list and the right side display
import lp1 from "./../../../assets/Land/landprogram/lp1.png";
import lp2 from "./../../../assets/Land/landprogram/lp2.png";
import lp3 from "./../../../assets/Land/landprogram/lp3.png";
import lp4 from "./../../../assets/Land/landprogram/lp4.png";
import lp5 from "./../../../assets/Land/landprogram/lp5.png";

// Add separate images for the right side display
import edu from "./../../../assets/Land/landprogram/edu.png";
import flood from './../../../assets/flood.jpg';

import food from "./../../../assets/Land/landprogram/food.png";
import med from "./../../../assets/Land/landprogram/med.png";
import medlast from "./../../../assets/Land/landprogram/medlast.png";

const programs = [
  {
    id: 1,
    title: "Flood Relief",
    description:
      "At Ignite, we are deeply committed to supporting children and families in disadvantaged communities. In the wake of devastating floods, we are launching a Flood Relief Initiative to provide immediate assistance to those affected.",
    listImage: lp1,
    rightImage: flood,
  },
  {
    id: 2,
    title: "Education Program",
    description:
      "At Ignite, we believe that education is the key to breaking the cycle of poverty and unlocking a brighter future for children in disadvantaged communities.",
    listImage: lp2,
    rightImage: edu,
  },
  {
    id: 3,
    title: "Healthcare Program",
    description:
      "Ignite is dedicated to improving the health and well-being of children and older adults in disadvantaged communities.",
    listImage: lp3,
    rightImage: med,
  },
  {
    id: 4,
    title: "Hunger Relief",
    description:
      "At Ignite, we recognize that hunger is one of the most pressing issues facing disadvantaged communities and homeless people too.",
    listImage: lp4,
    rightImage: food,
  },
  {
    id: 5,
    title: "Blood Donation",
    description:
      "Join us in making a life-saving difference! Ignite is organizing a Blood Donation Camp to ensure that hospitals and patients in need have access to a critical supply of blood.",
    listImage: lp5,
    rightImage: medlast,
  },
];

const Landprogram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  },[]);

  const [selectedProgramId, setSelectedProgramId] = useState(1); // Track which program is selected
  const [selectedImage, setSelectedImage] = useState(programs[0].rightImage); // Set the initial image to the first program's image

  const handleProgramClick = (program) => {
    setSelectedProgramId(program.id === selectedProgramId ? null : program.id); // Toggle between showing/hiding the description
    setSelectedImage(program.rightImage); // Set the selected right-side image
  };

  return (
    <div className="landprmain">
      <div className="lntitle">
        <h1 data-aos="fade-right">OUR PROGRAMS</h1>
        <p data-aos="fade-left">How changes happen.</p>
      </div>
      <div className="lnprsplit">
        <div className="lnprleft"  data-aos="fade-right">
          <ul>
            {programs.map((program) => (
              <li
               
                key={program.id}
                onClick={() => handleProgramClick(program)}
                className={selectedProgramId === program.id ? "active" : ""}
              >
                <div className="lnprlinkimg">
                  <img src={program.listImage} alt={program.title} />
                </div>
                <div className="lnprlinktext">
                  <h1>{program.title}</h1>
                  {/* Conditionally show description based on selection */}
                  {selectedProgramId === program.id && (
                    <p>{program.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lnprright">
          {/* Display the selected image */}
          {selectedImage && <img src={selectedImage} alt="Selected Program" data-aos="fade-left"/>}
        </div>
      </div>
    </div>
  );
};

export default Landprogram;
