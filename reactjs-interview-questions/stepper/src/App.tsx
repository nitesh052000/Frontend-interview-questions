import "./App.css"
import Stepper from "./components/Stepper"

function App() {
 
  const CHECKOUT_STEPS = [
    {
      name:"Customer Info",
      Component: () => <div>Provide your contact details.</div>
    },
    {
      name:"Shipping Info",
      Component: () => <div>Enter your shipping address.</div>
    },
    {
      name:"Payment",
      Component: () => <div>Complete your payment.</div>
    },
    {
      name:"Delivered",
      Component: () => <div>Your order has been delivered.</div>
    }
  ]

  return (
  <div>
    <h1>Checkout</h1>
    <Stepper checkout ={CHECKOUT_STEPS} />
  </div>
  )
}

export default App
