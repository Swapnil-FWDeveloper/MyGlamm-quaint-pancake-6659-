import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Carousel = () => {
  return (
    <>
      <Box width={{ base: "95%", lg: "90%" }} margin="auto">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              alt="1"
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner5-03FEB23.png"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="2"
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner4-03FEB23.gif"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="3"
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner3-03FEB23A.png"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="4"
              src="https://assets.ajio.com/cms/AJIO/WEB/05022023-UHP-D-MainBanner-P2-USPALEVIS-Starting699.jpg"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="5"
              src="https://assets.ajio.com/cms/AJIO/WEB/05022023-UHP-D-MainBanner-P4-Trends-Flat70.jpg"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="6"
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner1-03FEB23.gif"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt="7"
              src="https://assets.ajio.com/cms/AJIO/WEB/05022023-UHP-D-MainBanner-P6-homeessentials-PorticoHomecentre-Upto80.jpg"
              width={"100%"}
              height={"auto"}
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Carousel;
