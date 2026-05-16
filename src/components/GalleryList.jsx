import React, { useEffect, useState } from "react";
import { galleryFallbackItems } from "../data/galleryFallback";

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(galleryFallbackItems);
  }, []);

  return (
    <div>
      {gallery.map((g) => (
        <img
          key={g._id}
          src={g.image}
          alt={g.title || "Gallery item"}
          width="150"
        />
      ))}
    </div>
  );
};

export default GalleryList;
