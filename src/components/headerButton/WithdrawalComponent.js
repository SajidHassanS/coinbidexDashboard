import React from "react";

const WithdrawalComponent = () => {
  return (
    <>
      <div className=" mt-10 flex flex-col items-center  ">
       
    
        <div className="text-3xl font-bold mb-5 ">
          <h1>  2FA Required</h1>
        </div>
        <div className="  text-center " style={{width:"40%"}}>
          <p>
          Enable two-factor authentication in your profile settings to start sending funds
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 py-4 px-24 bg-black-600 text-white-100 rounded-lg my-5 ">
          <button className="     ">Go to Settings</button>
        </div>
      </div>
    </>
  );
};

export default WithdrawalComponent;
