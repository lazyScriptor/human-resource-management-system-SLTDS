import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmployeeCreateForm from "./EmployeeCreateForm";
import EmployeeAttendanceForm from "./EmployeeAttendanceForm";
import EmployeeResignationForm from "./EmployeeResignationForm";
import EmployeeJobTitleForm from "./EmployeeJobTitleForm";
import axios from "axios";

const steps = [
  "Basic employee Details",
  "Job Titles",
  "Leaves and OT",
  "Documents and Resignation Details",
];

export default function StepperMUI() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formData, setFormData] = React.useState({});

  const handleCreateEmployee = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/employee/create`,
        formData
      );
      console.log("Employee added successfully:", response.data);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };
  React.useEffect(() => {
    console.log("From stepper", formData);
  }, [formData]);
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setFormData({});
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "60%" }}>
      <Stepper nonLinear activeStep={activeStep} sx={{ my: 4 }}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Button onClick={() => handleCreateEmployee(formData)}>
              Create the employee
            </Button>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep + 1 == 1 ? (
              <EmployeeCreateForm
                formData={formData}
                handleNext={handleComplete}
                setFormData={setFormData}
              />
            ) : activeStep + 1 == 2 ? (
              <EmployeeJobTitleForm
                formData={formData}
                handleNext={handleComplete}
                setFormData={setFormData}
              />
            ) : activeStep + 1 == 3 ? (
              <EmployeeAttendanceForm
                formData={formData}
                handleNext={handleComplete}
                setFormData={setFormData}
              />
            ) : (
              <EmployeeResignationForm
                formData={formData}
                handleNext={handleComplete}
                setFormData={setFormData}
              />
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    sx={{
                      display: "inline-block",
                      backgroundColor: (theme) => theme.palette.primary[800],
                    }}
                    variant="caption"
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
