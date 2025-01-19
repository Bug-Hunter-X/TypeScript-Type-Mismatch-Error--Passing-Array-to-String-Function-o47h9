function greeter(person: string): string {
  return "Hello, " + person;
}

let user = "Jane Doe";
console.log(greeter(user)); // Correct: Now passes a string

//Alternative solution: Modify the function to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let userArray = ["Jane", "Doe"];
console.log(greeterArray(userArray));//Correct: Accepts an array