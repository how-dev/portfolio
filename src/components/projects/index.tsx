import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import tutorialSteps from "./theProjects";
import {Element} from "react-scroll";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 385,
        width: "90%",
        flexGrow: 1,
        marginTop: 20,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        background: "#3C474B",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        color: "#c0e0de",
        padding: "0 !important",
        justifyContent: "center",
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

interface Props {
    allTheme: any,
    darkTheme: any,
}

const Works: React.FC<Props> = ({ allTheme, darkTheme }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={allTheme.inferiorTitle}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                className={allTheme.inferior}
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
            <Element name={"work"}>
            </Element>
        </div>
    )
}

export default Works
