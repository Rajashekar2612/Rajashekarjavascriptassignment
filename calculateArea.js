function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    return "Invalid dimensions. Length and width must be positive numbers.";
  }

  var area = length * width;
  return area;
}

var length = 5;
var width = 10;
var rectangleArea = calculateArea(length, width);

if (typeof rectangleArea === "number") {
  console.log("The area of the rectangle is: " + rectangleArea);
} else {
  console.log(rectangleArea);
}