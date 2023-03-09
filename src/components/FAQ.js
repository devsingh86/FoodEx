import { useEffect, useState } from "react";
import useTitle from "../utils/useTitle";
import Accordion from "./Accordion";

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState("Question 1");

  useTitle("FAQs");
  return (
    <main className="mainContainer">
      <section className="centerAlign">
        <div>
          <h1>Frequently Asked Questions (FAQs)</h1>
          <Accordion
            title={"Question 1"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus in massa. Elit eget gravida cum sociis. Adipiscing elit ut aliquam purus sit. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Massa eget egestas purus viverra."
            }
            isVisible={visibleSection === "Question 1"}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === "Question 1" ? "" : "Question 1"
              )
            }
          />
          <Accordion
            title={"Question 2"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus in massa. Elit eget gravida cum sociis. Adipiscing elit ut aliquam purus sit. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Massa eget egestas purus viverra."
            }
            isVisible={visibleSection === "Question 2"}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === "Question 2" ? "" : "Question 2"
              )
            }
          />
          <Accordion
            title={"Question 3"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus in massa. Elit eget gravida cum sociis. Adipiscing elit ut aliquam purus sit. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Massa eget egestas purus viverra."
            }
            isVisible={visibleSection === "Question 3"}
            setIsVisible={() =>
              setVisibleSection(
                visibleSection === "Question 3" ? "" : "Question 3"
              )
            }
          />
        </div>
      </section>
    </main>
  );
};

export default FAQ;
