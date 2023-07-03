
var joinButton=document.getElementById('join');
var modalElement=document.getElementById('main');
joinButton.onclick=function(){
modalElement.style.right="0";
}
/* let sectionElements=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.flex-container .flexitem a');
window.onscroll=()=>{
sectionElements.forEach(section=> {
let top=window.scrollY;
let offset=section.offsetTop;
let height=section.offsetHeight;
let id=section.getAttribute('id')
if(top>=offset && top<(offset+height)){
navLinks.forEach(links=>{
links.classList.remove('active');
document.querySelector('.flex-container .flexitem a[href*='+id+']').classList.add('active');
 });
};
});
};
( function (){
document.querySelector('section').textContent='hello world'
console.log('hello world')
}
)();
 */
