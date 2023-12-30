import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

interface CarouselProps {
  PostImages: string[]
  className: string
}

const Carousel: React.FC<CarouselProps> = ({ PostImages, className }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className={className}
    >
      {PostImages.length > 0 && (
        <>
          {PostImages.map((imgUrl) => (
            <SwiperSlide key={imgUrl}>
              <img src={imgUrl} alt="whisperImages" />
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  )
}

export default Carousel
