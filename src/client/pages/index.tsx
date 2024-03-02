import React, { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <h3>Hi I'm Home component</h3>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  console.log("calling get server side props on server!!!");
  return { props: { message: "Hello World" } };
}
