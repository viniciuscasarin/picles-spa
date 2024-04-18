import SkelentonLib, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Skeleton(props: SkeletonProps) {
  return <SkelentonLib {...props} />;
}
