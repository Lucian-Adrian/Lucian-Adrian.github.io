const slides = await fetch('/pitch/pitch-data.json').then(response => {if(!response.ok)throw new Error('The slides could not be loaded.');return response.json();});
const element = id => document.getElementById(id);
let current = Math.min(slides.length - 1, Math.max(0, Number(location.hash.slice(1)) - 1 || 0));
const overview = element('overview');
for(const [index,slide] of slides.entries()){
  const button=document.createElement('button');
  button.setAttribute('aria-label',`Show slide ${index+1}: ${slide.title}`);
  const image=document.createElement('img');image.src=`/pitch/${slide.image}`;image.alt=slide.title;image.loading='lazy';
  const caption=document.createElement('span');caption.textContent=`${String(index+1).padStart(2,'0')}  ${slide.title}`;
  button.append(image,caption);button.addEventListener('click',()=>{show(index);element('slide-frame').scrollIntoView({behavior:'smooth',block:'start'});});overview.append(button);
  if(slide.note){const title=document.createElement('h2');title.textContent=slide.title;const paragraph=document.createElement('p');paragraph.textContent=slide.note;element('full-script').append(title,paragraph);}
}
function show(index){
  current=Math.max(0,Math.min(slides.length-1,index));const slide=slides[current];
  element('slide-image').src=`/pitch/${slide.image}`;element('slide-image').alt=slide.title;
  element('counter').textContent=`${String(current+1).padStart(2,'0')} / ${slides.length}`;
  element('progress-fill').style.width=`${(current+1)/slides.length*100}%`;
  element('previous').disabled=current===0;element('next').disabled=current===slides.length-1;
  element('notes-title').textContent=`${current+1}. ${slide.title}`;
  element('note').textContent=slide.note||'Pause here while the visual connects the student journey and the operator workflow.';
  [...overview.children].forEach((button,index)=>button.classList.toggle('selected',index===current));
  history.replaceState(null,'',`#${current+1}`);
  const research=current===6,passport=current===25,contact=current===slides.length-1;element('qr-panel').hidden=!research&&!passport;
  if(research||passport){const url=research?'https://trydomi.vercel.app/blog':'https://trydomi.vercel.app/app';const label=research?'Read the 23 startup stories':'Create your Domi Passport';element('qr-link').href=url;element('qr-label').href=url;element('qr-label').textContent=label;element('qr-image').src=`/pitch/${research?'research':'passport'}-qr.png`;element('qr-image').alt=`Scan to ${label.toLowerCase()}`;}
  element('passport-action').hidden=current!==10;
  element('contact-bar').hidden=!contact;
  element('presentation').classList.toggle('has-contact',contact);
  if(slides[current+1]){const preload=new Image();preload.src=`/pitch/${slides[current+1].image}`;}
}
function toggleNotes(){const panel=element('speaker-panel');panel.hidden=!panel.hidden;element('notes-toggle').setAttribute('aria-pressed',String(!panel.hidden));}
function toggleOverview(){overview.hidden=!overview.hidden;element('overview-toggle').setAttribute('aria-expanded',String(!overview.hidden));}
async function present(){if(document.fullscreenElement)await document.exitFullscreen();else await element('presentation').requestFullscreen();}
element('previous').addEventListener('click',()=>show(current-1));element('next').addEventListener('click',()=>show(current+1));
element('notes-toggle').addEventListener('click',toggleNotes);element('overview-toggle').addEventListener('click',toggleOverview);element('present').addEventListener('click',()=>present().catch(()=>{element('slide-frame').scrollIntoView({behavior:'smooth'});}));
document.addEventListener('keydown',event=>{if(event.target.closest('input,textarea,select'))return;const key=event.key.toLowerCase();if(['arrowright','arrowleft',' ','home','end','f','n','g'].includes(key))event.preventDefault();if(key==='arrowright'||key===' ')show(current+1);if(key==='arrowleft')show(current-1);if(key==='home')show(0);if(key==='end')show(slides.length-1);if(key==='n')toggleNotes();if(key==='g')toggleOverview();if(key==='f')present().catch(()=>{});});
let touchStart; element('slide-image').addEventListener('touchstart',event=>{touchStart=event.changedTouches[0].clientX;},{passive:true});element('slide-image').addEventListener('touchend',event=>{const distance=event.changedTouches[0].clientX-touchStart;if(Math.abs(distance)>65)show(current+(distance<0?1:-1));},{passive:true});
show(current);
