import {
  ShimmerPostList,
  ShimmerSectionHeader,
} from "react-shimmer-effects-18";

const Shimmer = () => {
  return (
    <>
      <ShimmerSectionHeader />
      <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
    </>
  );
};

export default Shimmer;
