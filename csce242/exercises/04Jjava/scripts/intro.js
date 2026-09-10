
/*No parathesis, you are not calling the function*/
/*Cleanest simpliest version of code*/
document.getElementById("btn-show-message").onclick =  () => {
    console.log("Button clicked! Woo hoo!")
    document.getElementById("p-message").innerHTML = "Button was clicked successfully."
}

/*Styles the link when it's clicked*/
document.getElementById("link").onclick = (e) =>{
    console.log("Link clicked!")
    document.getElementById("link-message").innerHTML = "Link clicked successfully."

    e.preventDefault(); //Don't go to links destination
    e.target.classList.add("cool-link");
}

/*Button for starting the ball bouncing*/
document.getElementById("animation-btn").onclick =  () => {
    document.getElementById("ball").classList.toggle("bouncing-ball")
}
