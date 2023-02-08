import { useState } from "react";

const Profile = (props) => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2>Profile section - {props.name} </h2>
      <div>count: {count}</div>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Profile;
