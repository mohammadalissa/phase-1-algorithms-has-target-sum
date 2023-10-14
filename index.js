function hasTargetSum(array, target) {
  let indexOfi = 0;
  for (i of array){
    indexOfi+=1;
    let indexOfii = 0;
    for (ii of array){
      indexOfii+=1;
      if(indexOfi!==indexOfii){
      if (i+ii===target){
        // console.log(i,ii,target)
        return true
      }
    }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  O(n²)
*/

/* 
  iterate over the array of numbers
        iterate over the array of numbers
            check if the sum of two iterated items equals target
                return true
            else
                return false    

*/

/*
  Add written explanation of your solution here
  a function that make a for loop of array then it makes another for loop to check the current loop with other loop item then return true and if condition is never met then it return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
