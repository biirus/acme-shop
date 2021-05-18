import { useRouteMatch } from 'react-router';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const steps = ['cart', 'customer', 'shipping', 'billing', 'payment'];

function Progress() {
  const match = useRouteMatch();
  const activeStep = steps.findIndex((step) => match.path.includes(step));

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default Progress;
