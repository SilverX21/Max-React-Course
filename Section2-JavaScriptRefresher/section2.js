//Understanding Classes

class Human {
  gender = "male";

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = "Araújo";
  gender = "male";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

//Spread and Rest Operator
const person1 = {
  name: "Araújo",
};

//ao fazer ...person, como temos em baixo, estou a dizer que vou pegar nas propriedades todas do objeto "person"
//e colocar no objeto newPerson
const newPerson1 = {
  ...person1,
  age: 27,
};

console.log(newPerson1.name);

//podemos usar o spread em parametros de funções para dizer que se aceita parametros infinitos
//O filter é um método para arrays
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3, 4, 5, 6));

//Destructuring

//podemos fazer destructuring de arrays da seguinte forma:
const numbers1 = [1, 2, 3, 4, 5];
//em baixo, estamos a pegar nas posições dos arrays, basicamente pegamos no 1º e 3º,
//onde deixamos um espaço vazio para o segundo, pois este não queremos utilizar
[num1, , num2] = numbers;
console.log(num1, num2);

//reference and primitive types

const person2 = {
  name: "John",
};

//se quisermos copiar um objeto para outro, a melhor forma de o fazer é ao utilizar
//o spred operator, porque assim copias as propriedades e não a referência do objeto
//na memória, que é o que acontece se tivessemos usado: const secondPerson = person2;
const secondPerson = {
  ...person2,
};

person2.name = "James Hetfield";
console.log(secondPerson);
