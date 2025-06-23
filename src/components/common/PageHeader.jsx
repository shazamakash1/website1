import React from 'react';

const PageHeader = ({ title, subtitle }) => (
    <div className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">{subtitle}</p>
        </div>
    </div>
);

export default PageHeader;