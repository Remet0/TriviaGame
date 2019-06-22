
//an array that sets my questions, possible answers, and correct answer
let questionArray =  [{question: 'questions one',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer two'},
                        {question: 'questions two',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one'},
                        {question: 'questions three',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one'},
                        {question: 'questions four',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one'},
                    ]
//variable to use
let count = 0;
//holds time interval for next question
//holds time interval for timer
let tempTimer;
let timer = 10;
let betweenTimer = 5;
//holds time interval for tempBetween
let tempBetween;
let wins = 0;
let losses = 0;

//a function that starts the program and erases itself
  $('#start').on('click', function(){
    displayQuestion();
    nextQuestion();

    $('#start').html('');
  })   
  //this will display the question and answers you want
function displayQuestion(){
    $('#questions').html(questionArray[count].question);
    $('#answerOne').html(questionArray[count].answer1);
    $('#answerTwo').html(questionArray[count].answer2);
    $('#answerThree').html(questionArray[count].answer3);
    $('#answerFour').html(questionArray[count].answer4);
    count++;
}



//controlls the timer, starting at 30 seconds, going down 1 a second.
function timerControl(){
    timer--
    $('#timer').html(timer);
    if(timer === 0){
        displayQuestion();
        // clearInterval(tempTimer);
        timer += 30;
    }
}
//time intervals to hold change timer and to hold the questions for that time
function nextQuestion(){
    tempTimer = setInterval(timerControl, 1000);
}
//controls the time between questions
function betweenQuestion(){
    tempBetween = setTimeout(displayQuestions, 5000);

}
//function that runs on correct answer, adds to wins and provided correct html
function win(source){
    wins++;
    $('#questions').html('Correct!');
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
}
//runs on incorrect answer, adds to losses and provided correct html
function lose(source){
    losses++;
    $('#questions').html('Wrong!');
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
}

$('#answerOne').on('click', function(){
    if(questionArray[count-1].answer1 === questionArray[count-1].correct){
        win('http://www.placecage.com/gif/200/300');
    }else{
        lose('http://www.placecage.com/gif/200/300');
    }
})
$('#answerTwo').on('click', function(){
    if(questionArray[count-1].answer2 === questionArray[count-1].correct){
        win('http://www.placecage.com/gif/200/300');
    }else{
        lose('http://www.placecage.com/gif/200/300');
    }
})
$('#answerThree').on('click', function(){
    if(questionArray[count-1].answer3 === questionArray[count-1].correct){
        win('http://www.placecage.com/gif/200/300');
    }else{
        lose('http://www.placecage.com/gif/200/300');
    }
})
$('#answerFour').on('click', function(){
    if(questionArray[count-1].answer4 === questionArray[count-1].correct){
        win('http://www.placecage.com/gif/200/300');
    }else{
        lose('http://www.placecage.com/gif/200/300');
    }
})
