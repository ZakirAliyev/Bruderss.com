import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import CtaStyle2 from '../Cta/CtaStyle2';
import PricingTableList from '../PricingTable/PricingTableList';
import SectionHeading from '../SectionHeading';
import AboutStyle6 from '../About/AboutStyle6';
import CardStyle3 from '../Card/CardStyle3';
import {pageTitle} from '../../helpers/PageTitle';
import {useParams, Link} from 'react-router-dom';

export default function ServiceDetailsPage() {
    pageTitle('Service Details');
    const {serviceDetailsId} = useParams();

    const serviceData = [
        {
            id: '1',
            title: 'Digital Menu & Food Ordering',
            subTitle:
                "About Service",
            image: '/images/tech-startup/digital-menu.png',
            features: [
                'Fast and paperless menu system',
                'Supports multiple languages',
                'Syncs with kitchen in real-time',
                'Works offline and online',
            ],
        },
        {
            id: '2',
            title: 'Room Service Requests',
            subTitle:
                "About Service",
            image: '/images/tech-startup/room-service.jpg',
            features: [
                'Instant staff notifications',
                'Track request progress live',
                'Automated feedback system',
                'Supports multiple request types',
            ],
        },
        {
            id: '3',
            title: 'Entertainment Reservations',
            subTitle:
                "About Service",
            image: '/images/tech-startup/entertainment.jpg',
            features: [
                'Integrated booking system',
                'Real-time availability check',
                'Ticket generation and QR codes',
                'Admin approval dashboard',
            ],
        },
        {
            id: '4',
            title: 'Events & Ticketing',
            subTitle:
                "About Service",
            image: '/images/tech-startup/events.jpg',
            features: [
                'Secure ticket sales and QR validation',
                'Event scheduling system',
                'Seat and table selection',
                'Automated reminders',
            ],
        },
        {
            id: '5',
            title: 'Direct Call Panel',
            subTitle:
                "About Service",
            image: '/images/tech-startup/call-panel.jpg',
            features: [
                'One-tap calling panel',
                'Audio/video call support',
                'Customizable panel layout',
                'Department-based routing',
            ],
        },
        {
            id: '6',
            title: 'Live Chat Support',
            subTitle:
                "About Service",
            image: '/images/tech-startup/live-chat.jpg',
            features: [
                'Secure chat encryption',
                'Multi-user support',
                'Message history and attachments',
                'Integrated translation support',
            ],
        },
        {
            id: '7',
            title: 'Rental Services',
            subTitle:
                "About Service",
            image: '/images/tech-startup/rental.png',
            features: [
                'Dynamic rental listings',
                'Online booking and payment',
                'Availability calendar',
                'Custom pricing management',
            ],
        },
    ];

    // URL'den gelen id'ye göre servisi bul
    const service = serviceData.find((item) => item.id === serviceDetailsId);

    if (!service) {
        return (
            <div className="container text-center py-5">
                <h2>Service Not Found</h2>
                <p>The service you're looking for does not exist.</p>
                <Link to="/service" className="btn btn-primary mt-3">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <>
            <Spacing lg="70" md="70"/>
            <Spacing lg="140" md="80"/>

            {/* Dynamic Başlıq */}
            <SectionHeadingStyle3
                title={service.title}
                subTitle={service.subTitle}
                shape="shape_3"
            />

            <Spacing lg="75" md="60"/>

            {/* Service info */}
            <div className="cs_service_info">
                <div className="container">
                    <div className="row align-items-center cs_gap_y_40">
                        <div className="col-lg-6">
                            <div
                                className="cs_service_info_thumb cs_bg_filed"
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="row cs_gap_y_40">
                                {service.features.map((feature, index) => (
                                    <div className="col-sm-6" key={index}>
                                        <CardStyle3
                                            number={String(index + 1).padStart(2, '0')}
                                            title={feature}
                                            subTitle="Our professional team ensures quality and speed for your hospitality services."
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Spacing lg="150" md="80"/>

            <AboutStyle6
                thumbnailSrc={"/images/others/service_details_1.jpeg"}
                title={`What you will get from ${service.title}?`}
                subTitle={service.subTitle}
                featureList={service.features}
                btnText="Check Live Projects"
                btnUrl="/portfolio"
            />

            <Spacing lg="150" md="80"/>

            <section className="cs_gray_bg_2 cs_shape_animation_2">
                <div className="cs_shape_1 position-absolute">
                    <svg
                        width={57}
                        height={41}
                        viewBox="0 0 57 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M55.1923 32.7347C52.209 37.0618 42.704 43.3879 40.3199 34.8097C39.0585 30.2359 42.6536 24.5172 43.1266 19.9687C43.8204 13.2821 39.973 5.41874 32.4359 6.05135..."
                            fill="#4F4747"
                        />
                    </svg>
                </div>
                <div className="cs_shape_2 position-absolute">
                    <svg
                        width={21}
                        height={24}
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.5"
                            d="M1.83883 0.992714L20.9086 13.6609L0.402728 23.8417L1.83883 0.992714Z"
                            fill="#4F4747"
                        />
                    </svg>
                </div>
                <div className="cs_height_143 cs_height_lg_75"/>
                <div className="container">
                    <SectionHeading
                        title="Clear & Transparent Pricing"
                        subTitle="Our Pricing"
                    />
                    <Spacing lg="85" md="45"/>
                </div>
                <div className="container">
                    <PricingTableList/>
                </div>
                <div className="cs_height_150 cs_height_lg_80"/>
            </section>

            <div className="cs_height_140 cs_height_lg_70"/>
            <CtaStyle2
                title="Is there a specific project or goal <br />that you have in mind?"
                btnText="Send Message"
                btnUrl="/contact"
            />
            <div className="cs_height_150 cs_height_lg_80"/>
        </>
    );
}
