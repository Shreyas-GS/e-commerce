import React from 'react'
import {Stepper,Step,StepLabel} from '@mui/material'
const steps = ['Order Placed','Order Confirmed','Shipped','Out For Delivery',"Delivered"]
const OrderTracking = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
           { steps.map((label)=><Step>
            <StepLabel sx={{color:"#9145FD"}}>{label}</StepLabel>
           </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracking