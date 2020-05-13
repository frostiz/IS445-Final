const submitBtn = document.getElementById("submit");

const inputOne = document.getElementById("input-1");
const errorOne = document.getElementById("error-1");

const inputTwo = document.getElementById("input-2");
const errorTwo = document.getElementById("error-2");

function checkCorrectValue(elem, inputNumber) {
	if (!elem) return 'Element does not exist';

	const value = elem.value;

	if (!value || isNaN(value)) return `Number ${inputNumber} input ${value || '&nbsp;'} is not a valid number`;

	const number = parseInt(value);
	if (number < 2 || number > 100) return `Number ${inputNumber} input ${value || '&nbsp;'} is not in the range of 2 and 100`;

	return null;
}

function errorHandler(errorElem, message) {
	errorElem.innerHTML = message;
	errorElem.style.display = "block";
	return false;
}

submitBtn.addEventListener("click", function () {
	errorOne.style.display = "none";
	errorTwo.style.display = "none";

	const inputOneError = checkCorrectValue(inputOne, 1);
	const inputTwoError = checkCorrectValue(inputTwo, 2);

	if (inputOneError) {
		errorHandler(errorOne, inputOneError);
	}
	if (inputTwoError) {
		errorHandler(errorTwo, inputTwoError);
	}

	// findEvenNumbers(inputOne, inputTwo);
});
