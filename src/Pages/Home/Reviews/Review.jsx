import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data))

  }, [])

  return (
    <section className='my-20'>
      <SectionTitle
        heading=" Couple Reviews" >

      </SectionTitle>
      <div>
        <Swiper
          spaceBetween={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          {
            reviews.map(review => <SwiperSlide
              key={review._id}>
              <div className="card     w-100 shadow-2xl">
                <figure className='mt-10'>
                  <img
                    src={review.coupleImage}
                    alt="Shoes" />
                </figure>
                <div className="card-body m-20">
                
                  <h2 className="card-title">
                    {review.marriageDate}
                    <br></br>
            
                    <div >
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.reviewStar}
      readOnly
    />
                    </div>
                  </h2>
                  <p >{review.successStoryText}</p>
                  {/* <div className="card-actions justify-end">npm run dev
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div> */}
                </div>
              </div>

            </SwiperSlide>)
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Review;