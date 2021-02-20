import CircularProgress, {CircularProgressProps} from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
import {Box, Typography} from "@material-ui/core";
import React from "react";

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;
