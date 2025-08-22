const mode = document.querySelector('meta[name="mode"]').content;
let count = 0;

mode.onclick = function() {
    count++;
  if (count % 2 == 0) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    }
}