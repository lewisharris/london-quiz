const questions = [
        {
        Question:'Which major river runs through London?',
        Answers:{   a:"The Severn",
                    b: "The Clyde",
                    c:"The Thames",
                    d:"The Avon"
                    },
        correctAnswer:"c"
        },
        {
        Question:'where in London is Nelsons Column?',
        Answers:{   a:"Trafalgar Square",
                    b: "Leicester Square",
                    c:"Picadilly Circus",                        
                    d:"Marble Arch"
                    },
        correctAnswer:"a"
        },
        {
        Question:'Which is the tallest building in London?',
        Answers:{   a:"Big Ben",
                    b: "BT Tower",
                    c:"The Shard",
                    d:"The Gherkin"
                    },
        correctAnswer:"c"
        },
        {
        Question:'How many road bridges span the thames between and including Tower bridge and Westminster bridge?',
        Answers:{   a:"4",
                    b: "8",
                    c:"5",
                    d:"6"
                    },
        correctAnswer:"d"
        },
        {
        Question:'Which is the largest park in Central London?',
        Answers:{   a:"Hyde Park",
                    b: "Regents Park",
                    c:"Victoria Park",
                    d:"Green Park"
                    },
        correctAnswer:"a"
        },
        {
        Question:'How many boroughs are there in Greater London',
        Answers:{   a:"48",
                    b: "32",
                    c:"12",
                    d:"24"
                    },
        correctAnswer:"b"
        },
        {
        Question:'The London Eye is...',
        Answers:{   a:"The city's CCTV system",
                    b: "A large observation wheel",
                    c:"A roundabout",
                    d:"A small park"
                    },
        correctAnswer:"b"
        },
        {
        Question:'Where are the Crown Jewels kept?',
        Answers:{   a:"Palace of Westminster",
                    b: "Westminster Abbey",
                    c:"Buckingham Palace",
                    d:"Tower of London"
                    },
        correctAnswer:"d"
                    },
        {
        Question:'The new underground \'Crossrail\' line, is to be called the...',
        Answers:{   a:"Southern Line",
                    b: "Western Line",
                    c:"Elizabeth Line",
                    d:"Express Line"
                    },
        correctAnswer:"c"
        },
        { 
        Question:'In which London train station does the Eurostar arrive?',
        Answers:{   a:"St Pancras",
                    b: "Paddington",
                    c:"Euston",
                    d:"Charing Cross"
        },
        correctAnswer:"a"
        }
    ];


//Returns ID elements, to save typing 'Get element by ID' over and over
function get(x){
    return document.getElementById(x);
};

var quiz = get('quiz');
var startQuiz = get('startQuiz');
var next = get('next');
var progress = get('progress');
var choices = document.getElementsByName('choices');
var currentQuestionText = get('currentQuestionText');




startQuiz.addEventListener('click', function(){
    quiz.style.display = 'inline';
    startQuiz.style.display = 'none';
    document.getElementById('buttonflex').style.display = 'flex';
    progress.innerHTML = `Question ${position + 1}/${questions.length}`;
})


var position = 0;
var currentScore = 0;

//function to create and render the next set of question and answers
function newQuestion(){
    currentQuestionText.innerHTML = questions[position].Question;
    get('chAlabel').innerHTML = questions[position].Answers.a;
    get('chBlabel').innerHTML = questions[position].Answers.b;
    get('chClabel').innerHTML = questions[position].Answers.c;
    get('chDlabel').innerHTML = questions[position].Answers.d;
}

// Function to check the answer given in the multiple choice is correct.
function answerCheck(){
    for(i=0;i<choices.length;i++){
        if(choices[i].checked){
            let answer = choices[i].value;
            if(answer == questions[position].correctAnswer){
                currentScore = currentScore + 1;
            }
            choices[i].checked = false;
            window.blur();
        }
    }
}


//Quiz action
    next.addEventListener('click',function(){
        if(position < questions.length-1){
            answerCheck();
            position = position + 1;
            newQuestion();
            progress.innerHTML = `Question  ${position + 1}/${questions.length}`;
        }
        else{
            answerCheck();
            scoreReview(currentScore);
            quiz.innerHTML = `You got ${currentScore}/${questions.length}`;
            next.innerHTML='<a href=".">Try Again?</a>';
            progress.innerHTML = `Question ${position + 1}/${questions.length}`;

        }
    })