function factorial(n) {
  // ваш код...
  let x = 1;
  while (n) {
    x *= n--;
  }
  return x;
}
