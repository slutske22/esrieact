"use client";

import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), { ssr: false });

export default function Home() {
  return <App />;
}
