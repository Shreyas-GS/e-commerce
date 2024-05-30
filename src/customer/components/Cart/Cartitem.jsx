import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Cartitem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-enter">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSTkvuNPree9crMFO2i-6cHwM6QOuAOFmxunQEhBGdNjryKfizjSl9ZwZKBOmJvD01k5OcLdvK2eAU7c6pgGIyx111dtnbmKCj4EHH-St9to8SrPe-lAyMSjKbQuGhbA6DjKGXayg&usqp=CAc"
          ></img>
        </div>
        <div className="ml-5 space-y-1 mt-3">
          <p className="font-semibold">Men's Baggy t-shirt</p>
          <p className="opacity-70 mt-2">Size:L,Skin</p>
          <p className="opacity-70 mt-3">Seller:Reliance ltd.</p>
          <div className="flex space-x-5 items-center  text-gray-900  pt-3">
            <p className="font-semibold ">Rs.1000</p>
            <p className="opacity-50 line-through">Rs.1000</p>
            <p className="font-semibold text-green-400 ">0% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "darkred" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">4</span>
          <IconButton sx={{ color: "lightgreen" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button
            sx={{ color: "RGB(242, 94, 94)", bgcolor: "RGB(228, 240, 240)" }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
