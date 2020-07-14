


/* Array of items for the gallery section of the webpage */

const imgList = [

  [1022, '  Alaska',  'picture of northern lights',       'http://travelalaska.com/'],
  [1029, '  New York','picture of new york central park', 'https://iloveny.com'],
  [1040, '  Germany', 'picture of german castle',         'https://www.germany.travel/en/index.html'],
  [164,  '  Italy',   'picture of italy landscape',       'https://italia.it/en/home.html'],
  [234,  '  Paris',   'picture of eiffel tower in paris', 'https://en.parisinfo.com/']
];

let imgTemplate = ''; 

const gallery = document.querySelector('.gallery'); 

/* forEach loop to input items from the array to display in the gallery section of the webpage */

imgList.forEach(function(item){

  imgTemplate += `<a href="${item[3]}.html"><img src="https://picsum.photos/id/${item[0]}/250/250">
    Select for tourism information about${item[1]}<alt="${item[2]}">`;

  // console.log(imgTemplate);  --->Run this code for debugging if necessary.
  
});

gallery.innerHTML = imgTemplate;



/* ---- Hidden Menu Toggle Button ---- */

/* When the main page is viewed in mobile size the nav menu disappears and is replaced by a toggle button. */

const button = document.querySelector('.btn');
const menu = document.querySelector('nav ul');

function eventHandler() {

  menu.classList.toggle('visible');

}

button.addEventListener('click', eventHandler);













