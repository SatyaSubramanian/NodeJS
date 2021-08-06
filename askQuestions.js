const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What is your name?",
    "where do you live?",
    "what are you going to do with Node JS?"
];

/*
collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
*/

//collectAnswers(questions);

const answerEvents = collectAnswers(questions);


/*
const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
*/

answerEvents.on("answer", answer =>
    console.log(`questions answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());

