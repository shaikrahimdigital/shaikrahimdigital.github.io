
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.main-nav');
 if(toggle&&nav){
   toggle.addEventListener('click',()=>{
     const open=nav.classList.toggle('open');
     toggle.setAttribute('aria-expanded',String(open));
     toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
   });
 }
 document.querySelectorAll('.dropdown-toggle').forEach(btn=>{
   btn.addEventListener('click',()=>{
     const item=btn.closest('.has-dropdown');
     const open=item.classList.toggle('open');
     btn.setAttribute('aria-expanded',String(open));
   });
 });
 // Close mobile navigation after selecting a destination.
 document.querySelectorAll('.main-nav a').forEach(link=>{
   link.addEventListener('click',()=>{
     if(window.innerWidth<=900 && nav){
       nav.classList.remove('open');
       toggle?.setAttribute('aria-expanded','false');
     }
   });
 });
 // Highlight the current internal page.
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.main-nav a').forEach(a=>{
   const href=a.getAttribute('href');
   if(href && !href.startsWith('http') && href.split('/').pop()===current){
     a.classList.add('active');
     const parent=a.closest('.has-dropdown');
     if(parent) parent.querySelector('.nav-link')?.classList.add('active');
   }
 });
 const year=document.getElementById('year');
 if(year) year.textContent=new Date().getFullYear();
 const back=document.querySelector('.back-top');
 if(back){
   window.addEventListener('scroll',()=>back.classList.toggle('visible',window.scrollY>450),{passive:true});
   back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 }
});
