/* 
    1. Write a for loop that counts from 0-10. Each time the loop runs, it should invoke a callback function (see step 2).


    2. Declare a function named callback. This function needs to accept a parameter. Inside the function, console.log each number (0-10) from the previously written for loop. Your console should look like the screenshot below.
        - After you've successfully console.logged 0-10 (as pictured above), move on to step 3.

        
    3. Inside of the callback function, write a conditional that checks if the number is even or odd. If the number is even, console.log 'the number is even'. If the number is odd, console.log 'the number is odd'. Your console should now look like the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS



for (let i = 0; i <= 10; i++){
    console.log(i); //If you commented this line out, you will just get the results it is asking for in Step 3. By leaving it in, you will see the results for Step 2 as well. 
    callback(i);
}

function callback(x){
      if(x % 2 === 0){
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}

