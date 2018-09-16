console.log('Hello World');

// creating Object using Object Literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};

circle.draw();

// using Factories
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle2 = createCircle(1);
const circle3 = createCircle(2);
const circle4 = createCircle(3);

console.log(circle2.radius);
console.log(circle3.radius);
console.log(circle4.radius);

// creating objects using construction function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const another = new Circle(1);
another.draw();
