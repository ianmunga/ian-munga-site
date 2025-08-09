const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-visible'); });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const hero = document.querySelector('.hero-media');
if (hero){
  window.addEventListener('scroll', ()=>{
    const y = Math.min(1, window.scrollY / 600);
    hero.style.transform = `translateY(${y*20}px)`;
  }, {passive:true});
}
