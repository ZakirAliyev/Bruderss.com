import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const addressDataList = ['support@bruderss.com'];

const serviceMenuList = [
  { title: 'Digital Menu & Food Ordering', href: '/service/1' },
  { title: 'Room Service Requests', href: '/service/2' },
  { title: 'Entertainment Reservations', href: '/service/3' },
  { title: 'Events & Ticketing', href: '/service/4' },
  { title: 'Direct Call Panel', href: '/service/5' },
  { title: 'Live Chat Support', href: '/service/6' },
  { title: 'Rental Services', href: '/service/7' },
];

const LinksMenuList = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Team', href: '/team' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

const policyMenuList = [
  { title: 'Terms of Use', href: '/terms' },
  { title: 'Privacy Policy', href: '/privacy' },
];

const socialBtnList = [
  {
    icon: 'fa6-brands:linkedin-in',
    href: 'https://www.linkedin.com/company/bruderss',
  },
  // Eğer ileride başka sosyal medya ekleyeceksen buraya ekleyebilirsin
];

export default function Footer() {
  return (
      <footer
          className="cs_fooer cs_bg_filed"
          style={{ backgroundImage: 'url(/images/footer_bg.jpeg)' }}
      >
        <div className="cs_fooer_main">
          <div className="container">
            <div className="row">
              {/* Adres ve logo */}
              <div className="col-lg-5 col-sm-6">
                <div className="cs_footer_item">
                  <div className="cs_text_widget">
                    <img src="/images/logo_white.png" alt="Bruderss Logo" />
                  </div>
                  <ul className="cs_menu_widget cs_mp0">
                    {addressDataList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Servis menüsü */}
              <div className="col-lg-4 col-sm-6">
                <div className="cs_footer_item">
                  <h2 className="cs_widget_title">Services</h2>
                  <ul className="cs_menu_widget cs_mp0">
                    {serviceMenuList.map((item, index) => (
                        <li key={index}>
                          <Link to={item.href}>{item.title}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Site linkleri */}
              <div className="col-lg-3 col-sm-6">
                <div className="cs_footer_item">
                  <h2 className="cs_widget_title">Links</h2>
                  <ul className="cs_menu_widget cs_mp0">
                    {LinksMenuList.map((item, index) => (
                        <li key={index}>
                          <Link to={item.href}>{item.title}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt footer */}
        <div className="container">
          <div className="cs_bottom_footer">
            {/* Sosyal medya */}
            <div className="cs_bottom_footer_left">
              <div className="cs_social_btns cs_style_1">
                {socialBtnList.map((item, index) => (
                    <a
                        href={item.href}
                        className="cs_center"
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Icon icon={item.icon} />
                    </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="cs_copyright">
              Copyright © 2025 Bruderss. All rights reserved.
            </div>

            {/* Policy links */}
            <div className="cs_bottom_footer_right">
              <ul className="cs_footer_links cs_mp0">
                {policyMenuList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href}>{item.title}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}
