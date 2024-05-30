import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer ">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3a%2F77%2F3a772d9676510da81684b66f18cc231b8561d654.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
            />
            <div className="ml-5 space-y-2">
              <p>H&M men's hoodies</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$999</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-500 mr-2"
                />

                <span>Delivered on March 30</span>
              </p>
              <span className="text-xs">Your item has been delivered</span>
            </div>
          )}
          {false && (
            <p>
              <span>Expectd Delivery on March 30</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
