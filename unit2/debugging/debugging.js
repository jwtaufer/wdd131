const pi = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * pi;
console.log(`Area 1: ${area}`);
radius = 4;
area = radius * radius * pi;
console.log(`Area 2: ${area}`);

const PI = 3.14;
area = 0;
function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log(`Area 3: ${area}`);
area = circleArea(4);
console.log(`Area 4: ${area}`);