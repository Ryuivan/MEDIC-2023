import React from "react";
import "./Gallery.css";
import photos from "./dataGallery";
import Typewriter from "typewriter-effect";
import GalleryPreview from "./GalleryPreview";

export default function Gallery() {
  return (
    <>
      <div id="gallery-bg">
        <div className="container pb-5">
          <div className="gallery-title">
            <h1 className="text-center py-5">
              <Typewriter
                options={{
                  strings: ["Gallery Medic Gen IX"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="photo-container">
            {photos.map((photo) => (
              <GalleryPreview
                key={photo.id}
                title={photo.title}
                img={photo.img}
                tanggal={photo.tanggal}
                id={photo.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
