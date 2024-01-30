// 인터페이스 : 객체의 구조를 정의, 객체가 어떻게 구성되어야할지 정의
// 인터페이스가 필요한 이유 : 인터페이스를 사용하면 객체 구조를 정의하고자 한다는게 더 명확하다, 클래스 안에 인터페이스 구현 가능

// type AddFn = (a: number, b: number) => number;
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// interface Named {
//   readonly name?: string;
//   outputName?: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// type Greetable = {
//   name: string;

//   greet(phrase: string): void;
// };

// class Person implements Greetable {
//   name?: string;
//   age = 30;

//   constructor(n?: string) {
//     if (n) {
//       this.name = n;
//     }
//   }

//   greet(phrase: string) {
//     if (this.name) {
//       console.log(phrase + " " + this.name);
//     } else {
//       console.log("Hi!");
//     }
//   }
// }

// let user1: Greetable;

// user1 = new Person();
// // user1.name = "Manu";

// user1.greet("Hi there - I am");
// console.log(user1);
