


/*--------------Attribution in README.md------------------*/

/* ---- Creates a red border for invalid form inputs ---- */

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("invalid",event => {
    input.classList.add("error");},false
  );
});

/*---------------------------------------------------------*/


