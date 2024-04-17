import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { CgArrowsExchangeV } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
const ConvertComponent = () => {

  const dataArray = [
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
    { pair: 'ETH/USDC', value: '3081.57704455' },
  ];

  const [searchText, setSearchText] = useState("");
  const handleChange = (event) => {
    setSearchText(event.target.value); // Update search text when input changes
  };
  return (
    <>
      <div className="p-10  ">
        <div className="flex justify-between items-center  border-b border-white-100 pb-5">
          <div className="text-3xl font-bold">
            <h1>
              Convert <span className=" text-black-500">Spot</span>
            </h1>
          </div>
          <div>
            <button className="p-3 bg-white-100 rounded-lg">Order history</button>
          </div>
        </div>

        <div className="py-5">
          <div className=" flex   gap-10">
            <div className="flex flex-col grow w-96 ">
              <div className="">
                <div className="bg-white-100 pt-5 px-5 pb-3 rounded-lg">
                  <div className="flex  justify-between">
                    <h1>From</h1>
                    <p>0.000000 BNB</p>
                  </div>
                  <div className=" flex gap-3 py-3 items-center">
                    <div className="relative grow h-14 w-14   flex items-center  ">
                      <input
                        type="text"
                        placeholder="Enter amount"
                        className="block w-full px-4 py-5  text-sm rounded-md border outline-none border-gray-400 "
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="pl-2 border p-2 rounded-lg text-gray-500">
                          Convert All
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <Dropdown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-5 justify-center ">
                <div className=" rounded-full p-1 bg-white-100">
                  {" "}
                  <CgArrowsExchangeV size={30} />
                </div>
              </div>
              <div className="">
                <div className="bg-white-100 border-orange-500 pt-5 px-5 pb-3 rounded-lg">
                  <div className="flex  justify-between">
                    <h1>To</h1>
                    <p>0.000000 BNB</p>
                  </div>
                  <div className=" flex gap-3 py-3 items-center">
                    <div className="relative grow h-14 w-14  flex items-center  ">
                      <input
                        type="text"
                        placeholder="Enter amount"
                        className="block w-full px-4 py-5   text-sm rounded-md border outline-none border-gray-400"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="pl-2 border p-2 rounded-lg text-gray-500">
                          Convert All
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <Dropdown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-blue-400 text-white-100 py-5 mt-5 text-center rounded-lg">
                <button>Convert</button>
              </div>
            </div>
            <div className="grow  w-24 rounded-lg border border-white-100 shadow-lg ">
              <div className="px-5 py-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                    placeholder="Search"
                    className="w-full bg-white-100  rounded-md outline-none py-3 pl-10 pr-4 focus:outline-none focus:border-indigo-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex text-sm  px-2 justify-between">
                <p>Pair</p>
                <p>Current rate</p>
              </div>

              <hr className=" text-black-500 mt-3" />
              <div className=" overflow-y-auto h-80 ">
                {dataArray.map((data, index) => (
                  <div key={index} className="flex p-3 justify-between">
                    <h1>{data.pair}</h1>
                    <h1>{data.value}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConvertComponent;
