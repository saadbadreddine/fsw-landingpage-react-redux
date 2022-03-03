// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  carouselImage: {
    minWidth: "45%",
    maxWidth: "75%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
}));
export default () => {
  const classes = useStyles();

  return (
    <Swiper
      id="carousel"
      className={classes.root}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={"/assets/morty.jpg"} className={classes.carouselImage}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/assets/morty.jpg"} className={classes.carouselImage}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/assets/morty.jpg"} className={classes.carouselImage}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/assets/morty.jpg"} className={classes.carouselImage}></img>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
