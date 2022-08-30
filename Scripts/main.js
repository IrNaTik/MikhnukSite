"use strict";

let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let onFocusLeft = false;
let onFocusRight = false;
let images = document.querySelectorAll(".img");
// console.log(images[0]);
// for (let image of images) {
//     console.log(image);
// }

let isCarusel = false; //Is it a carusel right now?



//Data of ellipse
// Why can not I get css data and qualities?

let aEllipse = 100; //Width of ellipse
let bEllipse = 30;
let yPositions = [300, 330, 300];//first image, second, third
let xPositions = [200, 300, 400];

//Animations of focusing the mouse
leftArrow.addEventListener("mouseover", () => {
    leftArrow.classList.toggle("arrowFocus");
})

leftArrow.addEventListener("mouseout", () => {
    leftArrow.classList.toggle("arrowFocus");
})

rightArrow.addEventListener("mouseover", () => {
    rightArrow.classList.toggle("arrowFocus");
})

rightArrow.addEventListener("mouseout", () => {
    rightArrow.classList.toggle("arrowFocus");
})



function frameLeft(id) {
    let aEllipse = 100; //Width of ellipse
    let bEllipse = 30;
    let images = document.querySelectorAll(".img");
    let yPositions = [300, 330, 300];//first image, second, third
    let xPositions = [200, 300, 400];
    let i=2;
    if (i <= 400){
        // for(let i=0; i<=images.length-1; i++) {
        //     if (xPositions[i] <= 300) {//First root of the equation
        //         xPositions[i] = -(((yPositions[i]+300-bEllipse)*(yPositions[i]+300+bEllipse)*(aEllipse/bEllipse)**(0.5))**(0.5)) + 300;

        //     } else {
        //         xPositions[i] = (((yPositions[i]+300-bEllipse)*(yPositions[i]+300+bEllipse)*(aEllipse/bEllipse)**(0.5))**(0.5)) + 300;
        //     }
        //     console.log(images[i].style.marginLeft);
        //     images[i].style.marginLeft = xPositions[i]+"px";
        //     images[i].style.marginTop = -yPositions[i]+"px";
        // }
        images[0].style.marginLeft = i+"px";
        i++;

    } else{
        clearInterval(id);//id=null
    }


}







function moveCarusel(movingSide) {
    if (movingSide == "left") {
        let id = null;
        clearInterval(id);
        id = setInterval(frameLeft(id), 5);
        function frameLeft(id) {
            let aEllipse = 100; //Width of ellipse
            let bEllipse = 30;
            let images = document.querySelectorAll(".img");
            let yPositions = [300, 330, 300];//first image, second, third
            let xPositions = [200, 300, 400];
            let i=2;
            if (i <= 400){
                // for(let i=0; i<=images.length-1; i++) {
                //     if (xPositions[i] <= 300) {//First root of the equation
                //         xPositions[i] = -(((yPositions[i]+300-bEllipse)*(yPositions[i]+300+bEllipse)*(aEllipse/bEllipse)**(0.5))**(0.5)) + 300;
        
                //     } else {
                //         xPositions[i] = (((yPositions[i]+300-bEllipse)*(yPositions[i]+300+bEllipse)*(aEllipse/bEllipse)**(0.5))**(0.5)) + 300;
                //     }
                //     console.log(images[i].style.marginLeft);
                //     images[i].style.marginLeft = xPositions[i]+"px";
                //     images[i].style.marginTop = -yPositions[i]+"px";
                // }
                images[0].style.marginLeft = i+"px";
                i++;
        
            } else{
                clearInterval(id);//id=null
            }
        
        
        }
        

    } else if (movingSide == "right") {

    }
}

//Reaction on click
leftArrow.addEventListener("click", () => {
    if (isCarusel != true) {
        moveCarusel("left");
    }
    isCarusel = true;

})

rightArrow.addEventListener("click", () => {
    if (isCarusel != true) {
        moveCarusel("right");
    }
    isCarusel = true;
})

// function myMove() {
//     let id = null;
//     const elem = document.getElementById("animate");   
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         elem.style.top = pos + "px"; 
//         elem.style.left = pos + "px"; 
//       }
//     }
//   }