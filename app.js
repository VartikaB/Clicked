var face=document.querySelector('.button_cont');
const happyFace=document.querySelector('.happy');
const sadFace=document.querySelector('.sad');
var feel=document.getElementsByClassName("button_cont");
var emo=document.getElementsByClassName("example_c");
face.addEventListener('click', () => {
    if(feel.innerText=="Happy"){
        sadFace.classList.add('active');
        happyFace.classList.remove('active');
        feel.innerText="Sad";
      
       
            
       
    }
    
    else{
        happyFace.classList.add('active');
        sadFace.classList.remove('active');
        feel.innerText="Happy";
        document.getElementsByClassName("emotion").innerHTML=feel.innerText;
            
        
        

    }
    document.getElementsByClassName("emotion").innerHTML="Happy";


} )