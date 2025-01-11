function seqFib(num) {
    let a = 0, b = 1;
    while (b <= num) {
      if (b === num) return true;
      [a, b] = [b, a + b];
    }
    return false;
  }
  
  const numero = parseInt(prompt("Digite um número:"));
  if (seqFib(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }