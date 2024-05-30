import React from 'react'
import AddressCard from "../AddressCard/AddressCard"
import OrderTracking from './OrderTracking';
import { Grid,Box } from '@mui/material';
import StarIcon from "@mui/icons-material/Star";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-6">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20 shadow-md box-border">
        <OrderTracking activeStep={4} />
      </div>
      <div className='space-y-3'>
        {[1, 1, 1, 1].map((item) => (
          <Grid className="space-y-2 hover:shadow-2xl" container>
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border "
              sx={{ justifyContent: "space-between", alignContent: "center" }}
            >
              <Grid item xs={6}>
                <div className="flex cursor-pointer items-center">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3a%2F77%2F3a772d9676510da81684b66f18cc231b8561d654.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
                  />
                  <div className="ml-5 space-y-2">
                    <p>H&M men's hoodies</p>
                    <p className="opacity-50 text-xs font-semibold">
                      Size:M Color:Black
                    </p>
                    <p className="opacity-50 text-xs font-semibold">
                      Seller:Reliance Co
                    </p>
                    <p className="opacity-50 text-xs font-semibold">
                      Price:2999
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate and Review product</span>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default OrderDetails