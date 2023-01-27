const Shimmer = () => {
  return (
    <>
      <div class="shimmer">
        {Array(10)
          .fill()
          .map((element, index) => (
            <div class="wrapper">
              <div class="image-card animate"></div>
              <div className="shimmer-details">
                <div class="stroke animate title"></div>
                <div class="stroke animate link"></div>
                <div class="stroke animate description"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
