import React from 'react';
import PageHeader from './common/PageHeader';
import Website1 from '../assets/Website1.webp'; // Placeholder for website image, replace with actual image path
import Website2 from '../assets/Website2.webp'; // Placeholder for website image, replace with actual image path
import Website3 from '../assets/Website3.webp'; // Placeholder for website image, replace with actual image path
import Website4 from '../assets/Website4.webp'; // Placeholder for website image, replace with actual image path
import Website5 from '../assets/Website5.webp'; // Placeholder for website image, replace with actual image path
import Website6 from '../assets/Website6.webp'; // Placeholder for website image, replace with actual image path


const GalleryPage = () => {
    const images = [
        { id: 1, src: Website1, alt: "Project Alpha" },
        { id: 2, src: Website2, alt: "Project Beta" },
        { id: 3, src: Website3, alt: "Project Gamma" },
        { id: 4, src: Website4, alt: "Project Delta" },
        { id: 5, src: Website5, alt: "Project Epsilon" },
        { id: 6, src: Website6, alt: "Project Zeta" },
    ];

    return (
        <div className="bg-white">
            <PageHeader title="Our Work" subtitle="A showcase of our recent projects and creative endeavors."/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image) => (
                        <div key={image.id} className="group relative rounded-lg overflow-hidden shadow-lg">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;