
var button = document.getElementById('add');
var input = document.getElementById('input');
var ul = document.querySelector('ul')

button.addEventListener('click', function(){
    if(input.value.length > 0){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ''
    }else if(input.value == '' || input.value < 0){
        alert('please enter a list to add')
    }
})

input.addEventListener('keypress', function(event){
    if(input.value.length > 0 && event.keyCode === 13){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ''
    }
})