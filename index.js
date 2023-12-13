// code your solution here


function saturdayFun (activity) {
   return (`This Saturday, I want to ${activity}!`)
}
saturdayFun("bathe my dog")

function saturdayFun (activity ="roller-skate") {
   return (`This Saturday, I want to ${activity}!`);
}



function mondayWork (activity = "go to the office") {
   return (`This Monday, I will ${activity}.`);
}
mondayWork();

function wrapAdjective(flair = "*") {
   let adjective = "a hard worker";
   return function(adjective) {
       return `You are ${flair}${adjective}${flair}!`;
   };
}

function wrapAdjective(flair = "||") {
   let adjective = "a dedicated programmer"
   return function(adjective) {
       return `You are ${flair}${adjective}${flair}!`;
   };
}
