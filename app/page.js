import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import ChatCards from "./components/ChatCards";

export default function Home() {

  
  return (
    <div className="flex w-full ">
      <Wrapper/>
      <main className="w-full flex flex-col">
        <Navbar />

        <div className="m-auto">

          <div className="chatpage border m-auto">
            <ChatCards/>
          </div>

        </div>
          <div className="serachbar flex flex-col items-center">
            <Search />
            <Footer />
          </div>
      </main>

    </div>
  );
}
