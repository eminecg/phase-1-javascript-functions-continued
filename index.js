// code your solution here


function saturdayFun( funType ="roller-skate"){
    return `This Saturday, I want to ${funType}!` 
}
function mondayWork(workType ="go to the office"){
    return`This Monday, I will ${workType}.`
}

function wrapAdjective(arg="*"){
    return function(type ="special"){
        return `You are ${arg}${type}${arg}!`
    }
}