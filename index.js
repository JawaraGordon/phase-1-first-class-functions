

// take a callback function as an argument
/* call the callback function
it doesn't matter what this function returns, so long as it calls the callback function
The returnsANamedFunction function should:

take no arguments
return a named function
The returnsAnAnonymousFunction function should:

take no arguments
return an anonymous function */


/* const chai = "chai";
const spies = "chai-spies";
 */

function receivesAFunction(Spy) {
    Spy()
};

function returnsANamedFunction() {
    function healthyFood() {return "Tofu Scramble"}
    return healthyFood;
}


function returnsAnAnonymousFunction() {
    return function () {

    }
}










/* 
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }


  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  }); */
  
  // "Go for a five-mile run"
  // "Stretch! Work that core!"

  //refactor
  /* exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  }); */
  
  // Or even shorter:
  /* exerciseRoutine(() => console.log("Stretch! Work that core!"));

  function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise); */
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
//     return function () {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
//   }

//   const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

// afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }