const Accordion = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className={isVisible ? "accordion-wrapper open" : "accordion-wrapper"}>
      <div
        className="accordion-header"
        onClick={() => setIsVisible(isVisible ? false : true)}
      >
        {title}
        <i className={isVisible ? "ri-subtract-line" : "ri-add-line"}></i>
      </div>
      <div className="accordion-body">
        {isVisible && <div className="accordion-content">{description}</div>}
      </div>
    </div>
  );
};

export default Accordion;
