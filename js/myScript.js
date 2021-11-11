(function() {
    //start
    document.getElementById("myHeading").innerHTML = "Mohammed";
    document.querySelector("nav ul li").setAttribute("class", "currentPage");
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

    // DOM event
  //  document.getElementById('myTestEvent').onclick = myFunction;
//function myFunction(){
//console.info('hi');
//}

// addEventListener
document.getElementById('myTestEvent').addEventListener('click',
function(ev){
console.dir(ev);
});


    //end
})();