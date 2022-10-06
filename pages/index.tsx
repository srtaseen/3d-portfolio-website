import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Scroll from "../components/Scroll";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>3D Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scroll />
    </div>
  );
};

export default Home;
