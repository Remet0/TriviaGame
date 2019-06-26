
//an array that sets my questions, possible answers, and correct answer
let questionArray =  [{question: 'How many playable characters were in the first Super Smash Bro\'s?',
                        answer1: '5',
                        answer2: '8',
                        answer3: '12',
                        answer4: '15',
                        correct: '12',
                        correctGif: './assets/images/Roster.jpg',
                        triviaFact: '<br> There were originally 8 playable characters with 4 more being unlockable.'},
                        {question: 'Who is the oldest Super Smash Bros character?',
                        answer1: 'Pac Man',
                        answer2: 'Mr. Game and Watch',
                        answer3: 'Mario',
                        answer4: 'Donkey Kong',
                        correct: 'Mr. Game and Watch',
                        correctGif: './assets/images/GameWatch.gif',
                        triviaFact: '<br> Mr. Game and Watch was released in 1980, a few months before Pac Man.'},
                        {question: 'Which of the below characters has yet to be playable outside of smash?',
                        answer1: 'Lucas',
                        answer2: 'Simon',
                        answer3: 'Dark Pit',
                        answer4: 'Palutena',
                        correct: 'Palutena',
                        correctGif: './assets/images/Palutena.gif',
                        triviaFact: '<br> Palutena, along with Duck Hunt, Dark Samus, Ridley, Prahna Plant and Wii Fit Trainer are not playable outside of Smash'},
                        {question: 'Which character debuted in Smash Bros before their debut title?',
                        answer1: 'Mega-man',
                        answer2: 'Snake',
                        answer3: 'Roy',
                        answer4: 'Ness',
                        correct: 'Roy',
                        correctGif: './assets/images/Roy.gif',
                        triviaFact: '<br> Roy was in Smash before his debut title \'Fire Emblem: The Binding Blade\''},
                        {question: 'Which Pokemon region is Pokemon Trainer from?',
                        answer1: 'Kanto',
                        answer2: 'Jhoto',
                        answer3: 'Sinnoh',
                        answer4: 'Alola',
                        correct: 'Kanto',
                        correctGif: './assets/images/Kanto.jpg',
                        triviaFact: '<br> Pokemon Trainer is from Kanto, which is loosely based on real-life region in Japan'},
                        {question: 'Which franchise has the most stages in Super Smash Bros?',
                        answer1: 'Super Mario Bro\'s',
                        answer2: 'Donkey Kong',
                        answer3: 'Legend of Zelda',
                        answer4: 'Pokemon',
                        correct: 'Super Mario Bro\'s',
                        correctGif: './assets/images/MarioBros.jpg',
                        triviaFact: '<br> Super Mario Bro\s has over 20 stages in Smash!'}
                    ]
//variable to use
let count = 0;
//holds time interval for next question
//holds time interval for timer
let tempTimer;
let timer = 15;
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
    $('#timer').html('Time Remaining ' + timer);
    $('#questions').html(questionArray[count].question);
    $('#answerOne').html(questionArray[count].answer1);
    $('#answerTwo').html(questionArray[count].answer2);
    $('#answerThree').html(questionArray[count].answer3);
    $('#answerFour').html(questionArray[count].answer4);
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
    timer = 15;
    wins++;
    $('#timer').html('');
    $('#questions').html('Correct!' + questionArray[count].triviaFact);
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
    count++;
    if(count === questionArray.length){
        setTimeout(endGame, 5000);
        return;
    }

    setTimeout(displayQuestion, 5000);
    setTimeout(nextQuestion, 5000);
    
}
//runs on incorrect answer, adds to losses and provided correct html
function lose(source){
    clearInterval(tempTimer);
    if(timer === 0){
        timer = 15;
        losses++;
        $('#timer').html('');
        $('#questions').html('Out of Time!' + questionArray[count].triviaFact);
        $('#answerOne').html('<img src=' + source+  ' alt="">');
        $('#answerTwo').html('');
        $('#answerThree').html('');
        $('#answerFour').html('');
        count++;
        if(count === questionArray.length){
            endGame();
            return;
        }
        setTimeout(displayQuestion, 5000);
        setTimeout(nextQuestion, 5000);
    }
    timer = 15;
    losses++;
    $('#timer').html('');
    $('#questions').html('Wrong!' + questionArray[count].triviaFact);
    $('#answerOne').html('<img src=' + source+  ' alt="">');
    $('#answerTwo').html('');
    $('#answerThree').html('');
    $('#answerFour').html('');
    count++;
    if(count === questionArray.length){
        endGame();
        return;
    }

    setTimeout(displayQuestion, 5000);
    setTimeout(nextQuestion, 5000);
}


//what to run at end of game
function endGame(){
        clearInterval(tempTimer);
        $('#timer').html('');
        $('#questions').html('Game Over! Here\'s how you did!');
        $('#answerOne').html('Correct Answers: ' + wins );
        $('#answerTwo').html('Wrong Answers: ' + losses);
        $('#answerThree').html('');
        $('#answerFour').html('');
        $('.reset').html('Start Over?');
}




$('.reset').on('click', function(){
    document.location.reload();
})


$('#answerOne').on('click', function(){
    if(questionArray[count].answer1 === questionArray[count].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})


$('#answerTwo').on('click', function(){
    if(questionArray[count].answer2 === questionArray[count].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})


$('#answerThree').on('click', function(){
    if(questionArray[count].answer3 === questionArray[count].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})


$('#answerFour').on('click', function(){
    if(questionArray[count].answer4 === questionArray[count].correct){
        win(questionArray[count].correctGif);
    }else{
        lose(questionArray[count].correctGif);
    }
})
