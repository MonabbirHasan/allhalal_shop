import { Star, StarBorder } from "@mui/icons-material";
import React from "react";

const ProductRating = () => {
  return (
    <div>
      <span>
        <Star fontSize="small" htmlColor="orange" />
        <Star fontSize="small" htmlColor="orange" />
        <Star fontSize="small" htmlColor="orange" />
        <Star fontSize="small" htmlColor="orange" />
        <StarBorder fontSize="small" htmlColor="orange" />
      </span>
      <span>(1k)</span>
    </div>
  );
};

export default ProductRating;
