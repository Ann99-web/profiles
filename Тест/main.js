 
const STUDENTS =[ 
{key:  'key1',
name: 'Абдуллина Лейла'},
{name:'Акопян Диана',
key:  'key2'},
{name:'Белых Георгий',
key:  'key3'},
{name:'Головкина Ольга',
key:  'key4'},
{name:'Денисенко Максим',
key:  'key5'},
{name:'Евстратова Вероника',
key:  'key6'},
{name:'Жадёнова Ксения',
key:  'key7'},
{name:'Злобина Варвара',
key:  'key8'},
{name:'Климова Нина',
key:  'key9'},
{name:'Коваленко Анна',
key:  'key1'},
{name:'Крейнин Даниил',
key:  'key11'},
{name:'Кудрявцев Артем',
key:  'key12'},
{name:'Лапенков Александр',
key:  'key13'},
{name:'Лебедева Елизавета',
key:  'key14'},
{name:'Макалкина Алёна',
key:  'key15'},
{name:'Макеев Илья',
key:  'key16'},
{name:'Маликова Анна',
key:  'key17'},
{name:'Миронова Екатерина',
key:  'key18'},
{name:'Моро Илья',
key:  'key19'},
{name:'Небольсина Екатерина',
key:  'key20'},
{name:'Осипян Владимир',
key:  'key21'},
{name:'Ответчиков Илья',
key:  'key22'},
{name: 'Панин Денис',
key:  'key23'},
{name: 'Подлесных Антон',
key:  'key24'},
{name: 'Проничев Вадим',
key:  'key25'},
{name: 'Пучкова Ефросинья',
key:  'key26'},
{name: 'Синицкий Максим',
key:  'key27'},
{name: 'Соколова София',
key:  'key28'},
{name: 'Сочилина Александра',
key:  'key29'},
{name: 'Стрельченко София',
key:  'key30'},
{name: 'Трусов Георгий',
key:  'key31'},
{name: 'Харитонова Елизавета',
key:  'key32'},
{name: 'Шаршуков Иван',
key:  'key33'},
{name: 'Юрков Давид',
key:  'key34'}
];
const theme = document.getElementById('theme');
const tests = document.getElementById('tests');
const test = document.getElementById('test');
const login = document.getElementById('login');
const btn = document.getElementById('btn-login');

theme.addEventListener('click', (e) =>{
    tests.classList.toggle('hidden');
    
})

btn.addEventListener('click', (e) =>{
    test.classList.remove('hidden');
STUDENTS.forEach ((element) =>{
if(document.getElementById('name').value === element.name){
    localStorage.setItem(element.key, 1);
    localStorage.setItem(element.name, element.name);
    login.innerHTML=`<p>${element.name}</p>`;
    };})
})



//localStorage.clear();

//login.innerHTML=`${localStorage.getItem('name')}`;