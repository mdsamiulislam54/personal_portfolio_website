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
const menu_bar_2 =document.getElementById('menu_bar_2')
const menu_btn_2 =document.getElementById('menu_btn_2')
const close_btn_2 =document.getElementById('close_btn_2')

menu_btn_2.addEventListener('click',()=>{
    menu_bar_2.style.display='block'
    menu_btn_2.style.display='none'
    close_btn_2.style.display='block'
})
close_btn_2.addEventListener('click',()=>{
  
    menu_bar_2.style.display='none'
    menu_btn_2.style.display='block'
    close_btn_2.style.display='none'        
   
})
