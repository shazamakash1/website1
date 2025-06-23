import React from 'react';
import PageHeader from './common/PageHeader';
import TeamImg from '../assets/team_aboutUs.webp'; // Placeholder for team image, replace with actual image path

const AboutUsPage = () => (
  <div className="py-16 bg-white overflow-hidden">
    <PageHeader title={`About ${import.meta.env.VITE_COMPANY_NAME}`} subtitle="Crafting the future of digital interaction, one project at a time."/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                    Our mission is to empower businesses with transformative digital solutions. We believe in the power of technology to solve complex problems, create opportunities, and drive progress. We are committed to delivering excellence and building long-lasting partnerships with our clients based on trust and mutual success.
                </p>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
                    <ul className="mt-4 space-y-4 text-gray-500">
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                            <span className="ml-3"><strong>Innovation:</strong> Continuously seeking better ways to create value.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                            <span className="ml-3"><strong>Integrity:</strong> Upholding the highest standards of honesty and ethics.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 text-green-500">✓</span>
                            <span className="ml-3"><strong>Collaboration:</strong> Working together with our clients to achieve shared goals.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 lg:mt-0" aria-hidden="true">
                {/* <img className="mx-auto rounded-lg shadow-xl" src="https://placehold.co/600x450/e0e7ff/3730a3?text=Our+Team" alt="Team collaborating" /> */}
                <img className="mx-auto rounded-lg shadow-xl" src={TeamImg} alt="Team collaborating" />
            </div>
        </div>
    </div>
  </div>
);

export default AboutUsPage;