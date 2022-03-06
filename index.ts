interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "lodo",
  age: 22,
  gender: "male",
};

const name = "Nico",
  age = 24,
  gender = "male";

const sayHi = (person) => {
  console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};

console.log(sayHi(person));
export {};
