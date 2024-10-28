import React, { useEffect } from 'react';
import './Privacy.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
          duration: 2000, // Animation duration in ms
          once: false,     // Whether animation should happen only once
        });
    }, []);

    return (
        <section className="privacy-policy-section">
            <h2>Privacy Policy</h2>

            <h3>1. Introduction</h3>
            <p>
                Helping Hands Charitable Trust ("we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                <a href="https://helpinghandscharitabletrustngo.org/"> helpinghandscharitabletrustngo.org </a>, including any other media form, media channel, mobile website, 
                or mobile application related or connected thereto (collectively, the "Site").
            </p>

            <h3>2. Information We Collect</h3>
            <h4>Personal Data</h4>
            <p>
                While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to 
                contact or identify you. Personally identifiable information may include, but is not limited to:
            </p>
            <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information (for donations)</li>
            </ul>

            <h4>Usage Data</h4>
            <p>
                We may also collect information that your browser sends whenever you visit our Site or when you access the Site by or 
                through any device ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol 
                address (e.g., IP address), browser type, browser version, the pages of our Site that you visit, the time and date of 
                your visit, the time spent on those pages, and other diagnostic data.
            </p>

            <h3>3. Use of Your Information</h3>
            <p>We may use the information we collect in the following ways:</p>
            <ul>
                <li>To provide, operate, and maintain our Site</li>
                <li>To improve, personalize, and expand our Site</li>
                <li>To understand and analyze how you use our Site</li>
                <li>To process your transactions and send you related information, including purchase confirmations and invoices</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Site, and for marketing and promotional purposes</li>
                <li>To send you emails</li>
                <li>To find and prevent fraud</li>
            </ul>

            <h3>4. Disclosure of Your Information</h3>
            <p>
                We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties, except to 
                provide you with services you request, with your consent, or as required by law.
            </p>

            <h3>5. Data Security</h3>
            <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method 
                of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal 
                Data, we cannot guarantee its absolute security.
            </p>

            <h3>6. Your Rights</h3>
            <p>
                You have the right to request access to the personal information we hold about you, to request correction of any inaccuracies, 
                and to request deletion of your personal information, subject to certain exceptions. To exercise these rights, please contact us 
                using the contact information provided below.
            </p>

            <h3>7. Changes to This Privacy Policy</h3>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. 
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h3>8. Refunds/Cancellations</h3>
            <p>
                Refunds will be processed within 5-7 working days, and the credited amount will be transferred to the customer's bank account.
            </p>

            <h3>9. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
                <strong>Helping Hands Charitable Trust</strong><br />
                No. 19, Kamaraj Nagar Main Road, Avadi, Chennai - 600071<br />
                helpinghandsavadi@gmail.com<br />
                9444885453 / 7358280982
            </p>
        </section>
    );
};

export default Privacy;
