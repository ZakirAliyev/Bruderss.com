import React from 'react';
import {useParams} from 'react-router-dom';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import AuthorWidget from '../Widget/AuthorWidget';
import {pageTitle} from '../../helpers/PageTitle';
import {Icon} from '@iconify/react';

// BLOG DATASI – SƏNİN VERDİYİN FULL MƏTN
const blogData = [
    {
        id: 1,
        title: 'Top 5 Ways Technology is Transforming the Hotel Experience',
        category: 'Hospitality',
        date: '15 Sep 2025',
        image: '/images/blog/tech-transform.jpeg',
        content: `
<h3>Technology as the foundation of modern hospitality</h3>
<p>
The hospitality industry has always been about providing comfort, care, and unforgettable memories for guests.
However, in today’s digital age, technology is not just an add-on to traditional service — 
it has become the foundation of modern hospitality.
</p>

<h4>1. QR Code Access to Services</h4>
<p>
Guests only need to scan a QR code placed in their room or reception, instantly gaining access to the hotel’s digital platform.
Efficient, affordable, and user-friendly.
</p>

<h4>2. Digital Menus & Room Service</h4>
<p>
Guests browse updated menus and send requests directly to staff, minimizing delays and errors.
</p>

<h4>3. Online Event Booking</h4>
<p>
From DJ shows to concerts, guests can check schedules and book instantly — opening new revenue streams for hotels.
</p>

<h4>4. Smart Analytics for Hotel Owners</h4>
<p>
Managers track guest behavior, reservations, and income, making data-driven decisions to improve profitability.
</p>

<h4>5. Live Chat & Instant Communication</h4>
<p>
Guests expect instant responses. Live chat provides real-time support, improving satisfaction and accountability.
</p>

<p>
From the smallest guesthouse to the largest hotel chain, embracing technology is no longer optional — 
it’s essential. The more hotels digitize operations, the more they can personalize experiences, 
reduce costs, and create unforgettable stays for every guest.
</p>
`,
    },
    {
        id: 2,
        title: 'Why QR Codes Are the Future of Hospitality',
        category: 'Hospitality',
        date: '15 Sep 2025',
        image: '/images/blog/qr-future.png',
        content: `
<h3>The Simplicity Factor</h3>
<p>
Guests don’t want apps or forms. QR codes open everything instantly in their browser.
</p>

<h3>Contactless Convenience</h3>
<p>
Accelerated by COVID-19, QR codes provide safe, touch-free access to services.
</p>

<h3>Real-Time Updates</h3>
<p>
Hotels update menus, events, or rental prices instantly — guests always see the latest info.
</p>

<h3>Direct Access to Revenue</h3>
<p>
Integrated payments turn every scan into measurable revenue for hotels.
</p>

<h3>Marketing Power</h3>
<p>
Posters, receipts, or room keys can carry QR codes, boosting engagement and upselling opportunities.
</p>

<p>
QR technology is here to stay. The ability to instantly connect digital services 
with real-world experiences makes QR codes one of the most powerful tools in hospitality.
</p>
`,
    },
    {
        id: 3,
        title: 'How Live Chat Improves Guest Satisfaction in Hotels',
        category: 'Customer Experience',
        date: '15 Sep 2025',
        image: '/images/blog/asd.png',
        content: `
<h3>Instant Communication, Instant Trust</h3>
<p>
Live chat allows guests to reach the hotel instantly, reducing frustration and delays.
</p>

<h3>Smarter Task Routing</h3>
<p>
Messages go directly to the right department — kitchen, maintenance, or entertainment.
</p>

<h3>Clear Records of Communication</h3>
<p>
Unlike phone calls, chat leaves a record for guests and managers, ensuring accountability.
</p>

<h3>Guest Confidence and Loyalty</h3>
<p>
Real-time support leads to positive reviews and repeat bookings.
</p>

<h3>Operational Efficiency</h3>
<p>
Managers monitor chat volume, response times, and staff performance to optimize workflows.
</p>

<p>
Live chat is no longer a luxury — it’s a necessity. Hotels that implement efficient, 
AI-supported chat systems gain a competitive advantage in both service quality and reputation.
</p>
`,
    },
];

export default function BlogDetailsPage() {
    const {id} = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <h2 className="text-center">Blog not found</h2>;
    }

    pageTitle(blog.title);

    return (
        <>
            <Spacing lg="70" md="70"/>
            <Spacing lg="120" md="80"/>
            <SectionHeadingStyle3
                title={blog.title}
                variant="text-center"
                shape="shape_5"
                category={blog.category}
                date={blog.date}
                avatar="Bruderss"
                avatarLink="/"
            />
            <Spacing lg="75" md="60"/>
            <div className="container">
                <img src={blog.image} alt={blog.title} className="cs_radius_15 w-100"/>
                <div className="cs_height_60"/>

                <div
                    className="cs_post_details"
                    dangerouslySetInnerHTML={{__html: blog.content}}
                />

                <div className="cs_height_40"/>

                {/* Share */}
                <div className="cs_post_share">
                    <div className="cs_categories">
                        <a href="/" className="cs_category">
                            {blog.category}
                        </a>
                        <a href="/" className="cs_category">
                            Innovation
                        </a>
                    </div>
                    <div className="text-center">
                        <div className="cs_post_share_btns">
                            <a
                                href="https://www.linkedin.com/company/bruderss"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="fa6-brands:linkedin-in"/>
                            </a>
                        </div>
                        <span className="cs_post_share_title">Share this</span>
                    </div>
                </div>

                <div className="cs_height_60"/>

                {/* Comment Form */}
                <div className="cs_height_88 cs_height_lg_60"/>
                <h2 className="text-center cs_fs_50 mb-0">Leave A Reply</h2>
                <div className="cs_height_50"/>

                <form className="row">
                    <div className="col-lg-6">
                        <input
                            type="text"
                            className="cs_form_field_2"
                            placeholder="What’s Your Name?"
                        />
                        <div className="cs_height_40"/>
                    </div>
                    <div className="col-lg-6">
                        <input
                            type="email"
                            className="cs_form_field_2"
                            placeholder="What’s Your Email?"
                        />
                        <div className="cs_height_40"/>
                    </div>
                    <div className="col-lg-12">
            <textarea
                cols="30"
                rows="7"
                className="cs_form_field_2"
                placeholder="Feel Free To Write Your Comment"
            />
                        <div className="cs_height_50"/>
                    </div>
                    <div className="col-lg-12 text-center">
                        <button className="cs_btn cs_style_1" type="submit">
                            Post Comment{' '}
                            <span>
                <i className="fa-solid fa-arrow-right"/>
              </span>
                        </button>
                    </div>
                </form>

                <div className="cs_height_120"/>
            </div>
        </>
    );
}
