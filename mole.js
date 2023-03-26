
const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole"); 
const playButton = document.querySelector(".buttons .play");
const stopButton = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

//moves image to the current position of the cursor
window.addEventListener("mousemove", function(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
    window.addEventListener("click", function() {
        //I added an animation when the user clicks
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(function() {
        cursor.style.removeProperty("animation");
    }, 100);
    });
});

//play button click event
playButton.addEventListener("click", function() {
    //when play button is clicked, it will not be displayed 
    playButton.style.display = "none";
    stopButton.style.display = "inline-block";

    //set points variable equal to zero
    let points = 0;
    const startGame = setInterval(function() {
        //generates a ranom number between 0 and 8
    let arrayNum = Math.floor(Math.random() * 9);
    //adds image to the selected random hole
    hole = holes.item(arrayNum); 

    let image = document.createElement("img");
    image.setAttribute("src", "mole.png");
    image.setAttribute("class", "mole");
    hole.appendChild(image);
    
    setTimeout(function() {
        hole.removeChild(image)
    }, 700) //removes image from hole after 700ms

    }, 900); //this game loop runs every 900ms

    //e represents the event that is getting passed through to the function
    window.addEventListener("click", function(e) { 
        //check whether the element that was clicked by the user is the same as the randomly selected hole element
        if(e.target === hole) { 
            //I need to use ++points instead of points++ in order for the first instance to increase points value. I then set inner text of point to be equal to current points
            score.innerText = ++points; 
        }
    })

    //stop button click event
    stopButton.addEventListener("click", function() {
    //stops the game 
    clearInterval(startGame);
    //hides stop button and displays play button
    stopButton.style.display = "none";
    playButton.style.display = "inline-block";
    });
});
