// Question No 2
// let personName :string ='Noor';
// console.log('hello' , personName, "would you like to learn AI course?");
// Question No 3
// let personName = "Noor Ul Ain";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()))
// Question No 4
// const quote: string = "Nothing is impossible. The word itself says I'm possible!";
// const author: string = "Audrey Hepburn";
// console.log(`${author} once said, "${quote}"`);
// Question No 5 
// const famous_person: string = "Mahatma Gandhi";
// const quote: string = "The best way to find yourself is to lose yourself in the service of others.";
// const message: string = `${famous_person} once said, "${quote}"`;
// console.log(message);
// question No 6
// let personNameWithWhitespace: string = "\t\n   Noor ul Ain   \n\t";
// console.log("Name with whitespace:", personNameWithWhitespace);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);
// console.log("Addition:", 5 + 3);
// console.log("Subtraction:", 10 - 2);
// console.log("Multiplication:", 4 * 2);
// console.log("Division:", 16 / 2);
// Answer No 8
// let result1: number = 5 + 3; // Addition
// let result2: number = 10 - 2; // Subtraction
// let result3: number = 4 * 2; // Multiplication
// let result4: number = 16 / 2; // Division
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// Answer No 9 
// let favoriteNumber: number = 4;
// let message: string = `My favorite number is ${favoriteNumber}.`;
// console.log(message);
// Answer No 10
// Program by: [Noor Ul Ain]
// Date: [25 feb of 2024]
// This program prints out a famous quote along with its author.
// const quote: string = "Nothing is impossible. The word itself says 'I'm possible!";
// const author: string = "Audrey Hepburn";
// console.log(`${author} once said, "${quote}"`);
// Program by: [Noor Ul Ain]
// Date: [25 feb 2024]
// This program demonstrates how to strip leading and trailing whitespace from a person's name.
// let personNameWithWhitespace: string = "\t\n   Noor   \n\t";
// console.log("Name with whitespace:", personNameWithWhitespace);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log("Stripped name:", strippedName);
// // Answer No 11
// let names: string[] = ["Areesha", "Anusha", "Rimsha", "Minhal"];
// console.log("My friends' names:");
// for (let i = 0; i < names.length; i++) {console.log(names[i]);}
// Answer no 12
// let names: string[] = [ "minhal", "anusha", "areesha", "rimsha"];
// console.log("Greetings to my friends:");
// for (let i = 0; i < names.length; i++) {console.log(`Hello ${names[i]}, I hope you're doing well!`);}
// Answer No 11
// let modesOfTransportation: string[] = ["Tesla Model S", "BMW M3", "Harley Davidson Iron 883", "Boeing 787 Dreamliner"];
// console.log("My favorite modes of transportation:");
// for (let i = 0; i < modesOfTransportation.length; i++) {console.log(`I would like to own a ${modesOfTransportation[i]}.`);}
// // Answer No 12
// let guestList: string[] = ["Areesha", "Anusha", "Minhal", "Halar"];
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {console.log(`Dear ${guestList[i]}, you are cordially invited to dinner tonight. Please join us at 7:00 PM.`);}
// Answer no 13
// let guestList: string[] = ["Areesha", "Anusha", "Minhal", "Halar"];
// let guestWhoCantMakeIt: string = "Minhal";
// console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);
// let indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);
// if (indexOfGuestWhoCantMakeIt !== -1) {guestList[indexOfGuestWhoCantMakeIt] = "Rimsha";}
// console.log("\nSecond Set of Invitation Messages:");
// for (let i = 0; i < guestList.length; i++) {console.log(`Dear ${guestList[i]}, you are cordially invited to dinner tonight. Please join us at 7:00 PM.`);}
// Answer No 14
// let guestList: string[] = ["Areesha", "Anusha", "Minhal", "Halar", "Rimsha"];
// console.log("Great news! We found a bigger dinner table.");
// guestList.unshift("hasnain");
// guestList.splice(Math.floor(guestList.length / 2), 0, "maya");
// guestList.push("noor");
// console.log("\nNew Invitation Messages:");
// for (let i = 0; i < guestList.length; i++) {console.log(`Dear ${guestList[i]}, you are cordially invited to dinner tonight. Please join us at 7:00 PM.`);}
// Answer no 15
// let guestList: string[] = ["maya", "Areesha", "Anusha", "noor", "Minhal", "Halar", "Rimsha", "hasnain"];
// console.log("Apologies! Due to unforeseen circumstances, we can only invite two people for dinner.");
// while (guestList.length > 2) {let removedGuest: string = guestList.pop();console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);}
// console.log("\nInvitation Messages to Remaining Guests:");
// for (let i = 0; i < guestList.length; i++) {console.log(`Dear ${guestList[i]}, you are still invited to dinner tonight. Please join us at 7:00 PM.`);}
// guestList.splice(0);
// console.log("\nEmpty Guest List:");
// console.log(guestList);
// Answer no 16
// let placesToVisit: string[] = ["Singapore", "Pakistan", "India", "Thailand", "China", "Australia", "Japan"];
// console.log("Original Order:");
// console.log(placesToVisit);
// console.log("\nAlphabetical Order:");
// console.log([...placesToVisit].sort());
// console.log("\nStill in Original Order:");
// console.log(placesToVisit);
// console.log("\nReverse Alphabetical Order:");
// console.log([...placesToVisit].sort().reverse());
// console.log("\nStill in Original Order:");
// console.log(placesToVisit);
// placesToVisit.reverse();
// console.log("\nReversed Order:");
// console.log(placesToVisit);
// placesToVisit.reverse();
// console.log("\nBack to Original Order:");
// console.log(placesToVisit);
// placesToVisit.sort();
// console.log("\nSorted in Alphabetical Order:");
// console.log(placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("\nSorted in Reverse Alphabetical Order:");
// console.log(placesToVisit);
// Answer no 19
// let guestList: string[] = ["Areesha", "Anusha", "Minhal", "Halar"];
// console.log(`Number of people invited to dinner: ${guestList.length}`);
// console.log("Dinner Invitation:");
// for (let i = 0; i < guestList.length; i++) {console.log(`Dear ${guestList[i]}, you are cordially invited to dinner tonight. Please join us at 7:00 PM.`);}
// Answer no 20
// let countries: string[] = ["USA", "Canada", "Brazil", "India", "China", "Japan"];
// console.log("List of Countries:");
// console.log(countries);
// answer no 21
// let car1 = {brand: "Toyota",model: "Camry",year: 2022};
// let car2 = { brand: "Honda",model: "Civic",  year: 2023};
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);
// answer no 22
// let colors: string[] = ["red", "green", "blue"];
// console.log(colors[3]); 
// answer no 23
// let number = 10;
// console.log("Is number == 10? I predict True.");
// console.log(number == 10);
// console.log("Is number != 5? I predict True.");
// console.log(number != 5);
// console.log("Is number > 5? I predict True.");
// console.log(number > 5);
// console.log("Is number <= 20? I predict True.");
// console.log(number <= 20);
// console.log("Is number !== 15? I predict True.");
// console.log(number !== 15);
// console.log("Is number == 5? I predict False.");
// console.log(number == 5);
// console.log("Is number > 20? I predict False.");
// console.log(number > 20);
// console.log("Is number < 0? I predict False.");
// console.log(number < 0);
// console.log("Is number = 9? I predict False.");
// console.log(number = 10 ); 
// console.log("Is number <= 8? I predict False.");
// console.log(number <= 8);
// Answer no 24
// let string1: string = "hello";
// let string2: string = "world";
// console.log("Equality test with strings: ", string1 == "hello");
// console.log("Inequality test with strings: ", string2 != "hello");
// let lowercaseString: string = "Hello";
// console.log("Lowercase test: ", lowercaseString.toLowerCase() == "hello");
// let num1: number = 10;
// let num2: number = 5;
// console.log("Equality test with numbers: ", num1 == 10);
// console.log("Inequality test with numbers: ", num2 != 10);
// console.log("Greater than test: ", num1 > num2);
// console.log("Less than test: ", num2 < num1);
// console.log("Greater than or equal to test: ", num1 >= num2);
// console.log("Less than or equal to test: ", num2 <= num1);
// let x: number = 10;
// let y: number = 20;
// console.log("AND operator test: ", x < 15 && y > 15);
// console.log("OR operator test: ", x )
// Answer no 25 
// let alien_color: string = 'green';
// if (alien_color === 'green') {console.log("The player just earned 5 points.");}
// let alien_color1: string = 'yellow';
// if (alien_color === 'green') {console.log("The player just earned 5 points.");}
// Answer no 26
// let alien_color: string = 'green';
// if (alien_color === 'green')
//     {console.log("The player just earned 5 points for shooting the alien.");} else {console.log("The player just earned 10 points.");}
// let alien_color1: string = 'red';
// if (alien_color1 === 'green')
// {console.log("The player just earned 5 points for shooting the alien.");} else {console.log("The player just earned 10 points.");}
// Answer no 27
// Version for green alien
// let alien_color: string = 'green';
// if (alien_color === 'green')
//     {console.log("The player earned 5 points.");} else if (alien_color === 'yellow') 
//     {console.log("The player earned 10 points.");} else if (alien_color === 'red') 
//     {console.log("The player earned 15 points.");}
// Version for yellow alien
// let alien_color: string = 'yellow';
// if (alien_color === 'green')
//     {console.log("The player earned 5 points.");} else if (alien_color === 'yellow')
//     {console.log("The player earned 10 points.");} else if (alien_color === 'red')
//     {console.log("The player earned 15 points.");}
// Version for red alien
// let alien_color: string = 'red';
// if (alien_color === 'green') 
// {console.log("The player earned 5 points.");} else if (alien_color === 'yellow')
//    { console.log("The player earned 10 points.");} else if (alien_color === 'red') 
// {console.log("The player earned 15 points.");}
// answer no 28 
// let age: number = 25;
// if (age < 2)
//  console.log("The person is a baby.");} else if (age >= 2 && age < 4)
//     console.log("The person is a toddler.");} else if (age >= 4 && age < 13)
//     console.log("The person is a kid.");} else if (age >= 13 && age < 20) 
//     console.log("The person is a teenager.");} else if (age >= 20 && age < 65)
//     console.log("The person is an adult.");} else {console.log("The person is an elder.");}
// Answer no 29
// let favorite_fruits: string[] = ["mango", "pineapple", "papaya"];
// if (favorite_fruits.includes("mango")) {console.log("You really like mangoes!");}
// if (favorite_fruits.includes("pineapple")) {console.log("You really like pineapples!");}
// if (favorite_fruits.includes("papaya")) { console.log("You really like papayas!")}
// if (favorite_fruits.includes("apple")) {console.log("You really like apples!");}
// if (favorite_fruits.includes("banana")) { console.log("You really like bananas!");}
// Answer no 30
// let usernames: string[] = ["admin", "halar", "anusha", "areesha", "noor"];
// for (let username of usernames) 
// if (username === "admin")
//  { console.log("Hello admin, would you like to see a status report?");} else { console.log(`Hello ${username}, thank you for logging in again.`);}
// Answer no 31
// let usernames: string[] = []; // Empty array
// if (usernames.length === 0) {console.log("We need to find some users!");} else {for (let username of usernames)
//      {if (username === "admin") {console.log("Hello admin, would you like to see a status report?");}
//       else {console.log(`Hello ${username}, thank you for logging in again.`);}}}
// Answer no 32
// let current_users: string[] = ["john", "Noor", "rimsha", "anusha", "halar"];
// let new_users: string[] = ["esha", "anusha", "minhal", "Noor", "areesha"];
// for (let new_user of new_users) {
//     let is_taken: boolean = false;
//     for (let current_user of current_users) {
//         if (new_user.toLowerCase() === current_user.toLowerCase()) {
//             is_taken = true;
//             break;
//         }
//     }
//     if (is_taken) {
//         console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations, ${new_user} is available!`);
//     }
// }
// Answer no 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) 
// {if (number === 1) 
//     {console.log(`${number}st`);}
//     else if (number === 2)
//         {console.log(`${number}nd`);}
//     else if (number === 3) {
//         console.log(`${number}rd`);
//     } else {
//         console.log(`${number}th`);}}
// Answer no 34
// let pizzas: string[] = ["Arabic ranch", "fajita", "Tikka"];
// for (let pizza of pizzas) 
// {console.log(`I like ${pizza} pizza.`);}
// console.log("I really love pizza!");
// Answer no 35
// let animals: string[] = ["Dog", "Cat", "Rabbit"];
// for (let animal of animals) 
// {console.log(`A ${animal.toLowerCase()} would make a great pet.`);}
// console.log("Any of these animals would make a great pet!");
// Answer no 36
// function make_shirt(size: string, message: string): void { console.log(`The shirt size is ${size} and the message on it is: "${message}".`);}
// make_shirt("Large", "Hello, World!"); // Calling the function
// Answer no 37
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt size is ${size} and the message on it is: "${message}".`);}
// make_shirt(); 
// make_shirt("Medium");
// make_shirt("Small", "Hello, World!");
// Answer no 38
// function describe_city(city: string, country: string = "Pakistan"): void {
//     console.log(`${city} is in ${country}.`);}
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("New York", "USA");
// Answer no 39
// function city_country(city: string, country: string): string {return `${city}, ${country}`;}
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Paris", "France"));
// console.log(city_country("New York", "USA"));
// Answer no 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {artist: artist,title: title};
//     if (tracks) { album.tracks = tracks;} return album;}
// console.log(make_album("Ed Sheeran", "Divide"));
// console.log(make_album("Taylor Swift", "1989", 16));
// console.log(make_album("Adele", "21", 12));
// Answer no 41
// function show_magicians(magicians: string[]):void { for (let magician of magicians)
//         {console.log(magician);}}
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Dynamo"];
// show_magicians(magicians);
// Answer no 42
// function make_great(magicians: string[]): string[] {
//     for (let i = 0; i < magicians.length; i++)
//        {magicians[i] = `the Great ${magicians[i]}`;}return magicians;}
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {console.log(magician);}}
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Dynamo"];
// magicians = make_great(magicians);
// show_magicians(magicians);
// Answer no 43
// function make_great(magicians: string[]): string[] 
//     {let great_magicians: string[] = [];
//     for (let magician of magicians) 
//         {great_magicians.push(`the Great ${magician}`);} return great_magicians;}
// function show_magicians(magicians: string[]): void {for (let magician of magicians)
//         {console.log(magician);}}
// let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller", "Dynamo"];
// let great_magicians: string[] = make_great(magicians.slice());
// console.log("Original Magicians:");
// show_magicians(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(great_magicians);
// Answer no 44
// function make_sandwich() {
//     var items = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         items[_i] = arguments[_i];
//     }
//     console.log("Making a sandwich with the following items:");
//     for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
//         var item = items_1[_a];
//         console.log("- " + item);
//     }
//     console.log("Sandwich is ready!\n");
// }
// make_sandwich("mayo", "cheese");
// make_sandwich("turkey", "lettuce", "tomato", "mayo");
// make_sandwich("chicken", "swiss", "mustard");

// Answer no 45 
function create_car(manufacturer: string, model: {}, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
    let car: { manufacturer: string, model: {}}, options: { [key: string]: any } } = 
        {manufacturer: manufacturer,
        model: model,
        options: {}
    };

    for (let option of options) {
        let key = Object.keys(option)[0];
        car.options[key] = option[key];}return car;}
let my_car = create_car("Toyota", "Corolla", { color: "blue" }, { sunroof: true });
console.log(my_car);

