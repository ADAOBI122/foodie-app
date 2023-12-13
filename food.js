let homeBar = document.getElementById("firstBar");
let firstBarTwo =document.getElementById("firstBarTwo");

window.addEventListener('scroll',() => {
     homeBar.style.display = 'none'
     firstBarTwo .style.display ='flex'
});
// end

// shop section of unlimited chicken
let order = document.querySelectorAll('#now');
let card = document.querySelectorAll('#chickenUnlimited')
order.addEventListener('click',()=>{
  
});

 


//  end
// search drop down 

let search =document.getElementById("search");
let seen = document.getElementById("seen");
seen.addEventListener('click',()=>{
search.style.display='block'

});
window.addEventListener('mouseout',()=>{
     search.style.display='none'
})
