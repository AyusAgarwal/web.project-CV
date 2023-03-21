// console.log("succes");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.nav').classList.toggle('navgo');
    if(document.querySelector('.nav').classList.contains('navgo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.ham').style.display='none';
    }
})