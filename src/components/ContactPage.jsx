import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeader from './common/PageHeader';
import Icon from './common/Icon';

const ContactPage = () => {
    const form = useRef();
    const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });

    // Read credentials from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ status: 'sending', message: '' });
 

        let name = form.current.user_name.value;
        let email = form.current.user_email.value;
        let subject = form.current.subject.value;
        let message = form.current.message.value;
        // Check if credentials are set in the .env file
        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS credentials are not set in the .env file.");
            setFormStatus({ status: 'error', message: 'Email service is not configured. Please contact the administrator.' });
            return;
        }


        // emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        emailjs.send(serviceID, templateID, {
            name: name,
            message: message,
            title: subject,
            email: email,
        },publicKey)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setFormStatus({ status: 'success', message: "Message sent successfully! We'll be in touch soon." });
                form.current.reset();
                setTimeout(() => setFormStatus({ status: 'idle', message: '' }), 5000);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setFormStatus({ status: 'error', message: 'Failed to send message. Please try again later.' });
            });
    };

    return (
        <div className="bg-gray-50">
            <PageHeader title="Get In Touch" subtitle="We’d love to hear from you! Reach out with any questions or to start a new project." />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl rounded-lg">
                    <div className="grid lg:grid-cols-2">
                        <div className="relative py-16 px-6 sm:px-10 lg:px-12 bg-indigo-700 rounded-l-lg text-white">
                            <h3 className="text-3xl font-extrabold tracking-tight">Contact Information</h3>
                            <p className="mt-4 text-lg text-indigo-100">Our team is available to assist you. Contact us through any of the methods below, or use the form to send us a message directly.</p>
                            <div className="mt-8 space-y-6">
                                <p className="flex items-center"><Icon name="mapPin" className="h-6 w-6 mr-3 text-indigo-200" /><span>{import.meta.env.VITE_COMPANY_ADDESS}</span></p>
                                <p className="flex items-center"><Icon name="phone" className="h-6 w-6 mr-3 text-indigo-200" /><span>{import.meta.env.VITE_COMPANY_PHONE}</span></p>
                                <p className="flex items-center"><Icon name="mail" className="h-6 w-6 mr-3 text-indigo-200" /><span>{import.meta.env.VITE_COMPANY_EMAIL}</span></p>
                            </div>
                        </div>
                        <div className="py-16 px-6 sm:px-10 lg:px-12">
                            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">Send us a message</h3>
                            <form ref={form} onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-y-6">
                                <div><label htmlFor="user_name" className="sr-only">Full name</label><input type="text" name="user_name" id="user_name" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name" /></div>
                                <div><label htmlFor="user_email" className="sr-only">Email</label><input id="user_email" name="user_email" type="email" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" /></div>
                                <div><label htmlFor="subject" className="sr-only">Subject</label><input type="text" name="subject" id="subject" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Subject" /></div>
                                <div><label htmlFor="message" className="sr-only">Message</label><textarea id="message" name="message" rows="4" required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea></div>
                                <div><button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300" disabled={formStatus.status === 'sending'}>{formStatus.status === 'sending' ? 'Sending...' : 'Submit Message'}</button></div>
                            </form>
                            {formStatus.status === 'success' && <p className="mt-4 text-center text-green-600">{formStatus.message}</p>}
                            {formStatus.status === 'error' && <p className="mt-4 text-center text-red-600">{formStatus.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;