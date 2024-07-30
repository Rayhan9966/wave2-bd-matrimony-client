import React from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import aboutbgimg  from '../../../assets/New folder/imb8.jpg';
import '../AboutSection/aboutimg.css';

const AboutSection = () => {
    return (
        <div className='aboutimg bg-fixed pt-10 my-20'>
            <SectionTitle heading="About Bd Matrimony">

            </SectionTitle>

           <div className='md:flex justify-center items-center  px-36 pb-20 py-12'>
           <div>
                <img src={aboutbgimg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium 
                    harum numquam animi, nihil sunt voluptatibus, ratione ullam neque, 
                    architecto quaerat non? Dolorum ad aliquid tempore blanditiis voluptate 
                    rem aspernatur illo, in laborum pariatur voluptates, corrupti 
                    voluptatem minus maiores. Labore quod repellat quas soluta 
                    amet.</p>
                    <button className="btn btn-outline mt-4 border-1  border-b-4 border-t-4">Read More</button>
            </div>
          
           </div>
        </div>
    );
};

export default AboutSection;