// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((value, index)=> {
    if (value === "Waldo") {
      found(index);   // execute callback
    }
  })
}


function actionWhenFound(index) {
  console.log("Found Waldo at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
var array1 = ["Alice", "Bob", "Waldo", "Winston"];
// array1.forEach((value, index)=> {
  // console.log(value, index);
// });