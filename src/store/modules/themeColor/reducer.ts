export const changeColor = (state: boolean = false, action: {type: string, value: boolean}) => {
    switch (action.type) {
        case "Switch":
            return action.value;
        default:
            return state;
    }
};
