import React, { useEffect, useState } from "react";
import { galleryAPI, getMediaUrl } from "../api";

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    galleryAPI.getAll()
      .then(res => setGallery(res.data?.data || res.data || []))
      .catch(() => setGallery([]));
  }, []);

  return (
    <div>
      {gallery.map((g) => (
        <img
          key={g._id}
          src={getMediaUrl(g.image)}
          alt={g.title || "Gallery item"}
          width="150"
        />
      ))}
    </div>
  );
};

export default GalleryList;
