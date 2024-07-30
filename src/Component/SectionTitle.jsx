import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className='mx-auto md:w-5/12 '>
            <h2 className='text-3xl uppercase '>-~-~-~{heading}~-~-~-</h2>
        </div>
    );
};

export default SectionTitle;