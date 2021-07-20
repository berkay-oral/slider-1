let prev = document.querySelector("#prev");
prev.addEventListener("click", prevGo);


let next = document.querySelector("#next");
next.addEventListener("click", nextGo);

let images = document.querySelectorAll(".slide");
let imagesNum = document.querySelectorAll(".slide").length;

let indexImg = 0;
let translateX = 0;











function prevGo(){

     translateX  -= 250; 
     console.log(translateX);
 
     images.forEach(function (image){
        image.style.transform = `translateX(${translateX}px)`;
    });

    // -250
    if(translateX  < 0){
        next.style.display="block";
         
    }
   
    //  -1000
    if(translateX == -1000){
        prev.style.display="none";
    }



    
     
}



function nextGo(){

    translateX += 250; 
    console.log(translateX);

    images.forEach(function (image){
        image.style.transform = `translateX(${translateX}px)`;
     });

     if(translateX > -250){
       next.style.display="none";
     }

     //  -750
     if(translateX >   -1000){
        prev.style.display="block";
    }


}



let fullImage = document.querySelector("#slideImage");
let  imgBoxes = document.querySelectorAll("img");
let bdy = document.querySelector("#bdy");

imgBoxes.forEach(function (imgBox){
    imgBox.addEventListener("click", showImage);

    function showImage(event){

        
            //olay hedeflenirse(click olursa) id si box1 olana
            if(event.target.id == "img1"){
                fullImage.setAttribute("src",  "img/n1.jpg");//özniteliğini değpiştir
            
            }

            else if(event.target.id == "img2"){
                fullImage.setAttribute("src",  "img/n2.jpg");


            }

            else if(event.target.id == "img3"){
                fullImage.setAttribute("src",  "img/n3.jpg");

            }

            
            else if(event.target.id == "img4"){
                fullImage.setAttribute("src",  "img/n4.jpg");

            }

                
            else if(event.target.id == "img5"){
                fullImage.setAttribute("src",  "img/n5.jpg");

            }

                
            else if(event.target.id == "img6"){
                fullImage.setAttribute("src",  "img/n6.jpg");

            }

                
            else if(event.target.id == "img7"){
                fullImage.setAttribute("src",  "img/n3.jpg");

            }
           
       
         

            else{
                fullImage.innerHTML = '<img src="img/n1.jpg" alt="">';

            }

            fullImage.animate([ {opacity:'0.2'}, {opacity:'1'}], {duration:1000, fill:'forwards'});
    }



    
})








let caresoulArea = document.querySelector(".caresoul");


//responsive JAVASCRIPT
function myFunction(x) {
    if (x.matches) { // If media query matches

        caresoulArea.style.width="100%";


        document.querySelector(".slideFull").style.width="100%"
    } else {

        caresoulArea.style.width="58%";

        document.querySelector(".slideFull").style.width="55%"



    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes








  
//fullImage  autoSlide
let imagesArr = ["img/n1.jpg", "img/n2.jpg", "img/n3.jpg", "img/n4.jpg", "img/n5.jpg", "img/n6.jpg", "img/n1.jpg"]
let index = 0;

let ınterval;

function autoSlide(){
  interval =  setInterval(function(){
 
            let imageSrc = document.querySelector("#slideImage");
            if(index < (imagesArr.length-1)){
                index++;
                imageSrc.setAttribute("src",  imagesArr[index]);
            }

            else{
                index= 0;
            }
     fullImage.animate([ {opacity:'0.2'}, {opacity:'1'}], {duration:1000, fill:'forwards'});//opactiy 1 saniyede açılsın

}, 3000);//3 saniyede resimler değişsin
}

 autoSlide();

// //mouse butonun üzerine gelince slayt dursun
 document.querySelectorAll(".slide").forEach(function(mybtn){
     mybtn.addEventListener("mouseenter", function(){
         clearInterval(interval);

     })
 })


 //mouse butonun üzerine gelince slayt dursun
 document.querySelectorAll(".slide").forEach(function(mybtn){
     mybtn.addEventListener("mouseleave", function(){
         autoSlide();

     })
 })





