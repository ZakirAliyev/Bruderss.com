import React from 'react';
import HeroStyle5 from '../Hero/HeroStyle5';
import Cta from '../Cta';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import PostCarousel from '../Slider/PostCarousel';
import PricingTableList from '../PricingTable/PricingTableList';
import TestimonialSliderStyle2 from '../Slider/TestimonialSliderStyle2';
import FunFact from '../FunFact';
import VideoModal from '../VideoModal';
import IconboxStyle4 from '../IconBox/IconboxStyle4';
import Card from '../Card';
import CardStyle2 from '../Card/CardStyle2';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import IconBoxStyle5 from '../IconBox/IconBoxStyle5';
import BrandCarousel from '../Slider/BrandCarousel';
import {pageTitle} from '../../helpers/PageTitle';
import Accordion from "../Accordion";

const faqData = [
    {
        title: '01. Do I need to download an app?',
        content:
            'No. Simply scan the hotel’s QR code, and the platform opens in your browser instantly.',
    },
    {
        title: '02. How do I order room service?',
        content:
            'Tap “Room Service” on the menu, select your request, and confirm. A staff member will be notified immediately.',
    },
    {
        title: '03. Can I pay online?',
        content:
            'Yes, tickets, rentals, and orders can be paid securely through our integrated payment system.',
    },
    {
        title: '04. Can I contact different hotel departments?',
        content:
            'Yes, our call panel allows you to reach Reception, Kitchen, Sports Facilities, and more with one tap.',
    },
];


const brandData = [
    {logoSrc: '/images/tech-startup/brand_1.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_2.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_3.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_4.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_5.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_6.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_1.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_2.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_3.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_4.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_5.svg', alt: 'Brand'},
    {logoSrc: '/images/tech-startup/brand_6.svg', alt: 'Brand'},
];
const funfactData = [
    {title: 'Happy Customers', number: '22k'},
    {title: 'Work’s Completed', number: '15k'},
    {title: 'Skilled Team Members', number: '121'},
    {title: 'Most Valuable Awards', number: '15'},
];
const testimonialData = [
    {
        text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
        avatarName: 'Ansari Patron',
        avatarDesignation: 'CEO at Delta',
    },
    {
        text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
        avatarName: 'Jhon Doe',
        avatarDesignation: 'Manager at Delta',
    },
    {
        text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
        avatarName: 'Ramatam Coo',
        avatarDesignation: 'MD at Delta',
    },
];

const services = [
    {
        id: 1,
        iconSrc: '/images/tech-startup/digital-menu.png',
        title: 'Digital Menu & Food Ordering',
        subTitle:
            'Guests explore the full hotel menu online with real-time updates — no paper menus needed.',
    },
    {
        id: 2,
        iconSrc: '/images/tech-startup/room-service.jpg',
        title: 'Room Service Requests',
        subTitle:
            'One-tap room service requests instantly notify staff for faster delivery.',
    },
    {
        id: 3,
        iconSrc: '/images/tech-startup/entertainment.jpg',
        title: 'Entertainment Reservations',
        subTitle:
            'From spa sessions to sports activities, guests check availability and book instantly.',
    },
    {
        id: 4,
        iconSrc: '/images/tech-startup/events.jpg',
        title: 'Events & Ticketing',
        subTitle:
            'Concerts, DJ shows, and more — with full details, online booking and ticketing.',
    },
    {
        id: 5,
        iconSrc: '/images/tech-startup/call-panel.jpg',
        title: 'Direct Call Panel',
        subTitle:
            'Guests connect directly with Reception, Kitchen, or Sports Facilities.',
    },
    {
        id: 6,
        iconSrc: '/images/tech-startup/live-chat.jpg',
        title: 'Live Chat Support',
        subTitle:
            'Real-time communication between guests and hotel staff through chat.',
    },
    {
        id: 7,
        iconSrc: '/images/tech-startup/rental.png',
        title: 'Rental Services',
        subTitle:
            'Hotels showcase rentals like golf carts or cottages with clear pricing.',
    },
];
const postData = [
    {
        thumbnailSrc: '/images/creative-agency/post_1.jpeg',
        title: 'How to keep fear from ruining your art business with confident',
        date: '07 Mar 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_2.jpeg',
        title: 'Artistic mind will be great for creation anything',
        date: '22 Apr 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_3.jpeg',
        title: 'AI will take over all job for human within few years',
        date: '13 May 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_4.jpeg',
        title: 'Your agency need to replace some artistic mind people',
        date: '15 Mar 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_1.jpeg',
        title: 'How to keep fear from ruining your art business with confident',
        date: '07 Mar 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_2.jpeg',
        title: 'Artistic mind will be great for creation anything',
        date: '22 Apr 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_3.jpeg',
        title: 'AI will take over all job for human within few years',
        date: '13 May 2023',
        url: '/blog/blog-details',
    },
    {
        thumbnailSrc: '/images/creative-agency/post_4.jpeg',
        title: 'Your agency need to replace some artistic mind people',
        date: '15 Mar 2023',
        url: '/blog/blog-details',
    },
];

export default function TechStartupPage() {
    pageTitle('Bruderss.com');
    return (
        <>
            <HeroStyle5
                highlightTitle="Bruderss.com"
                title="Digitizing Hotel Services <br /> for Guests & Staff"
                subTitle="From digital menus to event booking, our platform streamlines hotel operations and elevates the guest experience."
                btnText="Explore Services"
                btnUrl="/portfolio"
                videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
                videoBtnText="Watch demo"
            />
            <section>
                <Spacing lg="143" md="75"/>
                <div className="container">
                    <SectionHeading
                        title="All-in-One Hospitality Solution"
                        subTitle="Our Services"
                        variant="cs_type_1"
                    />
                    <Spacing lg="85" md="45"/>

                    <div className="row" style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {services.map((service) => (
                            <div className="col-lg-6 mb-4" key={service.id}>
                                <IconboxStyle4
                                    iconSrc={service.iconSrc}
                                    title={service.title}
                                    subTitle={service.subTitle}
                                    btnText="Learn More"
                                    btnUrl={`/service/${service.id}`} // ✅ Dinamik yönlendirme
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="cs_shape_animation_2">
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
                            d="M55.1923 32.7347C52.209 37.0618 42.704 43.3879 40.3199 34.8097C39.0585 30.2359 42.6536 24.5172 43.1266 19.9687C43.8204 13.2821 39.973 5.41874 32.4359 6.05135C31.8886 6.10385 31.3452 6.19047 30.8086 6.31072C29.5308 4.21019 27.6918 2.5107 25.5002 1.40489C23.3085 0.299087 20.8519 -0.168816 18.4087 0.0542238C11.0797 0.743766 5.31489 7.39247 2.40097 13.6616C0.297443 17.9159 -0.0470809 22.831 1.44227 27.3386C2.02253 28.9897 4.52649 28.3381 4.07868 26.6111C2.33789 19.994 6.55742 12.4976 11.1238 7.99978C15.6903 3.50194 23.1517 2.572 26.8919 7.71511C22.3191 9.96086 18.2321 14.1614 15.6019 17.957C12.4483 22.5245 9.15598 31.3746 15.1794 35.2589C21.0135 39.0165 27.7181 36.5241 30.9852 30.8306C34.3217 24.9727 34.2461 16.9828 32.6377 10.6251C32.4379 9.84013 32.1764 9.07227 31.8556 8.32873C34.7948 7.65817 37.6078 8.80319 39.4747 11.7765C42.4517 16.502 40.9317 21.6009 39.5126 26.5289C38.1691 31.1785 36.6617 38.618 42.9185 40.5728C48.4057 42.2935 54.6246 38.6054 56.4853 33.2978C56.7691 32.507 55.6275 32.1085 55.1923 32.7347ZM27.8253 28.0345C26.6396 30.7231 24.5519 32.7537 21.5181 32.9751C16.3336 33.3547 15.3434 29.0909 16.4723 25.0739C18.1122 19.3298 23.2274 13.4845 28.1407 10.0684C28.1664 10.1199 28.1896 10.1727 28.2101 10.2266C30.2749 16.0071 30.1378 22.349 27.8253 28.0345Z"
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
                <Spacing lg="143" md="75"/>
                <div className="container">
                    <SectionHeading
                        title="Clear & Transparent Pricing"
                        subTitle="Our Pricing"
                        variant="cs_type_1"
                    />
                    <Spacing lg="85" md="45"/>
                </div>
                <div className="container">
                    <PricingTableList/>
                </div>
                <div className="cs_height_150 cs_height_lg_80"/>
            </section>
            <section>
                <div className="container">
                    <SectionHeading title="Frequently asked question" subTitle="FAQs"/>
                    <Spacing lg="55" md="30"/>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Accordion variant="cs_type_1" data={faqData}/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Spacing lg="150" md="80"/>
                <div className="container">
                    <Cta
                        title="Ready to digitize your hotel services?"
                        btnText="Contact Us"
                        btnUrl="/contact"
                        bgUrl="/images/tech-startup/cta_bg.jpeg"
                        noShape
                    />
                </div>
                <Spacing lg="150" md="80"/>
            </section>
        </>
    );
}
