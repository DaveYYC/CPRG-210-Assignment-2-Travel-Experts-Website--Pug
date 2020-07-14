
const destinations = [
  {
    id: 1022,
    title: 'Alaska',
    description: 'picture of the northern lights',
    link: 'http://travelalaska.com/'
  },

  {
    id: 1029, 
    title: 'New York',
    description: 'picture of central park',
    link: 'http://iloveny.com'
  },
  {
    id: 1040, 
    title: 'Germany',
    description: 'picture of german castle',
    link:  'https://www.germany.travel/en/index.html'

  },
  {
    id: 164, 
    title: 'Italy',
    description: 'https://italia.it/en/home.html',
    link: 'http://iloveny.com'

  },
  {
    id: 234, 
    title: 'Paris',
    description: 'https://en.parisinfo.com',
    link: 'http://iloveny.com'

  },
];

module.exports = destinations;


































let imgTemplate = ''; 

const gallery = document.querySelector('.gallery'); 

/* forEach loop to input items from the array to display in the gallery section of the webpage */

imgList.forEach(function(item){

  imgTemplate += `<a href="${item[3]}.html"><img src="https://picsum.photos/id/${item[0]}/250/250">
    Select for tourism information about${item[1]}<alt="${item[2]}">`;

  // console.log(imgTemplate);  --->Run this code for debugging if necessary.
  
});

gallery.innerHTML = imgTemplate;


