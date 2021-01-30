// JavaScript Document
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function () {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map-canvas', {
                    center: [43.244781, 76.882493],
                    zoom: 18,
                    controls: []
                });
                myPlacemark = createPlacemark([43.244781, 76.882493]);
                myMap.geoObjects.add(myPlacemark);
                myMap.behaviors.disable('scrollZoom');
                myMap.controls.add(new ymaps.control.ZoomControl({ options: { position: { right: 20, top: 90 } } }));
            });
            function createPlacemark(coords) {
                return new ymaps.Placemark(coords, {
                    iconCaption: 'поиск...'
                }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/heart.png',
                        iconImageSize: [50, 50],
                        iconImageOffset: [-15, -50],
                        draggable: false
                    });
            }
        });