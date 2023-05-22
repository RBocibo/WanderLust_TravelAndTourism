import image from '../src/images/image1.png';
import style from './styles/style.css';
import modalstyle from './styles/modalstyle.css';

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}