import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProfileFC from "../components/Profile";
import ProfileCC from "../components/ProfileClass";
import useTitle from "../utils/useTitle";

const About = () => {
  useTitle("About Us");

  return (
    <main className="mainContainer">
      <section className="centerAlign">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            nunc lobortis mattis aliquam faucibus purus in massa. Elit eget
            gravida cum sociis. Adipiscing elit ut aliquam purus sit. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien. Massa eget egestas purus viverra. Auctor neque vitae tempus
            quam pellentesque nec. Blandit massa enim nec dui nunc mattis enim.
            Adipiscing elit ut aliquam purus sit amet. Aenean pharetra magna ac
            placerat vestibulum lectus. Mi ipsum faucibus vitae aliquet nec
            ullamcorper sit. Diam vel quam elementum pulvinar etiam non quam.
            Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
            tristique. Aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae nunc. Pretium lectus quam id leo in. Cursus eget nunc
            scelerisque viverra mauris in aliquam. Egestas integer eget aliquet
            nibh praesent tristique magna. Orci ac auctor augue mauris augue
            neque gravida in. Vel eros donec ac odio tempor.
          </p>
        </div>
        <ProfileFC name={"Dev Function"} />
        <ProfileCC name={"Dev Class"} />
      </section>
    </main>
  );
};

export default About;
