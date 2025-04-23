import { useState } from "react";

export default function CheckOut() {
  const [selected, setSelected] = useState("e-money");

  return (
    <form className="bg-[#F1F1F1] flex justify-center h-[1084px]">
      <div className="mt-20 flex flex-col gap-6">
        <p className="uppercase text-black opacity-50 cursor-pointer">
          Go Back
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-white lg:w-[730px] rounded-lg p-8">
            <h1 className="uppercase text-2xl font-bold mb-4">Checkout</h1>

            <p className="uppercase text-orange-500 font-semibold mb-6">
              Billing Details
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-black font-bold mb-2">Name</p>
                    <input
                      type="text"
                      placeholder="Alexei Ward"
                      className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                    />
                  </div>
                  <div>
                    <p className="text-black font-bold mb-2">Phone Number</p>
                    <input
                      type="text"
                      placeholder="+1 202-555-0136"
                      className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-black font-bold mb-2">Email Address</p>
                  <input
                    type="text"
                    placeholder="alexeiward@mail.com"
                    className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                  />
                </div>
              </div>
            </div>

            <p className="uppercase text-orange-500 font-semibold mt-16">
              shipping info
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div>
                <p className="text-black font-bold mb-2">Your Address</p>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  className="border-2 border-[#CFCFCF] rounded-lg lg:w-[40.1rem] h-[56px] pl-4 text-black"
                />
              </div>
              <div className="lg:flex lg:gap-6">
                <div>
                  <p className="text-black font-bold mb-2">ZIP Code</p>
                  <input
                    type="number"
                    placeholder="10001"
                    className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                  />
                </div>
                <div>
                  <p className="text-black font-bold mb-2">City</p>
                  <input
                    type="text"
                    placeholder="New York"
                    className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                  />
                </div>
              </div>
              <div>
                <p className="text-black font-bold mb-2">Country</p>
                <input
                  type="text"
                  placeholder="United States"
                  className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
                />
              </div>
            </div>
            <p className="uppercase text-orange-500 font-semibold mt-16">
              payment details
            </p>
            <div className="mt-6 flex justify-around">
              <p>Payment Method</p>
              <div>
                <label
                  className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer transition-colors w-[309px] ${
                    selected === "e-Money"
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="e-Money"
                    checked={selected === "e-Money"}
                    onChange={() => setSelected("e-Money")}
                    className="form-radio accent-orange-500"
                  />
                  <span className="font-semibold">e-Money</span>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer transition-colors w-[309px] ${
                    selected === "Cash on Delivery"
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={selected === "Cash on Delivery"}
                    onChange={() => setSelected("Cash on Delivery")}
                    className="form-radio accent-orange-500"
                  />
                  <span className="font-semibold">Cash on Delivery</span>
                </label>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-black font-bold mb-2">Country</p>
              <input
                type="text"
                placeholder="United States"
                className="border-2 border-[#CFCFCF] rounded-lg w-[19.3rem] h-[56px] pl-4 text-black"
              />
            </div>
          </div>
          <div className="bg-white lg:w-[350px] h-[612px] rounded-lg"></div>
        </div>
      </div>
    </form>
  );
}
