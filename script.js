const submitBtn = document.getElementById("submit");

const inputOne = document.getElementById("input-1");
const errorOne = document.getElementById("error-1");

const inputTwo = document.getElementById("input-2");
const errorTwo = document.getElementById("error-2");

const resultContainer = document.getElementById('result-container');
const evenNumberCount = document.getElementById('even-number-count');
const evenNumberList = document.getElementById('even-number-list');

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
	resultContainer.style.display = 'none';
	return false;
}

function isEvenNumber(n) {
	return n % 2 === 0;
}

function findEvenNumbers(inputOne, inputTwo) {
	const n1 = +inputOne < +inputTwo ? +inputOne : +inputTwo;
	const n2 = +inputOne < +inputTwo ? +inputTwo : +inputOne;

	const evenNumbers = [];

	for (let i = n1; i <= n2; i++) {
		if (isEvenNumber(i)) {
			evenNumbers.push(i);
		}
    }
	
	evenNumberCount.innerHTML = evenNumbers.length;
	evenNumberList.innerHTML = evenNumbers.join(',');

    resultContainer.style.display = 'block';
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
	if (inputOneError || inputTwoError)
		return null;

	const inputOneValue = parseInt(inputOne.value);
	const inputTwoValue = parseInt(inputTwo.value);

	findEvenNumbers(inputOneValue, inputTwoValue);
});
