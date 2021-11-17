const LIST =[ 
{key:  'key1',
name: 'Абдуллина Лейла',
score: 'score1'},
{name:'Акопян Диана',
key:  'key2',
score: 'score2'},
{name:'Белых Георгий',
key:  'key3',
score: 'score3'},
{name:'Головкина Ольга',
key:  'key4',
score: 'score4'},
{name:'Денисенко Максим',
key:  'key5',
score: 'score5'},
{name:'Евстратова Вероника',
key:  'key6',
score: 'score6'},
{name:'Жадёнова Ксения',
key:  'key7',
score: 'score7'},
{name:'Злобина Варвара',
key:  'key8',
score: 'score8'},
{name:'Климова Нина',
key:  'key9',
score: 'score9'},
{name:'Коваленко Анна',
key:  'key10',
score: 'score10'},
{name:'Крейнин Даниил',
key:  'key11',
score: 'score11'},
{name:'Кудрявцев Артем',
key:  'key12',
score: 'score12'},
{name:'Лапенков Александр',
key:  'key13',
score: 'score13'},
{name:'Лебедева Елизавета',
key:  'key14',
score: 'score14'},
{name:'Макалкина Алёна',
key:  'key15',
score: 'score15'},
{name:'Макеев Илья',
key:  'key16',
score: 'score16'},
{name:'Маликова Анна',
key:  'key17',
score: 'score17'},
{name:'Миронова Екатерина',
key:  'key18',
score: 'score18'},
{name:'Моро Илья',
key:  'key19',
score: 'score19'},
{name:'Небольсина Екатерина',
key:  'key20',
score: 'score20'},
{name:'Осипян Владимир',
key:  'key21',
score: 'score21'},
{name:'Ответчиков Илья',
key:  'key22',
score: 'score22'},
{name: 'Панин Денис',
key:  'key23',
score: 'score23'},
{name: 'Подлесных Антон',
key:  'key24',
score: 'score24'},
{name: 'Проничев Вадим',
key:  'key25',
score: 'score25'},
{name: 'Пучкова Ефросинья',
key:  'key26',
score: 'score26'},
{name: 'Синицкий Максим',
key:  'key27',
score: 'score27'},
{name: 'Соколова София',
key:  'key28',
score: 'score28'},
{name: 'Сочилина Александра',
key:  'key29',
score: 'score29'},
{name: 'Стрельченко София',
key:  'key30',
score: 'score30'},
{name: 'Трусов Георгий',
key:  'key31',
score: 'score31'},
{name: 'Харитонова Елизавета',
key:  'key32',
score: 'score32'},
{name: 'Шаршуков Иван',
key:  'key33',
score: 'score33'},
{name: 'Юрков Давид',
key:  'key34',
score: 'score34'}
];
const DATA = [
    {
        question:'Вопрос 1',
        answers:[
            {id:'1',
            value: 'Ответ 1',
            correct: true},
            {id:'2',
            value: 'Ответ 2',
            correct: false},
            { id: '3',
            value: 'Ответ 3',
            correct: false}
                ]
    },
    {question:'Вопрос 2',
        answers:[
            {id:'4',
            value: 'Ответ ',
            correct: true},
            {id:'5',
            value: 'Ответ ',
            correct: false},
            { id: '6',
            value: 'Ответ ',
            correct: false}
        ]
    },
    {
        question:'Вопрос 3',
        answers:[
            {id:'7',
            value: 'Ответ 1',
            correct: true},
            {id:'8',
            value: 'Ответ 2',
            correct: false},
            { id: '9',
            value: 'Ответ 3',
            correct: false}
                ]
    },
    {
        question:'Вопрос 4',
        answers:[
            {id:'10',
            value: 'Ответ 1',
            correct: true},
            {id:'11',
            value: 'Ответ 2',
            correct: false},
            { id: '12',
            value: 'Ответ 3',
            correct: false}
                ]
    },
    {
        question:'Вопрос 5',
        answers:[
            {id:'13',
            value: 'Ответ 1',
            correct: true},
            {id:'14',
            value: 'Ответ 2',
            correct: false},
            { id: '15',
            value: 'Ответ 3',
            correct: false}
                ]
    }         
    
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const btnStart = document.getElementById('btn-start');
const btnSend = document.getElementById('btn-send');
const results = document.getElementById('results');
const score = document.getElementById('score');



const renderQuestions=(index)=>{
    questions.dataset.currentStep = index;
    const renderAnswers=()=>{
    return DATA[index].answers
    .map((answer) =>
                        `<li id="1"><label>
                        <input type="checkbox" name=${index} value=${answer.id} class="answer-input">
                        ${answer.value}
                        </label></li>`
                    )
    .join('');
      }



    questions.innerHTML = `
    <div>
     <div class="question">${DATA[index].question}</div>
            <ul class="questions">
                ${renderAnswers()}
            </ul>
    </div>
    `;

};

const renderResults = () =>{
    let content = '';
   
    const getClassNames = (answer, questionIndex) => {
        let classname ='';
        if(answer.correct)
        {classname='valid2';}
         if(!answer.correct && answer.id == localResults[questionIndex]){
            classname = 'invalid';}  
         if(answer.correct && answer.id == localResults[questionIndex]){
            classname = 'valid';} 
         return classname;
    }

    const getAnswers = (questionIndex) =>{ return DATA[questionIndex].answers
        .map((answer) => `<li class="${getClassNames(answer, questionIndex)}" name=${questionIndex} value=${answer.id}> ${answer.value} </li>`)
        .join('');
    }

    DATA.forEach((question, index) =>{
        content +=`
        <div id="results">
     <div class="question">${question.question}</div>
            <ul class="questions-ans">
                ${getAnswers(index)}
            </ul>
            </div>
        `;
    })
     results.innerHTML= content;
      score.innerHTML = `<div class="score" id="score"> Результат: ${Score()} / 5</div>`;
     
};



quiz.addEventListener('change', (e) =>{
     if(e.target.classList.contains('answer-input')){
        
        localResults[e.target.name] = e.target.value;
        
    }
});

quiz.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-next')){
        const nextQuestionIndex =Number(questions.dataset.currentStep);
        renderQuestions(Number(questions.dataset.currentStep)+1);
        btnSend.classList.remove('hidden');
        btnStart.classList.add('hidden');
       
      if((nextQuestionIndex +2) === DATA.length){ btnNext.classList.add('hidden');}
    }
    if(e.target.classList.contains('btn-prev')){
        renderQuestions(Number(questions.dataset.currentStep) -1);
         btnNext.classList.remove('hidden');
    }
    if(e.target.classList.contains('btn-send')){
        questions.classList.add('hidden');
            btnNext.classList.add('hidden');
            btnPrev.classList.add('hidden');
            score.classList.remove('hidden');
             btnSend.classList.add('hidden');
             btnStart.classList.remove('hidden');

             if(localStorage.getItem('key1') === '1'){
                    renderResults();
                    localStorage.setItem('score1', Score().toString());
                    localStorage.removeItem('key1');
                    localResults ={};
                }
                 else if(localStorage.getItem('key2') === '1'){
                    renderResults();
                    localStorage.setItem('score2', Score().toString());
                    localStorage.removeItem('key2');
                    localResults ={};
                }
                 else if(localStorage.getItem('key3') === '1'){
                    renderResults();
                    localStorage.setItem('score3', Score().toString());
                    localStorage.removeItem('key3');
                    localResults ={};
                 }
                else if(localStorage.getItem('key4') === '1'){
                    renderResults();
                    localStorage.setItem('score4', Score().toString());
                    localStorage.removeItem('key4');
                    localResults ={};
                }
                else if(localStorage.getItem('key5') === '1'){
                    renderResults();
                    localStorage.setItem('score5', Score().toString());
                    localStorage.removeItem('key5');
                    localResults ={};
                }
                 else if(localStorage.getItem('key6') === '1'){
                    renderResults();
                    localStorage.setItem('score6', Score().toString());
                    localStorage.removeItem('key6');
                    localResults ={};
                }
                else if(localStorage.getItem('key7') === '1'){
                    renderResults();
                    localStorage.setItem('score7', Score().toString());
                    localStorage.removeItem('key7');
                    localResults ={};
                }
                else if(localStorage.getItem('key8') === '1'){
                    renderResults();
                    localStorage.setItem('score8', Score().toString());
                    localStorage.removeItem('key8');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key9') === '1'){
                    renderResults();
                    localStorage.setItem('score9', Score().toString());
                    localStorage.removeItem('key9');
                    localResults ={};
                    
                } else if(localStorage.getItem('key10') === '1'){
                    renderResults();
                    localStorage.setItem('score10', Score().toString());
                    localStorage.removeItem('key10');
                    localResults ={};
                    
                    }
                else if(localStorage.getItem('key11') === '1'){
                    renderResults();
                    localStorage.setItem('score11', Score().toString());
                    localStorage.removeItem('key11');
                    localResults ={};
                    
                } else if(localStorage.getItem('key12') === '1'){
                    renderResults();
                    localStorage.setItem('score12', Score().toString());
                    localStorage.removeItem('key12');
                    localResults ={};
                }
                 else if(localStorage.getItem('key13') === '1'){
                    renderResults();
                    localStorage.setItem('score13', Score().toString());localStorage.removeItem('key13');
                    localStorage.removeItem('key13');
                    localResults ={};
                    
                } else if(localStorage.getItem('key14') === '1'){
                    renderResults();
                    localStorage.setItem('score14', Score().toString());
                    localStorage.removeItem('key14');
                    localResults ={};
                }
                 else if(localStorage.getItem('key15') === '1'){
                    renderResults();
                    localStorage.setItem('score15', Score().toString());
                    localStorage.removeItem('key15');
                    localResults ={};
                    
                } else if(localStorage.getItem('key16') === '1'){
                    renderResults();
                    localStorage.setItem('score16', Score().toString());
                    localStorage.removeItem('key16');
                    localResults ={};
                }
                 else if(localStorage.getItem('key17') === '1'){
                    renderResults();
                    localStorage.setItem('score17', Score().toString());
                    localStorage.removeItem('key17');
                    localResults ={};
                    
                    
                } else if(localStorage.getItem('key18') === '1'){
                    renderResults();
                    localStorage.setItem('score18', Score().toString());
                    
                    localStorage.removeItem('key18');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key19') === '1'){
                    renderResults();
                    localStorage.setItem('score19', Score().toString());
                    localStorage.removeItem('key19');
                    localResults ={};
                    
                    
                } else if(localStorage.getItem('key20') === '1'){
                    renderResults();
                    localStorage.setItem('score20', Score().toString());
                    
                    localStorage.removeItem('key20');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key21') === '1'){
                    renderResults();
                    localStorage.setItem('score21', Score().toString());
                    
                    localStorage.removeItem('key21');
                    localResults ={};
                    
                } else if(localStorage.getItem('key22') === '1'){
                    renderResults();
                    localStorage.setItem('score22', Score().toString());
                    
                    localStorage.removeItem('key22');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key23') === '1'){
                    renderResults();
                    localStorage.setItem('score23', Score().toString());
                    
                    localStorage.removeItem('key23');
                    localResults ={};
                    
                } else if(localStorage.getItem('key24') === '1'){
                    renderResults();
                    localStorage.setItem('score24', Score().toString());
                    
                    localStorage.removeItem('key24');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key25') === '1'){
                    renderResults();
                    localStorage.setItem('score25', Score().toString());
                    
                    localStorage.removeItem('key25');
                    localResults ={};
                    
                } else if(localStorage.getItem('key26') === '1'){
                    renderResults();
                    localStorage.setItem('score26', Score().toString());
                    
                    localStorage.removeItem('key26');
                    localResults ={};
                    
                }
                else if(localStorage.getItem('key27') === '1'){
                    renderResults();
                    localStorage.setItem('score27', Score().toString());
                    localStorage.removeItem('key27');
                    localResults ={};
                    
                } else if(localStorage.getItem('key28') === '1'){
                    renderResults();
                    localStorage.setItem('score28', Score().toString());
                    localStorage.removeItem('key28');
                    localResults ={};
                                        
                } else if(localStorage.getItem('key29') === '1'){
                    renderResults();
                    localStorage.setItem('score29', Score().toString());
                    localStorage.removeItem('key29');
                    localResults ={};
                                        
                }
                else if(localStorage.getItem('key30') === '1'){
                    renderResults();
                    localStorage.setItem('score30', Score().toString());
                    localStorage.removeItem('key30');
                    localResults ={};
                                        
                } else if(localStorage.getItem('key31') === '1'){
                    renderResults();
                    localStorage.setItem('score31', Score().toString());
                    localStorage.removeItem('key31');
                    localResults ={};
                                        
                } else if(localStorage.getItem('key32') === '1'){
                    renderResults();
                    localStorage.setItem('score32', Score().toString());
                    localStorage.removeItem('key32');
                    localResults ={};
                                        
                }
                else if(localStorage.getItem('key33') === '1'){
                    renderResults();
                    localStorage.setItem('score33', Score().toString());
                    localStorage.removeItem('key33');
                    localResults ={};
                                        
                } else if(localStorage.getItem('key34') === '1'){
                    renderResults();
                    localStorage.setItem('score34', Score().toString());
                    localStorage.removeItem('key34');
                    localResults ={};
                }
                
            };
                         
            
});

    score.classList.add('hidden');
    btnStart.classList.add('hidden');
    renderQuestions(0);


     const Score =() => {
        let i = 0;
            const valid = results.querySelectorAll(".valid");
           while(i< valid.length){
               i++;
           }
            return i;
            } 