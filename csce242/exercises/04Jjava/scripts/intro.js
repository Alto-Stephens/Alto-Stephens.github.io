
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

/*Plant health*/
document.getElementById("num-days").onkeyup = (e)=>{
    const numDays=parseInt(e.target.value);
    const pMessage = document.getElementById("plant-msg");
    pMessage.innerHTML = numDays;
    const plantImage = document.getElementById("img-plant")

    if(numDays >= 0 && numDays <=2){
        if(numDays == 1){
            pMessage.innerHTML = `Let your plant rest it's only been ${numDays} day`;
            plantImage.src="https://static.vecteezy.com/system/resources/thumbnails/057/377/760/small/concept-of-circular-economy-with-eco-friendly-product-lifecycle-recyclable-materials-in-focus-photo.jpg"; 
        }else{
            pMessage.innerHTML = `Let your plant rest it's only been ${numDays} days`;
        }
    }else if(numDays <= 5){
            pMessage.innerHTML = `Time to water it's been ${numDays} days!`;

    }else if(numDays <= 7){
            pMessage.innerHTML = `Your plant is dying it's been ${numDays} days since watering`;

    }else{
            pMessage.innerHTML =   `Your plant is dead it's been ${numDays} days since watering`;
    }
}

/*Counter*/
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart=document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");

btnPause.disabled = true;
btnStop.disabled = true;



document.getElementById("btn-start").onclick = () =>{
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },1000);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
}
document.getElementById("btn-pause").onclick = () =>{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;

}
document.getElementById("btn-stop").onclick = () =>{
    count=0;
    pCount.innerHTML="";
    btnStart.disbaled = false;
    btnPause.disabled = false;
    btnStop.disabled = true;
}

/*Date Display*/
setInterval(()=>{
    const pDisplay = document.getElementById("date-display");
    const today = new Date();
    const secs = today.getSeconds();
    const mins = today.getMinutes();
    const hours = today.getHours();

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    pDisplay.innerHTML = `${hours}:${mins}:${secs}  ${month}/${day}/${year}`


},1000);

/*Thermometer*/
document.getElementById("btn-donation").onclick =()=>{
    const userDonation = parseInt(document.getElementById("txt-donation").value);
    const donationP = document.getElementById("donation-txt");
    const percent = (userDonation /  10000)*100;

    donationP.innerHTML = `You are ${percent.toFixed(1)}% to your goal`;
}

/*loops*/
document.getElementById("loop-btn").onclick =()=>{
    const loopTxt = document.getElementById("loop-msg");
    for(i = 1;i<=10;i++){
        let p = document.createElement("p")
        p.innerHTML = i
        loopTxt.append(p);
    }
}

/*loops with range*/
document.getElementById("btn-range").onclick=()=>{
    const startText= document.getElementById("start-txt").value;
    const endText = document.getElementById("end-txt").value;
    const errorStart = document.getElementById("error-start");
    errorStart.classList.add("hidden");
    const errorEnd = document.getElementById("error-end");
    errorEnd.classList.add("hidden");
    const ul = document.getElementById("range-list");


    if(isNaN(startText) || startText < 0 || startText>5){
        errorStart.innerHTML = "Invalid";
        errorStart.classList.remove("hidden");
        return;
    }
    if(isNaN(endText) || endText < 0 || endText>5 || endText < startText){
        errorEnd.innerHTML = "Invalid"
        errorEnd.classList.remove("hidden");
        return;   
    }

    for(let i = parseInt(startText); i < parseInt(endText); i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }
}

/*loops*/
document.getElementById("show-toys").onclick = ()=>{
    const toys = ["doll","skate board","action figure","xbox","roller skates","trampoline" ]
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    for(let i = onabort; i < toys.length; i++){
        const p = document.createElement("p");
        p.innerHTML = toys[i];
        toyList.append(p);

    }
}