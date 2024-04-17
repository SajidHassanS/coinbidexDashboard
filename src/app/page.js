import Image from "next/image";
import personalWallet from "./personalWallet/page";
import businessWallet from "./businessWallet/page";

import p2pTrade from "./p2pTrade/page";

export default function Home() {
  return (
    <main className="max-w-screen-2xl   mx-auto ">
    <personalWallet/>
    {/* <businessWallet/>
    <p2pTrade/> */}

    </main>
  );
}
