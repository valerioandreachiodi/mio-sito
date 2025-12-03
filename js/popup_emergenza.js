(function(){
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('popup-close');
  const bubble = document.getElementById('bubble');
  const bubbleClose = document.getElementById('bubble-close');
  let autoHideTimer = null;

  const startDate = new Date("2025-12-01T00:00:00");
  const endDate   = new Date("2025-12-20T23:59:59");
  const now = new Date();

  // --- Popup centrale ---
  function openPopup(){
    if(overlay){
      overlay.classList.add('show');
      autoHideTimer = setTimeout(closePopup, 10000);
    }
  }
  function closePopup(){
    if(overlay){
      overlay.classList.remove('show');
      clearTimeout(autoHideTimer);
      // salva il momento della chiusura
      localStorage.setItem("popupClosedAt", Date.now());
    }
  }
  if(closeBtn){
    closeBtn.addEventListener('click', closePopup);
  }

  // --- Nuvoletta ---
  function openBubble(){
    if(bubble){
      bubble.classList.add('show');
    }
  }
  function closeBubble(){
    if(bubble){
      bubble.classList.remove('show');
    }
  }
  if(bubbleClose){
    bubbleClose.addEventListener('click', closeBubble);
  }

  // --- Logica al caricamento ---
  window.addEventListener('DOMContentLoaded', ()=>{
    if(now >= startDate && now <= endDate){
      // Popup centrale: controlla se è stato chiuso meno di un'ora fa
      const closedAt = localStorage.getItem("popupClosedAt");
      const oneHour = 60 * 60 * 1000; // ms in un'ora
      if(!closedAt || (Date.now() - closedAt > oneHour)){
        openPopup();
      }

      // Nuvoletta: sempre visibile nell'intervallo di date
      openBubble();
    }
  });
})();
