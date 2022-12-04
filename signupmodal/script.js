var sbtn = document.getElementById('signup')
var cbtn = document.getElementById('closebtn')
sbtn.addEventListener('click', ()=>{
  document.getElementById('btn').style.display ='none'
  document.getElementById('modal').style.display = 'inline-block'
  document.getElementById('modal').style.display = 'flex'
  document.getElementById('modal').style.animation = 'slide'
})
cbtn.addEventListener('click', ()=>{
  document.getElementById('btn').style.display ='block'
  document.getElementById('modal').style.display = 'none'
})