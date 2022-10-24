// const input=document.getElementById('textid');
// const input=document.querySelector('#textid');
// const t=document.querySelector('#showtext');

const $=(selector)=>document.querySelector(selector)
// const input=$('#textid');
// const t=$('#showtext');
// input.addEventListener('keyup',()=>{
//     t.textContent=input.value
// })
const input=$('#textid');
const btn=$('#btn');
const content=$('#content');

btn.addEventListener('click',()=>{
    content.innerHTML=`
    <h2>${input.value}</h2>
    <img src='${input.value}'>
    `
})