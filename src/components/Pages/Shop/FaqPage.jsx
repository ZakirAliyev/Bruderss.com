import React, {useState} from 'react';
import SectionHeading from "../../SectionHeading";
import Accordion from "../../Accordion";
import Spacing from "../../Spacing";
import {pageTitle} from "../../../helpers/PageTitle";


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

export default function FaqPage() {
    const [itemShow, setItemShow] = useState(3);
    pageTitle('Faq');

    return (
        <>
            <Spacing lg="70" md="70"/>
            <Spacing lg="140" md="80"/>
            <SectionHeading title="Frequently asked question" subTitle="FAQs"/>
            <Spacing lg="55" md="30"/>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <Accordion variant="cs_type_1" data={faqData}/>
                </div>
            </div>
        </>
    );
}
