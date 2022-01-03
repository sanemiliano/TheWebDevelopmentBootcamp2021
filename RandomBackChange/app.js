const getRandomColor = function(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

const changer = document.querySelector('#colorChanger');
const myh2 = document.querySelector('h2');

changer.addEventListener('click', function(){   
    let newcolor = getRandomColor();
    myh2.innerText = newcolor; 
    document.body.style.backgroundColor = newcolor;
});

