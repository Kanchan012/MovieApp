import React, { useState } from "react";
import "./ContactUs.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            toast.success("Thank you for reaching out! We'll get back to you soon.");
            setForm({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="page-title">Contact Us</h1>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Have questions or suggestions? We'd love to hear from you!</p>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>support@movieapp.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <div>
                                <h4>Phone</h4>
                                <p>+977 9800000000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                placeholder="How can we help?"
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
