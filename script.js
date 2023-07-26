var countDownDate= new Date("Aug 25,2023 00:00:00").getTime();
var x=setInterval(function(){
  var currentDate=new Date().getTime();
  var distance=countDownDate-currentDate;


  var days=Math.floor(distance/1000/60/60/24);
  var hours=Math.floor((distance/1000/60/60)%24);
  var minutes=Math.floor((distance/1000/60)%60);
  var seconds=Math.floor((distance/1000)%60);


  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML=hours;
  document.getElementById("minutes").innerHTML=minutes;
  document.getElementById("seconds").innerHTML=seconds;
},1000);


