import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "128d86ae-9529-4c2f-b076-07ec0e23d971");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert(data.message);
            setResult("Message sent successfully!");
        } else {
            console.log("Error", data);
            setResult("Error sending message. Please try again.");
        }
    };

    return (
        <div id="contact" className="co">
            <div className="coT">
                <h1>Get In Touch</h1>
            </div>

            <div className="co-sec">
                <div className="co-left">
                    <h1>Let's Talk</h1>
                    <p>Feel free to reach out for any inquiries or collaborations. I'm always open to discussing new opportunities!</p>
                    
                    <div className="co-del">
                        <div className="co-del-i">
                            <i className="fa-solid fa-envelope"></i>
                            <p>priti@gmail.com</p>
                        </div>

                        <div className="co-del-i">
                            <i className="fa-solid fa-phone-volume"></i>
                            <p>+91 9876543210</p>
                        </div>

                        <div className="co-del-i">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Pune, India</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="co-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name="name" required />

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email" required />

                    <label htmlFor="message">Your Message</label>
                    <textarea placeholder="Enter Your Message" rows="5" name="message" required />

                    <button type="submit" className="co-submit">
                        Submit Now
                    </button>

                    {result && <p className="form-result">{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
