// code your solution here

//1 
//function called saturdayFun
//return string
//pass activity as parameter
//default roller-skate

function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
saturdayFun(activity)

//2
//f expression called mondayWork
//return a string
//activity in parameter
//default activity = go to the office

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}
mondayWork(activity)






























// function saturdayFun(activity = 'roller-skate') {
//     return (`This Saturday, I want to ${activity}!`)
// }
// //WHY default? doesn't this make it fixed and unmalleable?
//  console.log(saturdayFun("dog"));

// /*Implement a function called `saturdayFun`:

// - It should define a function.
// - It uses a default argument, `'roller-skate'` when no arguments are passed.
//   - It allows the default argument to be overridden.
// */

// function mondayWork(work = `go to the office`) {
//     return (`This Monday, I will ${work}.`)
// }

// /* Implement a function called `mondayWork`:

// - It should define a function.
// - It uses a default argument, `'go to the office'` when no arguments are passed.
//   - It allows the default argument to be overridden. */



// function wrapAdjective(visualFlare = `*`) {   /*Implement a function called `wrapAdjective` & parameter a `String` visual flair.*/
//     return function(param1 = `special`) {   /*return a function. "inner" function w. 1param that  default to `"special"`.*/
//         return (`You are ${visualFlare}${param1}${visualFlare}!`)

//     }
// }
//WHAT is a visual flare?!!!

/*Implement a function called `wrapAdjective`:

- It should return a function. This "inner" function should:
  - take a single parameter that should default to `"special"`. Name it
    however you wish.

  - return a `String` of the form "You are ...!" where `...` should be the
    adjective this function received wrapped in visual flair.
- It should take as parameter a `String` that will be used to create visual flair.
- You may call the parameter whatever you like, but its default value should
  be `"*"`.
- Call example: `const encouragingPromptFunction = wrapAdjective("!!!")` */







//saturdayFun = () => `This Saturday, I want to bathe my dog!`

/*const saturdayFun = function () {
    console.log(`This Saturday, I want to bathe my dog!`);
}; */

/*if (saturdayFun("dog")) {
    `This Saturday, I want to bathe my dog!`
} else {
    `This Saturday, I want to roller-skate!`
}
*/


 /*switch (saturdayFun) {
    case `dog`:
        saturdayFun = `This Saturday, I want to bathe my dog!`
    break;
    default:
        saturdayFun = `This Saturday, I want to roller-skate!`
}
console.log(saturdayFun); */

/*switch (saturdayFun) {
    case `dog`:
        console.log(`This Saturday, I want to bathe my dog!`)
    break;
    default:
        console.log(`This Saturday, I want to roller-skate!`)
}
 */


/*Implement a function called `saturdayFun`:

- It should define a function.
- It uses a default argument, `'roller-skate'` when no arguments are passed.
  - It allows the default argument to be overridden.

Implement a function called `mondayWork`:

- It should define a function.
- It uses a default argument, `'go to the office'` when no arguments are passed.
  - It allows the default argument to be overridden.

Implement a function called `wrapAdjective`:

- It should return a function. This "inner" function should:
  - take a single parameter that should default to `"special"`. Name it
    however you wish.
  - return a `String` of the form "You are ...!" where `...` should be the
    adjective this function received wrapped in visual flair.
- It should take as parameter a `String` that will be used to create visual flair.
- You may call the parameter whatever you like, but its default value should
  be `"*"`.
- Call example: `const encouragingPromptFunction = wrapAdjective("!!!")`

Thus a total call should be:

```js
wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
``` */