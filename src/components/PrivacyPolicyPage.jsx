import React from 'react';
import PageHeader from './common/PageHeader';

const PrivacyPolicyPage = () => (
    <div className="bg-white">
        <PageHeader title="Privacy Policy" subtitle="Your privacy is important to us."/>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 prose lg:prose-xl">
            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
            <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: name, email address, phone number, and other similar contact data.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

            <h2>3. Will Your Information Be Shared With Anyone?</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations.</p>

            <h2>4. How Long Do We Keep Your Information?</h2>
            <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

            <h2>5. Contact Us</h2>
            <p>If you have questions or comments about this policy, you may email us at {import.meta.env.VITE_COMPANY_PRIVACY_EMAIL}.</p>
        </div>
    </div>
);

export default PrivacyPolicyPage;