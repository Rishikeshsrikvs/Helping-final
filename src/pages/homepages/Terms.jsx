import React from 'react'

import './Privacy.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 2000, // Animation duration in ms
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="terms-and-conditions-section">
    <h2>Terms and Conditions</h2>


    <h3>1. Introduction</h3>
    <p>
        Welcome to the Helping Hands Charitable Trust ("we," "us," or "our"). By accessing or using our website 
        <a href="https://helpinghandscharitabletrustngo.org/"> helpinghandscharitabletrustngo.org </a>, you agree to comply with and be bound by these Terms and Conditions. 
        If you do not agree with any part of these terms, you must not use our website.
    </p>

    <h3>2. Eligibility</h3>
    <p>
        You must be at least 18 years old to use our website. By using our website, you represent and warrant that 
        you meet this requirement.
    </p>

    <h3>3. Donations</h3>
    <p>
        Any donations made through our website are voluntary. We appreciate your generosity. All donations will be 
        used in accordance with the objectives of Helping Hands Charitable Trust.
    </p>

    <h3>4. 80G Certification</h3>
    <p>
        Helping Hands Charitable Trust is registered under Section 80G of the Income Tax Act, 1961, which allows you to 
        claim deductions for donations made to our Trust. Please consult your tax advisor for more details on eligibility 
        and documentation required to claim this deduction.
    </p>

    <h3>5. 12A Registration</h3>
    <p>
        Our Trust is also registered under Section 12A of the Income Tax Act, 1961. This registration allows us to 
        receive donations and grants without incurring income tax. Contributions made to Helping Hands Charitable Trust 
        may be exempt from taxation for the donor, as per the provisions of applicable tax laws.
    </p>

    <h3>6. User Responsibilities</h3>
    <p>
        By using our website, you agree to provide accurate information and to update your information as necessary. 
        You are responsible for maintaining the confidentiality of your account and password.
    </p>

    <h3>7. Liability Disclaimer</h3>
    <p>
        In no event will Helping Hands Charitable Trust be liable for any expense, loss, or damage, including, without 
        limitation, indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from 
        the use or loss of use of data, arising out of or in connection with the use of this website. 
        In case of any variation between what is produced on the website and the relevant Act, Rules, Regulations, 
        and Policy Statements, the latter shall prevail.
    </p>

    <h3>8. Links to Other Websites</h3>
    <p>
        Links to other websites included on this website are provided for public convenience only. Helping Hands 
        Charitable Trust is not responsible for the contents or reliability of linked websites and does not 
        necessarily endorse the views expressed within them.
    </p>

    <h3>9. Copyright Notice</h3>
    <p>
        Material featured on this website may be reproduced free of charge. However, the material must be reproduced 
        accurately and not used in a derogatory manner or in a misleading context. The source must be prominently 
        acknowledged, and permission is required to reproduce material identified as copyright of a third party.
    </p>

    <h3>10. No Warranty</h3>
    <p>
        The material provided on this website is provided ‘as is’, without warranty of any kind, either express or 
        implied. We specifically do not make any warranties or representations as to the accuracy, completeness, or 
        adequacy of any such material or the same being up-to-date.
    </p>

    <h3>11. Changes to Terms and Conditions</h3>
    <p>
        We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the 
        new Terms and Conditions on this page. You are advised to review these Terms and Conditions periodically 
        for any changes.
    </p>

    <h3>12. Governing Law</h3>
    <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
        Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts of India.
    </p>

    <h3>13. Contact Us</h3>
    <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
    <p>
        <strong>Helping Hands Charitable Trust</strong><br />
        No. 19, Kamaraj Nagar Main Road, Avadi, Chennai - 600071<br />
        helpinghandsavadi@gmail.com<br />
        9444885453 / 7358280982
    </p>
</section>

  )
}

export default Terms
