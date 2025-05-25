function clean(){
    document.getElementById('screen').value = ''
}

function remove(){
    const screen = document.getElementById('screen')
    screen.value = screen.value.slice(0, -1); //gpt helped me
}

function takeDigit(num){
    document.getElementById('screen').value += num
}

//function showOperation(operation){
//    document.getElementById('screen').value = operation
//}

function calculate(){
    const result = Number(eval(document.getElementById('screen').value))
    document.getElementById('screen').value = result
}