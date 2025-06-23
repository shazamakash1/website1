import React from 'react';
import Icon from './common/Icon';

const Footer = ({ navigateTo, pages }) => (
    <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                     <a href="#" onClick={() => navigateTo('home')} className="flex items-center space-x-2 text-2xl font-bold">
                        <Icon name="building" className="text-indigo-400 h-8 w-8" />
                        <span>{import.meta.env.VITE_COMPANY_NAME}</span>
                    </a>
                    <p className="text-gray-400 text-base">
                        Building the future of digital excellence.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navigation</h3>
                            <ul className="mt-4 space-y-4">
                                {pages.map(page => (
                                    <li key={page.id}>
                                        <a href="#" onClick={() => navigateTo(page.id)} className="text-base text-gray-400 hover:text-white">
                                            {page.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-4">
                                 <li><a href="#" onClick={() => navigateTo('agreement')} className="text-base text-gray-400 hover:text-white">User Agreement</a></li>
                                 <li><a href="#" onClick={() => navigateTo('privacy')} className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8">
                <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} {import.meta.env.VITE_COMPANY_NAME}. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;