import { useState } from "react";
import { useCart } from "../context/CartContext";
import ThankYou from "./ThankYou";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type inputs = {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
};

const schema = yup.object({
  name: yup.string().required("Name input must not be empty"),
  email: yup
    .string()
    .email("incorrect email")
    .required("Email input must not be empty"),
  country: yup.string().required("Country input must not be empty"),
  city: yup.string().required("City input must not be empty"),
  address: yup.string().required("Address input must not be empty"),
  zipCode: yup.number(),
  phone: yup.number().required("Phone input must not be empty"),
});
export default function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({ resolver: yupResolver(schema) });

  const [selected, setSelected] = useState("e-money");
  const { cartItems, total } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };
  const onSubmit: SubmitHandler<inputs> = (data) => {
    localStorage.setItem("checkoutData", JSON.stringify(data));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("total", JSON.stringify(total + 50));
    setShowModal(true);
  };
  return (
    <div className="bg-[#F1F1F1] py-20 flex justify-center mt-10  md:items-center md:justify-center">
      <form
        className="flex flex-col items-center justify-center lg:flex-row gap-8 w-full max-w-[1200px] px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="bg-white rounded-lg p-8 lg:w-[730px] md:w-[689px] w-full flex flex-col gap-6">
          <h1 className="uppercase text-2xl font-bold mb-4">Checkout</h1>

          <section>
            <p className="uppercase tracking-[1px] text-orange-500 font-semibold mb-6">
              Billing Details
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-black font-bold mb-2">Name</p>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Alexei Ward"
                      className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[10px] w-[150px]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-black font-bold mb-2">Phone Number</p>
                    <input
                      type="text"
                      {...register("phone")}
                      placeholder="+1 202-555-0136"
                      className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] w-[150px]">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-black font-bold mb-2">Email Address</p>
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="alexeiward@mail.com"
                    className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="uppercase tracking-[1px] text-orange-500 font-semibold mt-8 mb-6">
              Shipping Info
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-black font-bold mb-2">Your Address</p>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                />
                {errors.address && (
                  <p className="text-red-500 text-[10px]">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-black font-bold mb-2">ZIP Code</p>
                  <input
                    type="number"
                    placeholder="10001"
                    className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                  />
                  {errors.zipCode && (
                    <p className="">{errors.zipCode.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-black font-bold mb-2">City</p>
                  <input
                    type="text"
                    {...register("city")}
                    placeholder="New York"
                    className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-[10px]">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-black font-bold mb-2">Country</p>
                <input
                  type="text"
                  {...register("country")}
                  placeholder="United States"
                  className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                />
                {errors.country && (
                  <p className="text-red-500 text-[10px]">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section>
            <p className="uppercase tracking-[1px] text-orange-500 font-semibold mt-8 mb-6">
              Payment Details
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p className="w-40">Payment Method</p>
                <div className="flex flex-col gap-4">
                  <label
                    className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer md:w-[309px] lg:w-[309px] w-[150px]${
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
                      className="accent-orange-500"
                    />
                    <span className="font-semibold">e-Money</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer md:w-[309px] lg:w-[309px] w-[150px]${
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
                      className="accent-orange-500"
                    />
                    <span className="font-semibold">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              {selected === "e-Money" && (
                <div className="flex flex-col lg:flex-row gap-6 mt-4">
                  <div className="flex-1">
                    <p className="text-black font-bold mb-2">e-Money Number</p>
                    <input
                      type="number"
                      placeholder="238521993"
                      className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black "
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-black font-bold mb-2">e-Money PIN</p>
                    <input
                      type="number"
                      placeholder="6891"
                      className="border-2 border-[#CFCFCF] rounded-lg w-full h-[56px] pl-4 text-black"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="bg-white lg:w-[327px] md:w-[250px] w-full rounded-lg p-6 h-fit self-center lg:self-start">
          <h2 className="uppercase font-bold text-xl mb-6">Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.image.mobile}
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm opacity-60">${item.price}</p>
              </div>

              <div className="ml-auto">x{item.quantity}</div>
            </div>
          ))}
          <div className="flex justify-between mt-2 lg:mt-8">
            {" "}
            <p className="text-[#000000] uppercase opacity-50">Total</p>
            <p className="text-[#000000]">${total}</p>
          </div>
          <div className="flex justify-between mt-2 lg:mt-8">
            {" "}
            <p className="text-[#000000] uppercase opacity-50">Shipping</p>
            <p className="text-[#000000]">$50</p>
          </div>
          <div className="flex justify-between mt-2 lg:mt-8">
            {" "}
            <p className="text-[#000000] uppercase opacity-50">Grand Total</p>
            <p className="text-[#000000]">${total + 50}</p>
          </div>
          <button
            type="submit"
            className="mt-6 uppercase text-white bg-[#D87D4A] w-full h-[3rem]"
          >
            Continue & Pay
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <ThankYou onClose={handleCloseModal} />{" "}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
