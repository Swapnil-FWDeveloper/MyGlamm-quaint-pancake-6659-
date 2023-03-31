import React from "react";
import { Flex, Spacer, Image, Text, Box } from "@chakra-ui/react";
// import { AspectRatio } from '@chakra-ui/react'
// import React, { Component } from "react";
import Slider from "react-slick";

function SliderComponent() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
         <Image src="https://files.myglamm.com/site-images/original/ult1920x527_1.jpg" />
        </div>
        <div>
        <Image src ='https://files.myglamm.com/site-images/original/popxo1920x527-1_3.jpg'/>
        </div>
        <div>
         <Image src ='https://files.myglamm.com/site-images/original/eye1920x527.png'/>
        </div>
        <div>
         <Image src="https://files.myglamm.com/site-images/original/SS1920x527_1.jpg" />
        </div>
      </Slider>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <img
        src="https://files.myglamm.com/site-images/original/Number-1-logo-strip-3360-x-279_1.gif"
        alt="1"
      />
      <br />
      <div>
        <SliderComponent/>
      </div>
      <Image
        src={"https://files.myglamm.com/site-images/original/PD2240x614.gif"}
      />
      <br />
      <br />
      <Image
        src={"https://files.myglamm.com/site-images/original/Lit2240x614-1.jpg"}
      />
      <br />
      <Text
        fontFamily="din-2014, sans-serif;"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="32px"
        fontSize="24px"
        color="#333333"
      >
        IN THE SPOTLIGHT
      </Text>
      <br />
      <Flex gap={"15px"}>
        <Box>
          <Image
            src={"https://files.myglamm.com/site-images/original/SF700x488.jpg"}
          />
        </Box>
        <Spacer />
        <Box>
          <Image
            src={
              "https://files.myglamm.com/site-images/original/700x488_13.png"
            }
          />
        </Box>
        <Spacer />
        <Box>
          <Image
            src={
              "https://files.myglamm.com/site-images/original/popxo700x488_12.jpg"
            }
          />
        </Box>
      </Flex>
      <br />
      <br />
      <br />
      <Image src="https://files.myglamm.com/site-images/original/GE2240x614.jpg" />
      <br />
      <Text
        fontFamily="din-2014, sans-serif;"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="32px"
        fontSize="24px"
        color="#333333"
      >
        LATEST GLAMM LAUNCHES
      </Text>
      <br />
      <br />
      <Flex gap={"20px"}>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/xoxo700x488_1.jpg" />
        </Box>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/TI700x488.jpg" />
        </Box>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/TR700x488.gif" />
        </Box>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/Latest-Glamm-Launches-700x488.jpg" />
        </Box>
      </Flex>
      <br />
      <br />
      <Flex justifyContent={"flex-end"} gap={"250px"}>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/700x488-499-1.jpg" />
        </Box>
        <Box>
          <Image src="https://files.myglamm.com/site-images/original/700x488-999.jpg" />
        </Box>
      </Flex>
      <br />
      <br />
      <Text
        fontFamily="din-2014, sans-serif;"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="32px"
        fontSize="24px"
        color="#333333"
      >
        SHOP FROM CATEGORIES
      </Text>
      <br />
      <Flex>
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
        <Box br="50%">
          <Image src="https://files.myglamm.com/site-images/original/SKin-1-2.png" />
          <Text>Skin</Text>
        </Box>
        <Spacer />
      </Flex>
      <br />
      <br />
      <Image src="https://files.myglamm.com/site-images/original/RE2240x614_4.jpg" />
      <br />
      <br />
      <Image src="https://files.myglamm.com/site-images/original/Row-44-Beware-Strip-3360x220.png" />
      <br />
      <br />
      <Image src="https://files.myglamm.com/site-images/original/Row-43-Disclaimer-Strip-3360x220.png" />
      <br />
      <br />
      ////////////////////////Vidoe /////////////////////////////
      {/* <video style={{height:'50px', width:'50%'}}>
  <source src="./Video/The_Adam_Project_2022_1080p_NF_WEB_DL_x264_DD+_5_1_192Kbps_Tel_+.mkv" />

  </video> */}
    </div>
  );
};

export default Home;


























* {
    box-sizing: border-box;
  }
  #main{
    display: flex;
  }
  
  .dropbtn {
    background: #fff;
    border: none;
    font-size: 15px;
    padding: 10px;
    color: black.400;
  }
  
  .drobdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    background: #f1f1f1;
    min-width: 160px;
    position: absolute;
    z-index: 1;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .dropdown-content a {
    display: block;
    color: #000;
    text-decoration: none;
    padding: 17px;
    font-size: 15px;
  }
  
  .dropdown-content a:hover {
    background: #ddd;
  }
  
  .dropdown:hover .dropdown-content {
    display: inline;
  }
  
  .dropdown:hover .dropbtn {
    background:#fff;
  }