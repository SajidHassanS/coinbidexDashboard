import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import FormModal from "./FormModal";

const coinsData = [
  {
    name: "CBE",
    imageSrc: "/logonew.png",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "AVAX",
    imageSrc: "coin/AVAX.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "BCH",
    imageSrc: "coin/BCH.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "BNB",
    imageSrc: "coin/BNB.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "BTC",
    imageSrc: "coin/BTC.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "CGPT",
    imageSrc: "coin/CGPT.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "DASH",
    imageSrc: "coin/DASH.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  {
    name: "DAI",
    imageSrc: "coin/DAI.svg",
    quantity: "0.0000000",
    value: "$0.00",
  },
  // Add more coin data objects as needed
];

const BalanceWallet = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleFormModal = () => {
    setShowFormModal(!showFormModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">
          <h1>Balances of personal wallets</h1>
        </div>

        <div className="flex gap-3">
          <IoSearch size={25} />
          <FaPlus
            onClick={toggleFormModal}
            style={{ cursor: "pointer" }}
            size={25}
          />
        </div>
      </div>

      <div className="mt-8">
        {/* Map through the coinsData array and render each coin */}
        {coinsData.map((coin, index) => (
          <div
            key={index}
            className="flex justify-between hover:bg-white-100 p-2 rounded-lg"
          >
            <div className="flex gap-3 items-center">
              <Image src={coin.imageSrc} width={40} height={40} />
              <h1>{coin.name}</h1>
            </div>
            <div>
              <p>{coin.quantity}</p>
              <p>{coin.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center p-3 bg-white-100 rounded-lg my-5 ">
        {/* Button to show more coins */}
        {coinsData.length > 7 && (
          <button onClick={toggleModal} className="     ">
            Show More
          </button>
        )}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            {coinsData.slice(7).map((coin, index) => (
              <div
                key={index}
                className="flex justify-between hover:bg-white-100 p-2 rounded-lg"
              >
                <div className="flex gap-3 items-center">
                  <Image src={coin.imageSrc} width={40} height={40} />
                  <h1>{coin.name}</h1>
                </div>
                <div>
                  <p>{coin.quantity}</p>
                  <p>{coin.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Form Modal */}
      {showFormModal && (
        <FormModal onClose={toggleFormModal} />
      )}
    </div>
  );
};

export default BalanceWallet;
