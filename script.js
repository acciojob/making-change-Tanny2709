const makeChange = (c) => {
  c = Number(c); // ensure input is a number

  const result = { q: 0, d: 0, n: 0, p: 0 };

  result.q = Math.floor(c / 25);
  c = c % 25;

  result.d = Math.floor(c / 10);
  c = c % 10;

  result.n = Math.floor(c / 5);
  c = c % 5;

  result.p = c;

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
