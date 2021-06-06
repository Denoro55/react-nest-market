import React from "react";
import { Box } from "@material-ui/core";
import { ICategoryItem } from "api/types/catalog";
import Slider from "react-slick";

import { useStyles } from "./CatalogCategories.styles";

interface ICatalogCategoriesProps {
  categories: ICategoryItem[];
  onClick: (category: ICategoryItem) => void;
}

export const CatalogCategories: React.FC<ICatalogCategoriesProps> = ({
  categories,
  onClick,
}) => {
  const styles = useStyles();

  const settings = {
    infinite: categories.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {categories.map((category: ICategoryItem) => (
        <Box key={category.id}>
          <Box onClick={() => onClick(category)} className={styles.slide}>
            {category.label}
          </Box>
        </Box>
      ))}
    </Slider>
  );
};
