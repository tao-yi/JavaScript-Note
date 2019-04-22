if (true) {
	var color = "blue";
}
console.log(color); // "blue"

for (var i = 0; i < 10; i++) {
	// dosomething
}

console.log(i); // 10

function changeColor() {
	anotherColor = "red";
	function swapColors() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
		// 这里可以访问 color, anotherColor, tempColor
	}
	// 这里可以访问color和anotherColor但不能访问tempColor
}
