// "use client";
// import React,{useState} from "react";
// import Layout from "../../components/Layout";

// import { TbWorld } from "react-icons/tb";

// import { FaRegMoon, FaRegBell, FaRegUser } from "react-icons/fa";
// import { FiArrowRight } from "react-icons/fi";

// import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
// import { LuArrowRightLeft } from "react-icons/lu";
// import { GoArrowDownLeft } from "react-icons/go";
// import { GoArrowUpRight } from "react-icons/go";
// import DropdownTransaction from "@/components/dropdownButton/DropdownTransaction";
// import DropdownPeriod from "@/components/dropdownButton/DropdownPeriod";
// import SearchInput from "@/components/dropdownButton/SearchInput";
// import DownloadButton from "@/components/dropdownButton/Download";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";
// import ReceiveComponent from "../../components/headerButton/receive/ReceiveComponent";
// import WithdrawalComponent from "../../components/headerButton/WithdrawalComponent";
// import TransferComponent from "../../components/headerButton/transfer/TransferComponent";
// import ConvertComponent from "../../components/headerButton/convert/ConvertComponent";

// const Page = () => {
  
//   const [activeButton, setActiveButton] = useState("dashboard");

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const renderComponent = () => {
//     switch (activeButton) {
//       case "Receive":
//         return <ReceiveComponent />;
//       case "Withdrawal":
//         return <WithdrawalComponent />;
//       case "Transfer":
//         return <TransferComponent />;
//       case "Convert":
//         return <ConvertComponent />;
//       default:
//         return (
//           <>
//             <div className="flex p-8 justify-between border-b border-gray-400">
//            <div className=" flex gap-4">
//              <div className="w-30">
//                <DropdownTransaction />
//              </div>
//              <div className="w-30">
//                <DropdownPeriod />
//              </div>
//            </div>
//            <div className="flex gap-3">
//              <div>
//                <SearchInput />
//              </div>
//              <div>
//                <DownloadButton />
//              </div>
//            </div>
//          </div>
//           <div className=" w-80 mx-auto flex flex-col justify-center items-center mt-12">
//             <div className="text-2xl font-bold">
//               <h1>No transactions yet</h1>
//             </div>
//             <div className="text-center py-3">
//               <p>
//                 Create your first merchant and start accepting cryptocurrency
//                 payments for your business
//               </p>
//             </div>
//             <div className="bg-blue-800 font-bold text-white-500 w-100 px-20 py-5 rounded-lg">
//               <button>Get address</button>
//             </div>
//           </div>
         
//          </>
//         );
//     }
//   };
  
//   return (
//     <Layout>
//       {/* Your dashboard content */}
//       <>
//         <div className=" bg-blue-200 rounded-b-large  ">
//           <header className="  text-white md:px-10 md:pb-10 md:pt-10  ">
//             {/* Left side: CRMS */}
//             <div className=" flex justify-between">
//               <div>
//                 <span className="text-xl font-bold">Dashboard</span>
//               </div>

//               {/* Right side: Icons */}
//               <div className="flex items-center">
//                 <div className="bg-white-500  p-3 mr-3 rounded-full">
//                   <FaRegMoon className=" cursor-pointer  " size={20} />
//                 </div>

//                 <div className="bg-white-500  p-3 mr-3 rounded-full">
//                   <FaRegBell className=" cursor-pointer  " size={20} />
//                 </div>

//                 <div className="bg-white-500  p-3 mr-3 rounded-full">
//                   <TbWorld className=" cursor-pointer  " size={20} />
//                 </div>

//                 <div className="bg-white-500  p-3 mr-3 rounded-full">
//                   <FaRegUser className=" cursor-pointer  " size={20} />
//                 </div>
//                 <div className="bg-white-500 md:hidden  p-3 mr-3 rounded-full">
//                   <HiMenuAlt4 className=" cursor-pointer  " size={20} />
//                 </div>
//                 <div className="bg-white-500 md:hidden  p-3 mr-3 rounded-full">
//                   <RxCross2 className=" cursor-pointer  " size={20} />
//                 </div>
//               </div>
//             </div>

//             {/* Second row: Available Balance */}
//             <div className="md:my-10">
//               <span className="block">Available Balance</span>
//               <span className="block font-bold text-4xl">$0.0</span>
//             </div>

//             {/* Third row: Withdrawal button */}
//             <div className="flex gap-6 items-center">
//               <button className={`bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex 
//               justify-between items-center `}  onClick={() => handleButtonClick("Receive")}>
//                 Receive
//                 <span className="bg-white-200 p-3 rounded-full">
//                   <GoArrowUpRight className="" />
//                 </span>
//               </button>
//               <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex 
//               justify-between items-center"   onClick={() => handleButtonClick("Withdrawal")}>
//                 Withdrawal
//                 <span className="bg-white-200 p-3 rounded-full">
//                   <GoArrowDownLeft className="" />
//                 </span>
//               </button>
//               <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge
//                flex justify-between items-center" onClick={() => handleButtonClick("Transfer")}>
//                 Transfer
//                 <span className="bg-white-200 p-3 rounded-full">
//                   <LuArrowRightLeft className="" />
//                 </span>
//               </button>
//               <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge
//                flex justify-between items-center"   onClick={() => handleButtonClick("Convert")}>
//                 Convert
//                 <span className="bg-white-200 p-3 rounded-full">
//                   <PiArrowsCounterClockwiseBold className="" />
//                 </span>
//               </button>
//             </div>
//           </header>
//         </div>
       

       

//         {renderComponent()}
//       </>
//     </Layout>
//   );
// };

// export default Page;
