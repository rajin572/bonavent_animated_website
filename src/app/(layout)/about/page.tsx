import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bonavent — our mission to make car rental simple, safe, and rewarding for everyone in Puerto Rico.",
  alternates: { canonical: "https://www.bonaventpr.com/about" },
  openGraph: {
    title: "About Us | Bonavent",
    description: "Bonavent is on a mission to make car rental simple, safe, and rewarding for drivers and hosts across Puerto Rico.",
    url: "https://www.bonaventpr.com/about",
  },
};

import TransitionLink from '@/utility/TransitionLink';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white h-screen flex items-center justify-center'>
            <TransitionLink href="/" label="Home ->" />
        </div>
    );
};

export default page;