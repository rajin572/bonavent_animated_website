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