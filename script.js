// DOM elements
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');

// State
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Functions
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

function addData(obj) {
  data.push(obj);

  updateDOM();
}

function updateDOM(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
  

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
    main.appendChild(element);
  });
}

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listener 
addUserBtn.addEventListener('click', getRandomUser);