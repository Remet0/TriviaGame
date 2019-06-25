
//an array that sets my questions, possible answers, and correct answer
let questionArray =  [{question: 'questions one',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer two',
                        correctGif: 'http://www.placecage.com/gif/200/300'},
                        {question: 'questions two',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one',
                        correctGif: 'http://www.placecage.com/gif/200/300'},
                        {question: 'questions three',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one',
                        correctGif: 'http://www.placecage.com/gif/200/300'},
                        {question: 'questions four',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one',
                        correctGif: 'http://www.placecage.com/gif/200/300'},
                    ]
//variable to use
let count = 0;
//holds time interval for next question
//holds time interval for timer
let tempTimer;
let timer = 30;
let betweenTimer = 5;
//holds time interval for tempBetween
let tempBetween;
let wins = 0;
let losses = 0;

//a function that starts the program and erases itself
  $('#start').on('click', function(){
    displayQuestion();
    nextQuestion();

    $('#start').remove();
  })   
  //this will display the question and answers you want
function displayQuestion(){
    $('#timer').html(timer);
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
    $('#timer').html('Time Remaining: ' + timer);
    if(timer === 0){
        lose(questionArray[count].correctGif);
    }
}
//counts down the timer
function nextQuestion(){
    tempTimer = setInterval(timerControl, 1000);
}



//function that runs on correct answer, adds to wins and provided correct html
function win(source){
    clearInterval(tempTimer);
    timer = 30;
    wins++;
    $('#timer').html('');
    $('#questions').html('Correct!');
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
    setTimeout(displayQuestion, 5000);
    setTimeout(nextQuestion, 5000);
    
}
//runs on incorrect answer, adds to losses and provided correct html
function lose(source){
    clearInterval(tempTimer);
    if(timer === 0){
        timer = 30;
        losses++;
        $('#timer').html('');
        $('#questions').html('Out of Time!');
        $('#answerOne').html('<img src=' + source+  ' alt="">');
        $('#answerTwo').html('');
        $('#answerThree').html('');
        $('#answerFour').html('');
        setTimeout(displayQuestion, 5000);
        setTimeout(nextQuestion, 5000);
        return;
    }
    timer = 30;
    losses++;
    $('#timer').html('');
    $('#questions').html('Wrong!');
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
    setTimeout(displayQuestion, 5000);
    setTimeout(nextQuestion, 5000);
}

$('#answerOne').on('click', function(){
    if(questionArray[count-1].answer1 === questionArray[count-1].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})
$('#answerTwo').on('click', function(){
    if(questionArray[count-1].answer2 === questionArray[count-1].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})
$('#answerThree').on('click', function(){
    if(questionArray[count-1].answer3 === questionArray[count-1].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})
$('#answerFour').on('click', function(){
    if(questionArray[count-1].answer4 === questionArray[count-1].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})
