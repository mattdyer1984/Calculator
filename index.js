const container = document.querySelectorAll('.container');
const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')

function reloadDOM() {
    location.reload();
  }

for (let i of btns) {
  i.addEventListener('click', function() {
    display.innerHTML += this.value;
  });
}

let htmlContent = display.innerHTML;

submit.addEventListener('click', function() {
  htmlContent = display.innerHTML;
  const result = eval(htmlContent);
  display.innerHTML = result;

});

clear.addEventListener('click', () => {
    display.innerHTML = ""
    
      
})



