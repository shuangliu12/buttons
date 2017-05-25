$(document).ready(function() {
                var uparrows = document.getElementsByClassName('uparrow');
                for (i = 0; i < uparrows.length; i++) {
                                uparrows[i].style.display = 'none';
                }
});

function openDropdown(element, classN, idN) {        
                var dropdowns = document.getElementsByClassName(classN);

    var i;
    for (i = 0; i < dropdowns.length; i++) {

      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
                               element.getElementsByTagName('img')[0].style.display = 'inline';
                    element.getElementsByTagName('img')[1].style.display = 'none';
      } else {
                document.getElementById(idN).classList.toggle("show");
                    element.getElementsByTagName('img')[0].style.display = 'none';
                    element.getElementsByTagName('img')[1].style.display = 'inline';
                                }
      }
    }

// for icons' hover effect
function showHover(element) {
                var defaultIcon = element.getElementsByClassName("default")[0];
                var hoverIcon = element.getElementsByClassName('hover')[0];
                defaultIcon.style.display = 'none';
                hoverIcon.style.display = 'inline';
}

function showDefault(element) {
                var defaultIcon = element.getElementsByClassName("default")[0];
                var hoverIcon = element.getElementsByClassName('hover')[0];
                defaultIcon.style.display = 'inline';
                hoverIcon.style.display = 'none';
}
