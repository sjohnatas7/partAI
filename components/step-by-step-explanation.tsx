"use client"
import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel, StepContent, Paper, Button } from '@mui/material';

const steps = [
  {
    label: 'Step 1: Initial Consultation',
    description: `We start with an initial consultation to understand your business needs and automation requirements. This helps us tailor our solutions to your specific goals.`,
  },
  {
    label: 'Step 2: Feasibility Study',
    description: `We conduct a feasibility study to assess the potential impact of automation on your business processes. This includes analyzing workflows, identifying bottlenecks, and estimating ROI.`,
  },
  {
    label: 'Step 3: Proposal and Planning',
    description: `Based on the feasibility study, we present a detailed proposal outlining the automation strategy, technology stack, timeline, and costs. Once approved, we move to the planning phase.`,
  },
];

const StepByStepExplanation = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        How Our AI Automation Agency Works
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={activeStep === steps.length - 1}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Container>
  );
};

export default StepByStepExplanation;
