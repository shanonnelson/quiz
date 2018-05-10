// array of questions and answers
var questions = [
	{
		question: "Where was coffee first discovered?",
		answer: "ethiopia"
	},
	{
		question: "Where is the corporate headquarters of starbucks?",
		answer: "seattle"
	},
	{
		question: "Which country drinks the most coffee per capita?",
		answer: "finland"
	},
	{
		question: "What is the most expensive coffee in the world?",
		answer: "kopi luwak"
	},
	{
		question: "Which drink has more caffeine Red Bull or drip coffee?",
		answer: "drip coffee"
	},
	{
		question: "What's a latte made out of?",
		answer: "espresso and milk foam"
	},
	{
		question: "Which country was the first to make drip coffee?",
		answer: "france"
	},
	{
		question: "Typically we drink coffee from two varieties of beans Arabica and ______?",
		answer: "robusta"
	},
	{
		question: "How many cups of coffee can be produced by one coffee tree?",
		answer: 100
	},
	{
		question: "Coffee is the ______ most traded commodity on earth?",
		answer: "second"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
