


/*--------------Attribution in README.md------------------*/

/* ---- Creates a red border for invalid form inputs ---- */

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("invalid",event => {
    input.classList.add("error");},false
  );
});

/*---------------------------------------------------------*/





/*-----------------Gallery Object Info---------------------*/
[
  {
    id:           1,
    title:        'Australia',
    source:       'Pexels.com',
    fileName:     'Pexels-photo-Australia-2193268.jpeg',
    attribution:  {
      source: 'Pexels.com',
      credit: 'TBD',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
]