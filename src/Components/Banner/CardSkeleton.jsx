import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="card_skeleton">
      <div>
        <Skeleton width={250} height={50} />
      </div>
      <br />
      <div className="skeleton_left">
        <Skeleton width={120} height={20} />
      </div>
    </div>
  );
};

export default CardSkeleton;
