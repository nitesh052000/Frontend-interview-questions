import {useEffect, useRef, useState} from "react";

type Step = {
    name:string;
    Component:React.ComponentType;
}

type CheckoutStepperProps = {
    checkout?:Step[];
}

const CheckoutStepper:React.FC<CheckoutStepperProps> =({checkout = []}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef<Array<HTMLDivElement | null>>([]);
  
useEffect(() => {
  const firstStep = stepRef.current[0];
  const lastStep = stepRef.current[checkout.length - 1];

  if (firstStep && lastStep) {
    setMargins({
      marginLeft: firstStep.offsetWidth / 2,
      marginRight: lastStep.offsetWidth / 2,
    });
  }
}, [checkout.length]);
  if (!checkout.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === checkout.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (checkout.length - 1)) * 100;
  };

  const ActiveComponent = checkout[currentStep - 1]?.Component;

  return (
    <>
      <div className="stepper">
        {checkout.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""} `}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progress-bar"
          style={{
            width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{width: `${calculateProgressBarWidth()}%`}}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === checkout.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;