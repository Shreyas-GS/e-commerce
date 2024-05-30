import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/homeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  // const slidePrev = () => setActiveIndex(activeIndex - 1);
  // const slideNext = () => setActiveIndex(activeIndex + 1);
  // const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border border-grey">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayInterval={6000}
          // infinite
          responsive={responsive}
          disableDotsControls
          //onSlideChanged={syncActiveIndex}
        />

        {/* <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(90deg)", color: "green" }}
          />
        </Button>

        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
