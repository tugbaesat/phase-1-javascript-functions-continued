// code your solution here
function saturdayFun(saturdayActivity="roller-skate") {
    return `This Saturday, I want to ${saturdayActivity}!`;
}
function mondayWork(mondayActivity="go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}
function wrapAdjective(wrapper = "*") {
    return function innerFunc(innerValue = "special") {
        return (`You are ${wrapper}${innerValue}${wrapper}!`);
    }
}