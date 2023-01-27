const Shimmer = () => {
  return (
    <>
      <div className="shimmer">
        {Array(10)
          .fill()
          .map((element, index) => (
            <div className="wrapper" key={index}>
              <div className="image-card animate"></div>
              <div className="shimmer-details">
                <div className="stroke animate title"></div>
                <div className="stroke animate link"></div>
                <div className="stroke animate description"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
