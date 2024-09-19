// const palabras = ["hello", "world"]; // h = 104, e=101, l =108, o=111

// console.log(
//   palabras.map((palabra) => {
//     const letras = palabra.split("");
//     const numeros = letras.map((letra) => letra.charCodeAt(0));
//     console.log(numeros);

//     return numeros.reduce((acomulador, current) => {
//       return acomulador + current;
//     }, 0);
//   })
// );

// const numeros = [104, 101, 108, 108, 111];
// const elMenor = numeros.reduce((acc, current) => {
//   return acc < current ? acc : current;
// });

// console.log(elMenor);

// const a = ["hello", "world", "Im", "Melanie", "Cool", "Im"];

// const palabraFiltrada = a.filter((palabra) => palabra == "Im");
// console.log(palabraFiltrada);

// // sin reduce
// const sinReduce = a.join(" ");

// // con reduce
// const conReduce = a.reduce((acc, current) => {
//   return acc + " " + current;
// });

// console.log(conReduce);

console.clear();
class Stack<T> {
  private data: T[] = [];
  private size: number = 0;

  push(element: T) {
    this.data[this.size++] = element;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.data[--this.size];
    }
  }
}

function validateExpression(expression: string): boolean {
  const stack = new Stack<string>();
  const chars = expression.split("");
  let isValid = true;
  for (const c of chars) {
    switch (c) {
      case "(":
      case "{":
      case "[":
        stack.push(c);
        break;
      case ")": {
        const current = stack.pop();
        if (current !== "(") {
          isValid = false;
        }
        break;
      }
      case "}": {
        const current = stack.pop();
        if (current !== "{") {
          isValid = false;
        }
        break;
      }
      case "]": {
        const current = stack.pop();
        if (current !== "[") {
          isValid = false;
        }
        break;
      }
    }
  }
  return isValid;
}

console.log(validateExpression("{[)a(]})"));
console.log(validateExpression("{a}"));
console.log(validateExpression("{(a)"));
