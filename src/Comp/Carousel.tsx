import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Carousel(){
  const slides = [
    {
      img: "https://www.rcrc.gov.sa/wp-content/uploads/2020/01/Addiriyah.jpg",
    },
    {
      img: "https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/new-hero-winter/jeddah_break_free_landing_page_winter_campaign_1920x1080_6.jpg",
    },
    {
      img: "https://www.flydubai.com/ar/media/Al-Ula-1920x720_tcm9-165344.jpg",
    },
    {
      img: "https://sa2eh.awicdn.com/site-images/sites/default/files/sa2eh-prod/album/1/8/384253/70ef6d8c92c3b651762d02d5de78e35e56d95dc3-141220014738.jpg?preset=v3.0_1200xDYN&save-png=1&rnd=211320212SA2EH",
    },
    {
      img: "https://traveltradejournal.com/wp-content/uploads/2022/03/Saudi-Arabia.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

