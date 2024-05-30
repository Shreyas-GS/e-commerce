import React from "react";
import Cartitem from "./Cartitem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = ()=>{
    navigate('/checkout?step=2')
  }
  return (
    <div>
      <div className="lg:grid grid-cols-3 mt-6 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><Cartitem />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <div className="px-5">
              <p className="uppercase opacity-60 pb-4 font-bold mt-2">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>Rs.999</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className=" text-green-600">Rs.0</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery charges</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-extrabold text-black">
                  <span>Total</span>
                  <span>Rs.999</span>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <Button
              onClick={handleCheckout}
                variant="contained"
                className="w-full "
                sx={{ px: "2.5rem", py: "1rem", bgcolor: "RGB(74, 42, 201)" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
