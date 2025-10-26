import React, { useState } from 'react';
import PricingTable from '.';

export default function PricingTableList() {
    const [tab, setTab] = useState('monthly');

    return (
        <div className="cs_tabs cs_style1">
            <div className="row cs_gap_y_30">

                {/* ====== STARTER / TRIAL PLAN ====== */}
                <div className="col-lg-4">
                    {tab === 'monthly' && (
                        <PricingTable
                            title="Starter"
                            subTitle="For hotels exploring digital management for the first time."
                            price="0"
                            currency="$"
                            timeline="1 week free trial"
                            features={[
                                'Basic digital menu',
                                'QR access system',
                                'Limited chat support',
                                'Simple setup tools',
                            ]}
                            btnText="Start Free Trial"
                            btnLink="/"
                        />
                    )}
                    {tab === 'yearly' && (
                        <PricingTable
                            title="Starter"
                            subTitle="For hotels exploring digital management for the first time."
                            price="0"
                            currency="$"
                            timeline="1 week free trial"
                            features={[
                                'Basic digital menu',
                                'QR access system',
                                'Limited chat support',
                                'Simple setup tools',
                            ]}
                            btnText="Start Free Trial"
                            btnLink="/"
                        />
                    )}
                </div>

                {/* ====== BUSINESS / MONTHLY PLAN ====== */}
                <div className="col-lg-4">
                    {tab === 'monthly' && (
                        <PricingTable
                            title="Business"
                            subTitle="Everything a modern hotel needs for daily operations."
                            price="70"
                            currency="$"
                            timeline="per month"
                            features={[
                                'Online reservations',
                                'Guest & staff chat',
                                'Real-time dashboard',
                                'Payment management',
                            ]}
                            btnText="Choose Business Plan"
                            btnLink="/"
                            popular
                        />
                    )}
                    {tab === 'yearly' && (
                        <PricingTable
                            title="Business"
                            subTitle="Everything a modern hotel needs for daily operations."
                            price="100"
                            currency="$"
                            timeline="per year"
                            features={[
                                'Online reservations',
                                'Guest & staff chat',
                                'Real-time dashboard',
                                'Payment management',
                            ]}
                            btnText="Choose Business Plan"
                            btnLink="/"
                            popular
                        />
                    )}
                </div>

                {/* ====== ENTERPRISE / YEARLY PLAN ====== */}
                <div className="col-lg-4">
                    {tab === 'monthly' && (
                        <PricingTable
                            title="Enterprise"
                            subTitle="Advanced tools for large hotels and enterprise management."
                            price="199"
                            currency="$"
                            timeline="per month"
                            features={[
                                'Full Admin Panel',
                                'Inventory tracking',
                                'Analytics & reports',
                                'Multi-branch control',
                            ]}
                            btnText="Contact Sales"
                            btnLink="/contact"
                        />
                    )}
                    {tab === 'yearly' && (
                        <PricingTable
                            title="Enterprise"
                            subTitle="Advanced tools for large hotels and enterprise management."
                            price="1999"
                            currency="$"
                            timeline="per year"
                            features={[
                                'Full Admin Panel',
                                'Inventory tracking',
                                'Analytics & reports',
                                'Multi-branch control',
                            ]}
                            btnText="Contact Sales"
                            btnLink="/contact"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
