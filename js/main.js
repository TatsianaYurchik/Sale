const endDate = new Date ('Jul 01, 2022  00:00:00.000 GMT+03:00').getTime()


let countDown = setInterval ( function (){
    let now = new Date().getTime();
    let term = endDate - now;
    let days = Math.floor(term / (1000*60*60*24));
    let hours = Math.floor((term % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((term % (1000*60*60))/ (1000*60));
    let seconds = Math.floor ((term % (1000*60))/1000);
    console.log(days);

document.getElementById("timer").innerHTML = days + "  d  " + hours + "  h  " + minutes + "  m  " + seconds + "  s";
if (term <0) {
    clearInterval(countDown);
    document.getElementById("timer").innerHTML = "The sale ended";
}
},1000)


