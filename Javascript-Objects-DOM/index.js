// Exercise 1:
const cars = {
    make: 'Toyota',
    model: 'Civic',
    year: '2006',
    getInfo() {return '${this.year} ${this.make} ${this.model}'}
}

// Exercise 2
const students = {
    name: "Travios",
    age: "32",
    grades: [88, 87, 89, 77, 92],
    average() {return this.grades.reduce((total,curr)=>total+curr)/this.grades.length}
}

console.log(students.average())


// Exercise 3
const text = document.getElementById('change-me');
const button = document.getElementById('btn');
button.addEventListener('click', () => {text.style.backgroundColor = "red"})


// Exercise 4
const paragraph = document.querySelector('#some-text');
const btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{paragraph.textContent = paragraph.textContent.toUpperCase()})


// Exercise 5
const list = document.getElementById("list-items");
const addBtn = document.getElementById("addBtn");
let listIndex = 3;
addBtn.addEventListener('click', ()=>{
    const listItem = document.createElement('li');
    list.appendChild(listItem);
    listIndex++;
    listItem.textContent = `Item ${listIndex}`
})