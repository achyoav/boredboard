
function aciticiti () {
    var myArray = ['Read a book', 'Make some coffee', 'Watch Anime', 'Watch a movie',
     'Watch a TV show from the nineties', 'Watch a silent film','Learn a new skill online',
     'Look at your baby pictures','Have a nice day','Compliment a friend','Read a random Wikipedia article',
     'Fully listen to a music album','Go to the library and pick up a random book','Play with action figures'
    ,'Watch a nature documentary','Watch and old Disney movie','Take a walk','Talk with your parent/s'
    ,'Eat','Cook','Draw a dragon','Learn how to draw a kangaroo','Watch an old viral video','Call your grandparents.'
    ,'Fix something','Just do it', 'Learn basic programming', 'Write a song','Breath deeply','Read about a foreign country',
    'Make a paper airplane','Read our about page','Look at our "Catalog"','Look outside your window',
    'Have a drink','Read a news article'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    const elm = document.querySelector(".box");
    elm.textContent = rand
}

