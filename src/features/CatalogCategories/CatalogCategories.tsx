import React from "react";
import Slider from "react-slick";

import { useStyles } from "./CatalogCategories.styles";

export const CatalogCategories: React.FC = () => {
  const styles = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
    </Slider>
  );
};
