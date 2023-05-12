const buttons = document.querySelectorAll('button')
const input = document.querySelector('#result')


for ( let btn of buttons){
     btn.addEventListener('click', function(){
          const number = btn.innerText;
          
          if ( number === 'C'){
               reset()
          }
          else if ( number === '='){
               calculation()
          }
          else {
               showvalue(number)
          }
     })
}

function reset(){
     input.value = ''
}

function calculation(){
     input.value = eval(input.value)
}

function showvalue(number){
     input.value += number

}