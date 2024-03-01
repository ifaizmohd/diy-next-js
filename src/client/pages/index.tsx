import React, { FC, useEffect } from "react";
import { getComponent } from "../lib/router/router";

const Home: FC = ({ path, isServer = false }: any) => {
  let Component;
  useEffect(() => {
    const getMatchedComponent = async () => {
      if (typeof window !== "undefined") {
        const pathName = window?.location?.pathname;
        Component = await getComponent(pathName);
        console.log("component ---> ", Component);
      }
    };
    getMatchedComponent();
  }, []);
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
