

let questionArray =  [{question: 'questions one',
                        answer1: 'answer one',
                        answer2: 'answer two',
                        answer3: 'answer three',
                        answer4: 'answer four',
                        correct: 'answer one'},
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
let count = 0;

  $('#start').on('click', function(){
    displayQuestion();
    $('#start').html('');
  })   
function displayQuestion(){
    $('#questions').html(questionArray[count].question);
}

function nextQuestion(){
    

}
