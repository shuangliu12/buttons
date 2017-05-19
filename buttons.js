function openDropdown() {
    document.getElementById("dropdown1").classList.toggle("show");
    // background-color: #6BACDE;
    // color: white;
    document.getElementById('dropdown-title').style.color = 'white';
    document.getElementById('dropdown-title').style.backgroundColor = '#6BACDE';
    document.getElementById('downarrow').style.display = 'none';
    document.getElementById('uparrow').style.display = 'inline'; 
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById('downarrow').style.display = 'inline';
        document.getElementById('uparrow').style.display = 'none'; 
        document.getElementById('dropdown-title').style.color = "#CCE5F1";
        document.getElementById('dropdown-title').style.backgroundColor = '#007DB8';
      }
    }
  }
}

$( document ).ready(function() {
    document.getElementById('uparrow').style.display = 'none'; 
});