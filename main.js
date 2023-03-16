const title=document.createElement('title');
document.head.appendChild(title);
title.innerHTML = "lab7";

const h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = 'Lab7 Assignment';
h1.style.color = 'blue';

const hr = document.createElement('hr');
document.body.appendChild(hr)

const task = document.createElement('h2');
task.innerHTML = 'Task';
task.style.color = 'red';
document.body.appendChild(task);

const p = document.createElement('p');
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p);

const ul = document.createElement('ul');
document.body.appendChild(ul);


function addListItem(text, Name) {
  const li = document.createElement('li');
  li.innerHTML = text;
  li.classList.add(Name);
  ul.appendChild(li);
}

addListItem("find elements in the DOM (<b>5 points</b>);", 'even')
addListItem("create/add/remove elements (<b>5 points</b>);", 'odd')
addListItem("change content of the elements (<b>5 points</b>);", 'even')
addListItem("change styles of the elements (<b>5 points</b>);", 'odd')
addListItem("change attributes of the elements (<b>5 points</b>);", 'even')
addListItem("change classes of the elements (<b>5 points</b>).", 'odd')

const hr2 = document.createElement('hr');
document.body.appendChild(hr2)


const submission = document.createElement('h2');
submission.innerHTML = 'Submission';
submission.style.color = 'red';
document.body.appendChild(submission);

const p1 = document.createElement('p');
p1.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p1);

const ul1 = document.createElement('ul');
document.body.appendChild(ul1);


function addListItem1(text, Name) {
  const li = document.createElement('li');
  li.innerHTML = text;
  li.classList.add(Name);
  ul1.appendChild(li);
}

addListItem1("Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).", 'even')
addListItem1("Clone this repository to your local machine and work inside it.", 'odd')
addListItem1('Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).', 'even')
addListItem1("Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).", 'odd')
addListItem1("Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).", 'even')
addListItem1("Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).", 'odd')
addListItem1("After you finish your work, submit it to the Github (<b>2 points</b>).", 'even')


const hr3 = document.createElement('hr');
document.body.appendChild(hr3)


var array1 = document.querySelectorAll('.even');
for(var i=0; i < array1.length; i++) {
	array1[i].style.color = 'green';
}

var array2 = document.querySelectorAll('.odd');

for(var i=0; i < array2.length; i++) {
	array2[i].style.color = 'purple';
}