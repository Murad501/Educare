import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='text-7xl font-bold mb-6'>Oops!</h1>
                <h2 className='text-5xl font-bold mb-8'><span className='text-red-600'>404</span> Page Not Found</h2>
                <p className='text-xl mb-6'>The page you are looking for might have been <br /> removed had its name changed or is temporarily unavailable.</p>
                <Link to={'/'} className='text-2xl text-blue-500 font-semibold'>Go to Home page</Link>
            </div>
        </div>
    );
};

export default Page404;