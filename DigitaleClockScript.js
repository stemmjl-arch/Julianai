const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elColon = document.getElementById('colon');
const elColon2 = document.getElementById('colon2');
const elDate = document.getElementById('date');
const tzSelect = document.getElementById('timezone-select');

let currentTZ = tzSelect.value; // Standard EU Berlin

tzSelect.addEventListener('change', ()=>{
  currentTZ = tzSelect.value;
});

let lastSecond = null;

function render(){
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("de-DE",{
    timeZone: currentTZ,
    hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:false
  });
  const parts = fmt.formatToParts(now);
  const h = parts.find(p=>p.type==="hour").value;
  const m = parts.find(p=>p.type==="minute").value;
  const s = parts.find(p=>p.type==="second").value;

  elHours.textContent = h;
  elMinutes.textContent = m;
  elSeconds.textContent = s;

  if(lastSecond===null) lastSecond=s;
  if(s!==lastSecond){
    elColon.classList.remove('dim');
    elColon2.classList.remove('dim');
    setTimeout(()=>{elColon.classList.add('dim'); elColon2.classList.add('dim');},160);
    lastSecond=s;
  }

  const fmtDate = new Intl.DateTimeFormat("de-DE",{
    timeZone: currentTZ,
    weekday:"short", day:"2-digit", month:"2-digit", year:"numeric"
  });
  elDate.textContent = "Datum: " + fmtDate.format(now);

  requestAnimationFrame(render);
}

elColon.classList.add('dim');
elColon2.classList.add('dim');
requestAnimationFrame(render);
