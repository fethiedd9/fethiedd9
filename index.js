setTimeout(function() {
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";
  },6500);





  function showAlert() {
    alert("Yo! Damn It seems like you wanted to see more!!! That's great!  Just gimme some time. I am currently working on it + I idk but I have a feeling that it will certainly blow your mind away when IT'S READY. Peace and take care! /Fethi Edd.");
}





  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}-${month}-${year}`;

    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateClock, 1000);