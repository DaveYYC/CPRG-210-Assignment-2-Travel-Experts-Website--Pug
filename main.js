
/* ---- Image Gallery ---- */

const imgList = [

    [1022, '  Alaska',  'picture of northern lights',       'https://www.travelalaska.com'],
    [1029, '  New York','picture of new york central park', 'https://www.ny.gov/'],
    [1040, '  Germany', 'picture of german castle',         'https://www.germany.travel/en/index.html'],
    [164,  '  Italy',   'picture of italy landscape',                 'http://www.italia.it/en/home.html'],
    [234,  '  Paris',   'picture of eiffel tower in paris', 'https://en.parisinfo.com/']
];

let imgTemplate = ''; 

const gallery = document.querySelector('.gallery'); 

imgList.forEach(function(item){

    imgTemplate += `<a href="${item[3]}"><img src="https://picsum.photos/id/${item[0]}/250/250">
    Select for information about${item[1]}<alt="${item[2]}">`;
    
    // console.log(imgTemplate);
});

gallery.innerHTML = imgTemplate;

/* ---- Hidden Menu Button ---- */

const button = document.querySelector('.btn');
const menu = document.querySelector('nav ul');

    function eventHandler() {
        menu.classList.toggle('visible');
}

button.addEventListener('click', eventHandler);













