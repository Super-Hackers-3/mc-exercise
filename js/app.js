'use strict';

let allElement = [];

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    this.gender = gender;
    this.total = [];
    allElement.push(this);
    console.log(allElement);
}

// Person.prototype.walk = function() {
//     console.log(this.perName);
// }

let Person1 = new Person('john', 28, 'male');
let Person2 = new Person('jahn', 64, 'male');
let Person3 = new Person('yamen', 12, 'femal');
let Person4 = new Person('abed', 15, 'male');

let container = document.getElementById('newTable');
let table = document.createElement('table');
container.appendChild(table);

let firstRaw = document.createElement('tr');
table.appendChild(firstRaw);

let firstHeader = document.createElement('th');
firstRaw.appendChild(firstHeader);
firstHeader.textContent = '  ';



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generatHoures() {
    for (let i = 0; i < Person1.hours.length; i++) {
        let firstHeders = document.createElement('th');
        firstRaw.appendChild(firstHeders);
        firstHeders.textContent = Person1.hours[i];

    }
}
generatHoures();

let sum = 0;
let x = 0;

Person.prototype.render = function() {

    let secondRaws = document.createElement('tr');
    table.appendChild(secondRaws);
    secondRaws.textContent = allElement[x].name;
    console.log(allElement.name);
    sum = 0;
    for (let i = 0; i < Person1.hours.length; i++) {
        let data = document.createElement('th');
        secondRaws.appendChild(data);

        if (i != 14) {
            data.textContent = getRandomInt(2, 8);
            sum = sum + parseInt(data.textContent);
            this.total.push(parseInt(data.textContent));
            // console.log(this.total);
        } else if (i == 14) {
            data.textContent = sum;
        }

    }
    x++;

}

// Person5.render();

let userInput = document.getElementById('newForm');
userInput.addEventListener('submit', submition);


function submition(event) {
    event.preventDefault();

    let name = event.target.names.value;
    console.log(name);
    let age = parseInt(event.target.ages.value);
    let gender = event.target.genders.value;
    let Person5 = new Person(name, age, gender);

    table.deleteRow(allElement.length);
    console.log(name);
    Person5.render();
    localStorageFunction();
    footer();
}

function footer() {
    let footerRaw = document.createElement('tr');
    table.appendChild(footerRaw);
    footerRaw.textContent = 'Totals';
    let y = 0;
    let y2 = 0;
    for (let i = 0; i < 14; i++) {
        y = Person1.total[i] + Person2.total[i] + Person3.total[i] + Person4.total[i];
        let td = document.createElement('td');
        footerRaw.appendChild(td);
        td.textContent = y;
        y2 = y + y2;
    }
    let theEl3 = document.createElement('th');
    footerRaw.appendChild(theEl3);
    theEl3.textContent = y2;
}

function localStorageFunction() {
    let localValues = JSON.stringify(allElement);
    localStorage.setItem('valuse', localValues);
    console.log(localValues);
}

// function getLocal() {
//     let data = localStorage.getItem('values');
//     allElement = JSON.parse(data);
//     console.log(data);
// }

Person1.render();
Person2.render();
Person3.render();
Person4.render();
footer();
// getLocal();
// function saveToLs() {

//     let arrStr = JSON.stringify(BusMall.allElements);

//     localStorage.setItem('coffeeSaved', arrStr);

//     console.log(arrStr);
// }

// function gettingLocalStorage() {
//     let data = localStorage.getItem('coffeeSaved');
//     if (data) {
//         BusMall.allElements = JSON.parse(data);
//     } // localStorage.removeItem('imageTimes');
// }