import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingGallery() {
  return (
    <div className="photo-card">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} />
      </SkeletonTheme>
    </div>
  );
}
