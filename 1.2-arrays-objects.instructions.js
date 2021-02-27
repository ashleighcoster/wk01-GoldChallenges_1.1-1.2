/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let favoriteMovie = {
    nameOfMovie: 'Love and Basketball',
    runTime: "2hr 5m",
    characters: [
       {characterOne: 'Sanaa Lathan', 
       age: 49, items: [
           {herFirstMovie: 'Drive', 
           herLastMovie: 'Native Son'},
           {awardsWon: 7, 
            from: 'NYC'}]},
       {characterTwo: 'Omar Epps', 
       age: 47, items: [
           {hisFirstMovie: 'Juice', 
           hisLastMovie: 'Fatal Affair'}, 
           {awardsWon: 5, 
            from: 'Brooklyn, NY'}]} 
    ]
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters);
console.log(favoriteMovie.characters[0].characterOne);
console.log(favoriteMovie.characters[1].items[0].hisFirstMovie);



