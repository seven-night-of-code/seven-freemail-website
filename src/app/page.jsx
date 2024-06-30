import Homes from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return <>
    <Navbar />
    <Homes/>
    <Footer/>
  </>;
}
