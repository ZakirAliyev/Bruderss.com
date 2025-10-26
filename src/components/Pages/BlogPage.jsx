import React, { useState } from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import PostStyle4 from '../Post/PostStyle4';
import { Icon } from '@iconify/react';
import Sidebar from '../Sidebar';
import { pageTitle } from '../../helpers/PageTitle';

const blogData = [
  {
    id: 1,
    thumbnailSrc: '/images/blog/tech-transform.jpeg',
    category: 'Hospitality',
    date: '15 Sep 2025',
    title: 'Top 5 Ways Technology is Transforming the Hotel Experience',
    subTitle:
        'Technology has become the foundation of modern hospitality. From QR code access to smart analytics, discover how hotels are evolving for the digital age.',
    href: '/blog/1',
  },
  {
    id: 2,
    thumbnailSrc: '/images/blog/qr-future.png',
    category: 'Hospitality',
    date: '15 Sep 2025',
    title: 'Why QR Codes Are the Future of Hospitality',
    subTitle:
        'QR codes redefine guest interaction — instant access, real-time updates, and measurable revenue for hotels worldwide.',
    href: '/blog/2',
  },
  {
    id: 3,
    thumbnailSrc: '/images/blog/asd.png',
    category: 'Customer Experience',
    date: '15 Sep 2025',
    title: 'How Live Chat Improves Guest Satisfaction in Hotels',
    subTitle:
        'Instant communication, clear accountability, and smarter workflows — live chat is transforming how guests connect with hotels.',
    href: '/blog/3',
  },
];

export default function BlogPage() {
  const [itemShow, setItemShow] = useState(3);
  pageTitle('Blog');

  return (
      <>
        <Spacing lg="70" md="70" />
        <Spacing lg="140" md="80" />
        <SectionHeadingStyle3
            title="Stay up to date with our <br>latest blog posts"
            subTitle="Recent Blog"
            variant="text-center"
            shape="shape_5"
        />
        <Spacing lg="75" md="60" />
        <div className="container">
          <div className="row cs_gap_y_60">
            <div className="col-lg-8">
              {blogData.slice(0, itemShow).map((item, index) => (
                  <PostStyle4
                      key={index}
                      thumbnailSrc={item.thumbnailSrc}
                      category={item.category}
                      title={item.title}
                      subTitle={item.subTitle}
                      href={item.href}
                  />
              ))}
              {blogData.length <= itemShow ? (
                  ''
              ) : (
                  <div className="text-center">
                    <Spacing lg="95" md="50" />
                    <span
                        className="cs_btn cs_style_1"
                        onClick={() => setItemShow(itemShow + 2)}
                    >
                  Load More Blog
                  <span>
                    <i>
                      <Icon icon="fa6-solid:arrow-right" />
                    </i>
                    <i>
                      <Icon icon="fa6-solid:arrow-right" />
                    </i>
                  </span>
                </span>
                  </div>
              )}
            </div>
            <div className="col-lg-3 offset-lg-1">
              <Sidebar />
            </div>
          </div>
          <Spacing lg="150" md="80" />
        </div>
      </>
  );
}
