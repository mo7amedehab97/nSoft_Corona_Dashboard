import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CountrySkeletonLoading = () => {
  return (
    <div className="country_skeleton_loader_container">
      <div className="country_skeleton_holder">
        <Skeleton width={55} height={45} />
      </div>
      <div className="country_skeleton_holder">
        <Skeleton width={140} height={20} />
        <Skeleton width={170} height={20} />
      </div>{" "}
      <div className="country_skeleton_holder">
        <Skeleton width={120} height={20} />
        <Skeleton width={170} height={20} />
      </div>{" "}
      <div className="country_skeleton_holder">
        <Skeleton width={50} height={20} />
        <Skeleton width={170} height={20} />
      </div>
    </div>
  );
};

export default CountrySkeletonLoading;
