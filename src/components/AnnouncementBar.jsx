import React, { useEffect, useState } from "react";
import { announcementAPI } from "../api";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  const [ann, setAnn] = useState([]);

  useEffect(() => {
    announcementAPI.getAll()
      .then(res => setAnn(res.data?.data || res.data || []))
      .catch(err => console.log(err));
  }, []);

  if (ann.length === 0) return null;

  return (
    <div className="announcement-wrapper">
      <div className="announcement-slider">
        {ann.map(item => (
          <div key={item._id || item.id} className="announcement-item">
            <strong>{item.title}:</strong> {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}
