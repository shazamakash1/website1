import React, { useState, useEffect } from 'react';

import './styles.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import UserAgreementPage from './components/UserAgeementPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const pages = [
      { id: 'home', name: 'Home', component: <Homepage navigateTo={setCurrentPage} /> },
      { id: 'about', name: 'About Us', component: <AboutUsPage /> },
      { id: 'gallery', name: 'Gallery', component: <GalleryPage /> },
      { id: 'contact', name: 'Contact', component: <ContactPage /> },
      { id: 'agreement', name: 'User Agreement', component: <UserAgreementPage /> },
      { id: 'privacy', name: 'Privacy Policy', component: <PrivacyPolicyPage /> }, 
    ];
    
    const navigateTo = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const ActivePageComponent = pages.find(p => p.id === currentPage)?.component;

    useEffect(() => {
        const pageTitle = pages.find(p => p.id === currentPage)?.name || 'Home';
        document.title = `${import.meta.env.VITE_COMPANY_NAME} | ${pageTitle}`;
    }, [currentPage]);

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Navbar currentPage={currentPage} navigateTo={navigateTo} pages={pages.filter(p => p.id !== 'agreement')} />
            <main>
                {ActivePageComponent}
            </main>
            <Footer navigateTo={navigateTo} pages={pages.filter(p => p.id !== 'agreement')}/>
        </div>
    );
};

export default App;