import React from 'react';
import Spacing from '../Spacing';
import SectionHeadingStyle3 from '../SectionHeading/SectionHeadingStyle3';
import IconBoxStyle6 from '../IconBox/IconBoxStyle6';
import SectionHeadingStyle5 from '../SectionHeading/SectionHeadingStyle5';
import SectionHeading from '../SectionHeading';
import { pageTitle } from '../../helpers/PageTitle';

export default function AboutPage() {
    pageTitle('About');
    return (
        <>
            <Spacing lg="70" md="70" />
            <Spacing lg="140" md="80" />
            <SectionHeadingStyle3
                title="Smarter Hotel Management Platform"
                subTitle="About Us"
                variant="text-center"
                shape="shape_1"
            />
            <Spacing lg="75" md="60" />

            <section className="container">
                <p className="cs_fs_20 cs_mb_25">
                    Our platform merges traditional service with modern technology. A hotel stay should be more than accommodation — it should be convenience, comfort, and memorable experiences.
                </p>
                <p className="cs_fs_20 cs_mb_60">
                    Guests enjoy a fully digital experience: browsing menus, ordering room service, reserving entertainment, booking tickets, renting amenities, and chatting with staff — all through a simple QR code. Hotel managers gain real-time insights for smooth operations and higher satisfaction.
                </p>

                <h3 className="cs_fs_35 cs_mb_20">Mission</h3>
                <p className="cs_fs_18 cs_mb_40">
                    Deliver a smarter, faster, interactive hospitality experience where every guest feels cared for, and every staff member has the right tools.
                </p>

                <h3 className="cs_fs_35 cs_mb_20">Vision</h3>
                <p className="cs_fs_18 cs_mb_40">
                    Become the leading digital hospitality solution worldwide by bringing innovation, efficiency, and simplicity to every stay.
                </p>

                <h3 className="cs_fs_35 cs_mb_20">Our Values</h3>
                <ul className="cs_fs_18 cs_mb_40">
                    <li><strong>Guest-Centric:</strong> Focused on guest convenience.</li>
                    <li><strong>Transparency:</strong> Clear pricing and communication.</li>
                    <li><strong>Innovation:</strong> Always improving technology.</li>
                    <li><strong>Reliability:</strong> Trusted by staff and guests.</li>
                    <li><strong>Sustainability:</strong> Promoting paperless, green solutions.</li>
                </ul>

                <h3 className="cs_fs_35 cs_mb_20">Why Choose Us?</h3>
                <ul className="cs_fs_18 cs_mb_40">
                    <li>All-in-One: Menus, service, events, rentals.</li>
                    <li>QR Simplicity: Instant access, no apps.</li>
                    <li>Real-Time Chat: Quick support from staff.</li>
                    <li>Easy Reservations & Payments online.</li>
                    <li>Direct Call Panel for reception or kitchen.</li>
                    <li>Comprehensive Rentals with clear pricing.</li>
                    <li>Smart Management Tools for efficiency.</li>
                </ul>

                <h3 className="cs_fs_35 cs_mb_20">For Hotel Owners</h3>
                <p className="cs_fs_18 cs_mb_15">
                    The Admin Panel tracks and displays real-time data:
                </p>
                <ul className="cs_fs_18 cs_mb_40">
                    <li>QR scans and active users.</li>
                    <li>All chat conversations and responses.</li>
                    <li>Reservations and payments.</li>
                    <li>Revenue reports (daily, weekly, monthly).</li>
                    <li>Popular services and events.</li>
                    <li>Staff performance and response times.</li>
                </ul>
                <p className="cs_fs_18 cs_mb_60">
                    With data-driven insights, managers can make smarter decisions, improve services, and increase profitability.
                </p>

                <h3 className="cs_fs_35 cs_mb_20">Our Commitment</h3>
                <p className="cs_fs_18 cs_mb_40">
                    We aim to reshape hospitality — making hotels smarter, guests happier, and businesses more profitable. Technology, convenience, and service together create value for everyone.
                </p>
            </section>

            <Spacing lg="150" md="80" />
            <section className="cs_primary_bg">
                <Spacing lg="140" md="70" />
                <div className="container">
                    <SectionHeadingStyle5 title="How We Work" />
                    <Spacing lg="85" md="45" />
                    <div className="cs_working_process_wrap cs_center">
                        <div className="cs_working_process">
                            <div className="cs_working_process_col">
                                <IconBoxStyle6
                                    bgSrc="/images/others/process_1.png"
                                    iconSrc="/images/icons/search.svg"
                                    title="Research"
                                    subTitle="We analyze hotel operations and guest needs."
                                />
                            </div>
                            <div className="cs_working_process_col">
                                <IconBoxStyle6
                                    bgSrc="/images/others/process_2.png"
                                    iconSrc="/images/icons/idea.svg"
                                    title="Design"
                                    subTitle="Crafting user-friendly and secure solutions."
                                />
                            </div>
                            <div className="cs_working_process_col">
                                <IconBoxStyle6
                                    bgSrc="/images/others/process_3.png"
                                    iconSrc="/images/icons/gear.svg"
                                    title="Implementation"
                                    subTitle="From coding to deployment, seamless integration."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Spacing lg="150" md="80" />
            </section>
        </>
    );
}
