import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/New folder/bgimg/aboutbgimg.jpg';
import img6 from '../../../assets/New folder/imb8.jpg';
import img2 from '../../../assets/New folder/imb4.jpg';
import img3 from '../../../assets/New folder/imb7.jpg';
import img4 from '../../../assets/New folder/imb1.jpg';
import img5 from '../../../assets/New folder/imb9.jpg';

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
          
        </div>
        <div>
            <img src={img6} />
           
        </div>
        <div>
            <img src={img2} />
           
        </div>
        <div>
            <img src={img3} />
           
        </div>
        <div>
            <img src={img4} />
           
        </div>
        <div>
            <img src={img5} />
           
        </div>
    </Carousel>
    );
};

export default Banner;