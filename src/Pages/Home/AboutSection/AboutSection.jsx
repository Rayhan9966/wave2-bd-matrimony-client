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
                <img  className="max-w-sm rounded-lg shadow-2xl" src={aboutbgimg} alt="" />
            </div>
            <div className='md:ml-10 mt-8'>
                <p >
                BD Matrimony is a prominent matrimonial service catering to Bengali communities, offering personalized matchmaking solutions. 
                With a user-friendly platform, it connects individuals seeking life partners through detailed profiles and advanced search options.
                 The service emphasizes cultural compatibility and family values, ensuring a traditional yet modern approach to finding a suitable match.
                  BD Matrimony provides various features, including verified profiles, customized matchmaking, and privacy controls, 
                  to facilitate a smooth and secure experience for users. It serves as a bridge for Bengali families and individuals 
                  to find compatible life partners while preserving cultural heritage and traditions.</p>
                    <button className="btn btn-outline mt-4 border-1 border-b-4 border-t-4">Read More</button>
            </div>
          
           </div>
        </div>
    );
};

export default AboutSection;