var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
  btn.addEventListener('click', function(e) {

    const li = e.target.parentElement;
    li.parentNode.removeChild(li)

  });
});

const link = document.querySelector('#page-banner');

link.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('navigation to', e.target.textContent, ' was prevented')
})
// End of Video #9
// Video #10
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li)
  }
});
// End of Video #10
//Video #11
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  //append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase()
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  })
})

//Making greetings based on the hour
const a = new Date();
let hour = a.getHours();

// if (hour < 6) {
//   document.getElementById("greeting").innerHTML = 'Good Night!'
// } else if (hour < 12) {
//   document.getElementById("greeting").innerHTML = 'Good Morning!'
// } else if (hour < 17) {
//   document.getElementById("greeting").innerHTML = 'Good Afternoon!'
// } else if (hour < 21) {
//   document.getElementById("greeting").innerHTML = 'Good Evening!'
// } else {
//   document.getElementById("greeting").innerHTML = 'Good Night!'
// }
// console.log(date);
//day = date
const b = new Date();
let day = b.getDate();
console.log(day);

//theName = name of month
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const c = new Date();
let theName = month[c.getMonth()];
console.log(theName);

//year obv
const d = new Date();
let year = d.getFullYear();

//Prints whole date in full sent.
function date() {
  let date = `Today is ${theName} ${day} , ${year}.`
  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = theName;
}
window.onload = date();