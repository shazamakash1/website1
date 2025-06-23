import React from 'react';
import PageHeader from './common/PageHeader';

const UserAgreementPage = () => (
    <div className="bg-white">
        <PageHeader title="User Agreement" subtitle="Terms and Conditions for using our services."/>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2>1. Introduction</h2>
            <p>Welcome to Innovate Inc. By accessing our website or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.</p>
            <h2>2. Use of Our Services</h2>
            <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</p>
            <h2>3. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of Innovate Inc. or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Innovate Inc.</p>
            <h2>4. Limitation of Liability</h2>
            <p>Innovate Inc. will not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, this site or the performance of the products, even if Innovate Inc. has been advised of the possibility of such damages.</p>
            <h2>5. Governing Law</h2>
            <p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the land. Any legal action or proceeding related to this website shall be brought exclusively in a federal or state court of competent jurisdiction.</p>
        </div>
    </div>
);

export default UserAgreementPage;