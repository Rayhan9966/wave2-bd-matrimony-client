import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import slide1 from '../../../assets/New folder/imb1.jpg';
import slide2 from '../../../assets/New folder/imb9.jpg';
import slide3 from '../../../assets/New folder/imb7.jpg';
import slide4 from '../../../assets/New folder/imb8.jpg';
import slide5 from '../../../assets/New folder/imb9.jpg';
import SectionTitle from '../../../Component/SectionTitle';
const Catagory = () => {
    return (
        <><br>
        </br>
       <section>
       <SectionTitle
       heading={"Success Story"}>
            
            </SectionTitle>
            <Swiper
                
               
                slidesPerView={4}
                // slidesPerView={'auto'}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-5"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className="legend">Building a family together brought new dimensions to our relationship. 
                        Celebrated 25 years of love and partnership, a journey marked by growth.
  
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className="legend">Celebrated 25 years of love and partnership, a journey marked by growth, resilience,
                         and countless cherished memories together."
  
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className="legend">From our first date to raising a family, we've built countless cherished memories together. Our bond has only strengthened through challenges and triumphs,
                         proving that true partnership stands the test of time
  
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className="legend">Building a family together brought new dimensions to our relationship. 
                    Celebrated 25 years of love and partnership, a journey marked by growth.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className="legend">Our journey has also been filled with countless moments of joy and celebration. From anniversaries and birthdays to spontaneous adventures and quiet evenings at home,
                         we've made a point to celebrate our love and the life we've built together.
  
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className="legend">As we moved forward, 
                        our relationship faced the u Building a family together brought new dimensions to our relationship
  
                    </p>
                </SwiperSlide>
  
            </Swiper>
       </section>
        </>
    );

};

export default Catagory;