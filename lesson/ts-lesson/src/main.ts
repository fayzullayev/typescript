// let myName: string | null;
//
// myName = "Mirodil";
//
// console.log(myName);
//
// myName = null;
//
// console.log(myName);

// let items: string[] | null = ["Mirodil", "Qwerty"];
// let items2 = ["Mirodil", 3];

// type Account = {
//   name: string;
//   balance: number;
// };

interface Account {
  name: string;
  balance: number;
  deposit: () => void;
}

// const account2: Account = {
//   name: "John",
//   balance: 10,
// };
//
// const account: Account = {
//   name: "John",
//   balance: 10,
//   account: account2,
// };
//
// console.log("account:", account);

class Human implements Account {
  constructor(public name: string, public balance: number) {}

  deposit(): void {}
}
