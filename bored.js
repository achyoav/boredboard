
function aciticiti () {
    var myArray = ['January', 'February', 'March', 'nigga', 'nigg', 'nignig','kike'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    const elm = document.querySelector(".box");
    elm.textContent = rand
}

