import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import ServiceStyle2 from '../Service/ServiceStyle2';
import SectionHeading from '../SectionHeading';
import PricingTableList from '../PricingTable/PricingTableList';
import CtaStyle2 from '../Cta/CtaStyle2';
import { pageTitle } from '../../helpers/PageTitle';

const serviceData = [
  {
    number: '01',
    title: 'Digital Menu & Food Ordering',
    subTitle:
        'Guests explore the full hotel menu online with real-time updates — no paper menus needed.',
    thumbnailSrc: '/images/tech-startup/digital-menu.png',
    href: '/service/1',
  },
  {
    number: '02',
    title: 'Room Service Requests',
    subTitle:
        'One-tap room service requests instantly notify staff for faster delivery.',
    thumbnailSrc: '/images/tech-startup/room-service.jpg',
    href: '/service/2',
  },
  {
    number: '03',
    title: 'Entertainment Reservations',
    subTitle:
        'Guests can book spa sessions, sports activities, and events instantly.',
    thumbnailSrc: '/images/tech-startup/entertainment.jpg',
    href: '/service/3',
  },
  {
    number: '04',
    title: 'Events & Ticketing',
    subTitle:
        'Concerts, DJ shows, and more — with full details, online booking and ticketing.',
    thumbnailSrc: '/images/tech-startup/events.jpg',
    href: '/service/4',
  },
  {
    number: '05',
    title: 'Direct Call Panel',
    subTitle:
        'Guests connect directly with Reception, Kitchen, or Sports Facilities.',
    thumbnailSrc: '/images/tech-startup/call-panel.jpg',
    href: '/service/5',
  },
  {
    number: '06',
    title: 'Live Chat Support',
    subTitle:
        'Real-time communication between guests and hotel staff through chat.',
    thumbnailSrc: '/images/tech-startup/live-chat.jpg',
    href: '/service/6',
  },
  {
    number: '07',
    title: 'Rental Services',
    subTitle:
        'Hotels showcase rentals like golf carts or cottages with clear pricing.',
    thumbnailSrc: '/images/tech-startup/rental.png',
    href: '/service/7',
  },
];

export default function ServicePage() {
  pageTitle('Service');
  return (
      <>
        <Spacing lg="70" md="70" />
        <Spacing lg="140" md="80" />
        <SectionHeadingStyle3
            title="Digitizing Hotel Services for Guests & Staff"
            subTitle="Our Services"
            shape="shape_2"
        />
        <Spacing lg="75" md="60" />
        <div className="container">
          <ServiceStyle2 data={serviceData} />
        </div>
        <Spacing lg="150" md="80" />

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
                  d="M55.1923 32.7347C52.209 37.0618 42.704 43.3879 40.3199 34.8097C39.0585 30.2359..."
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
          <div className="cs_height_143 cs_height_lg_75" />
          <div className="container">
            <SectionHeading
                title="Clear & Transparent Pricing"
                subTitle="Our Pricing"
            />
            <Spacing lg="85" md="45" />
          </div>
          <div className="container">
            <PricingTableList />
          </div>
          <div className="cs_height_150 cs_height_lg_80" />
        </section>

        <div className="cs_height_140 cs_height_lg_70" />
        <CtaStyle2
            title="Is there a specific project or goal <br />that you have in mind?"
            btnText="Send Message"
            btnUrl="/contact"
        />
        <div className="cs_height_150 cs_height_lg_80" />
      </>
  );
}
