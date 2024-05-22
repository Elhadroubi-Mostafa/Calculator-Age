// let datenow = new Date();
// // let birth = Date.parse(input.value);
// let birth = Date.parse('12/08/1996')
// let second = Math.floor((datenow - birth)/1000);
// let year = second/3600/24/365;
// let month = (year - Math.floor(year)) * 12;
// let day =  (month - Math.floor(month)) * 30;
// console.log(Math.floor(year));
// console.log(Math.floor(month));
// console.log(Math.floor(day));

let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
let datenow = new Date();
let birth = Date.parse(input.value);
let second = Math.floor((datenow - birth)/1000);
let year = second/3600/24/365;
let month = (year - Math.floor(year)) * 12;
let day =  (month - Math.floor(month)) * 30;
document.querySelector('.age').innerHTML = `Your age is: 
${Math.floor(year)} year, ${Math.floor(month)} month,
${Math.floor(day)} day`;
document.querySelector('.result').style.display = 'block';
})
setInterval(time, 1000);
function time(){
const d = new Date();
document.querySelector(".clock").innerHTML = d.getHours() + 
':' + d.getMinutes() + ':' + d.getSeconds();
}
time();