'use strict';

let firstImage = document.getElementById('firstImage')

let userInput = document.getElementById('newForm');
let someData = document.getElementById('someData');

let allElement = [];

function Person(name, age, gender, Box, image, path) {
    this.name = name;
    this.age = age;
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];
    this.gender = gender;
    this.image = image;
    this.path = path;
    this.total = [];
    this.Box = Box;
    allElement.push(this);
    console.log(allElement);
}

// Person.prototype.walk = function() {
//     console.log(this.perName);
// }

let Person1 = new Person('john', 28, 'male', ' true', 'ibrahim', '../images/ibrahim.jpg');
let Person2 = new Person('jahn', 64, 'male');
let Person3 = new Person('yamen', 12, 'femal');
let Person4 = new Person('abed', 15, 'male');

// firstImage.src = allElement[0].path;
firstImage.src = "../images/pen" + ".jpg";
// var src = document.getElementById("gamediv");
// var img = document.createElement("img");
// img.src = "img/eqp/"+this.apparel+"/"+this.facing+"_idle.png";
// src.appendChild(img);

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
            data.textContent = getRandomInt(2, 8); //'2545'
            sum = sum + parseInt(data.textContent); //2545
            this.total.push(parseInt(data.textContent));
            // console.log(this.total);
        } else if (i == 14) {
            data.textContent = sum;
        }

    }
    x++;

    while (this.Box == true || this.Box == false) {

        if (this.Box == true) {
            let ele = document.createElement('li');
            someData.appendChild(ele);
            ele.textContent = 'You selected the checkbox';
            break;
        } else {
            let ele = document.createElement('li');
            someData.appendChild(ele);
            ele.textContent = 'You didn\'t select the checkbox';

            break;

        }
    }
}



userInput.addEventListener('submit', submition);

function submition(event) {
    event.preventDefault();

    let name = event.target.names.value;
    let age = parseInt(event.target.ages.value);
    let gender = event.target.genders.value;
    let Box = event.target.checkbox.checked;

    let Person5 = new Person(name, age, gender, Box);
    console.log(allElement.length);
    table.deleteRow(allElement.length);
    console.log(Person5.name);

    Person5.render();
    localStorageFunction();
    // getLocal();


    // let datas = document.createElement('li');
    // someData.appendChild(datas);
    // datas.textContent = 'hiiii';
    footer();
}
getLocal();

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

function getLocal() {
    let data = localStorage.getItem('valuse');
    let contant = JSON.parse(data);
    console.log(data);
    // contant.render();
    if (contant) {
        for (let i = 4; i < contant.length; i++) {
            let reIncetants = new Person(contant[i].name, contant[i].age, contant[i].gender, contant[i].Box);
            reIncetants.render();
            console.log('Resintatiate', reIncetants);
        }
    }
}


Person1.render();
Person2.render();
Person3.render();
Person4.render();

footer();

// function save() {
//     let localValues = JSON.stringify(allElement);
//     localStorage.setItem('value', localValues);
// }

// function get() {
//     let data = localStorage.getItem('value');
//     let content = JSON.parse(data);
//     if (content) {
//         for (let i = 0; i < content.length; i++) {
//             let reInstantiation = new Person(content[i].name, content[i].age, content[i].gender);
//             reInstantiation.render();
//             console.log('reinst', reInstantiation);
//         }
//     }
// }