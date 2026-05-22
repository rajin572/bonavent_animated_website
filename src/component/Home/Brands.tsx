import React from 'react';
import ParallaxMarquee from '../ui/animation/components/AnimatedMarque';
import { AllImages } from '../../../public/assests/images/AllImages';



const images = [
    AllImages?.audi.src,
    AllImages?.bmw.src,
    AllImages?.chevrolet.src,
    AllImages?.ford.src,
    AllImages?.hyundai.src,
    AllImages?.kia.src,
    AllImages?.mercedesBenz.src,
    AllImages?.nissan.src,
    AllImages?.tesla.src,
    AllImages?.toyota.src,
    AllImages?.volkswagen.src,
    AllImages?.volvo.src,
];

const Brands = () => {
    return (
        <section className="mt-5 relative" >

            <ParallaxMarquee items={images} direction={-1} baseVelocity={1.25} itemWidth={210} gap={10} />

            <div className="from-primary-color pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-primary-color pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </section>
    );
};

export default Brands;