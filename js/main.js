$(document).ready(function() {
    $(`.openMenu`).click(function() {
      let leftMenuWidth = $(`.leftMenu`).outerWidth(true);
      let currentLeft = parseInt($(`#MenuPage .leftMenu`).css('left')); 
  
      let targetLeft = (currentLeft === 0) ? `-${leftMenuWidth}px` : "0px"; 
  
      $(`#MenuPage .leftMenu`).animate({ left: targetLeft }, 300);
    }); 
  

    const countdownDaysElement = document.getElementById('Days');
    const countdownHoursElement = document.getElementById('hours');
    const countdownMinutesElement = document.getElementById('minutes');
    const countdownSecondsElement = document.getElementById('seconds');
  
    const targetDate = new Date('2029-01-01T00:00:00').getTime(); 
  
    setInterval(updateCountdown, 1000); 

    function updateCountdown() {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      countdownDaysElement.innerHTML = `${days}d`; 
      countdownHoursElement.innerHTML = `${hours}h`;
      countdownMinutesElement.innerHTML = `${minutes}m`;
      countdownSecondsElement.innerHTML = `${seconds}s`;
  
      if (timeRemaining < 0) {
        clearInterval(updateCountdown);
        countdownDaysElement.parentElement.innerHTML = "Countdown Expired!"; 
      }
    }
  }); 