import React, { useState } from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import { Icon } from '@iconify/react';

export default function ContactPage() {
    pageTitle('Contact');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulyasiya olunmuş göndərmə
        setTimeout(() => {
            setLoading(false);
            setShowPopup(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setShowPopup(false), 3000);
        }, 1000);
    };

    return (
        <>
            <Spacing lg="70" md="70" />
            <Spacing lg="140" md="80" />
            <SectionHeadingStyle3
                title="Get in touch for <br> support or collaboration"
                subTitle="Contact"
                shape="shape_6"
            />
            <Spacing lg="75" md="60" />

            <section>
                <div className="container">
                    <div className="row align-items-center cs_gap_y_45">
                        <div className="col-lg-6">
                            <h2 className="cs_fs_50">
                                Let’s connect <br />
                                with our team
                            </h2>
                            <div className="cs_height_55 cs_height_lg_30" />
                            <ul className="cs_mp0 cs_contact_info">
                                <li>
                                    <h3 className="cs_fs_29 cs_semibold">Email:</h3>
                                    <p className="mb-0">support@bruderss.com</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <div className="cs_contact_form_wrap">
                                <div className="cs_gray_bg_3 cs_contact_form_bg" />
                                <form className="cs_contact_form" onSubmit={handleSubmit}>
                                    <label className="cs_fs_21 cs_semibold cs_primary_color">
                                        Your full name
                                    </label>
                                    <input
                                        name="name"
                                        placeholder="Type your name"
                                        type="text"
                                        className="cs_form_field"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <div className="cs_height_38 cs_height_lg_25" />
                                    <label className="cs_fs_21 cs_semibold cs_primary_color">
                                        Give valid email
                                    </label>
                                    <input
                                        name="email"
                                        placeholder="Type your email address"
                                        type="email"
                                        className="cs_form_field"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                    <div className="cs_height_38 cs_height_lg_25" />
                                    <label className="cs_fs_21 cs_semibold cs_primary_color">
                                        Phone number
                                    </label>
                                    <input
                                        name="phone"
                                        placeholder="Type your phone number"
                                        type="text"
                                        className="cs_form_field"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                    <div className="cs_height_38 cs_height_lg_25" />
                                    <label className="cs_fs_21 cs_semibold cs_primary_color">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        cols={30}
                                        rows={5}
                                        className="cs_form_field"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />

                                    <div className="cs_height_38 cs_height_lg_25" />
                                    <button type="submit" className="cs_btn cs_style_1" disabled={loading}>
                                        {loading ? (
                                            <span className="loading-spinner"></span>
                                        ) : (
                                            <>
                                                Send Message{' '}
                                                <span>
                          <i>
                            <Icon icon="fa6-solid:arrow-right" />
                          </i>
                          <i>
                            <Icon icon="fa6-solid:arrow-right" />
                          </i>
                        </span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cs_height_0 cs_height_lg_80" />
            </section>

            {showPopup && (
                <div className="popup-success">
                    <div className="popup-inner">
                        <Icon icon="fa6-solid:circle-check" className="popup-icon" />
                        <p>Message sent successfully!</p>
                    </div>
                </div>
            )}

            <style>{`
        /* Loading Spinner */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Popup styles */
        .popup-success {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.6s ease forwards;
        }

        .popup-inner {
          background: #ffffff;
          padding: 35px 60px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          text-align: center;
          animation: popIn 0.6s ease forwards;
        }

        .popup-icon {
          font-size: 48px;
          color: #28a745;
          margin-bottom: 10px;
          animation: scaleIn 0.6s ease;
        }

        .popup-inner p {
          font-size: 20px;
          color: #222;
          font-weight: 600;
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </>
    );
}
