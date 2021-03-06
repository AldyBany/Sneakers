import React, { useState, useEffect,useContext } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';
import {DataContext} from '../../../contexts/DataContext'

const steps = ['Shipping address', 'Payment details'];

const Checkout = () => {

  const {cart, handleCaptureCheckout, order, errorMessage} = useContext(DataContext)
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isFinished,setIsFinished] = useState(false)
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout = ()=>{
    setTimeout(()=>{
      setIsFinished(true)
    },3000)
  }

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Link  className=".product__rbtn" to="/">Back to home</Link>
    </>
  ) : isFinished ? (
    <>
    <div>
      <Typography variant="h5">Thank you for your purchase!</Typography>
      <Divider className={classes.divider}/>

    </div>
    <br/>
   
    <Link  className=".product__rbtn" to="/">Back to home</Link>
    </>
  ):(
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  if (errorMessage) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {errorMessage   }</Typography>
        <br />
        <Link className=".product__rbtn" to="/">Back to home</Link>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next} />
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={handleCaptureCheckout} timeout={timeout} />);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
