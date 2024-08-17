const menu_bar =document.getElementById('menu_bar')
const menu_btn =document.getElementById('menu_btn')
const close_btn =document.getElementById('close_btn')

menu_btn.addEventListener('click',()=>{
    menu_bar.style.display='block'
    menu_btn.style.display='none'
    close_btn.style.display='block'
})
close_btn.addEventListener('click',()=>{
  
    menu_bar.style.display='none'
    menu_btn.style.display='block'
    close_btn.style.display='none'
   
})
