const textElement = document.querySelector('.web-title');
const text = 'EcoGaze'; 
const speed = 400; 
const delay = 1500;

function typeAnimation() {
  textElement.textContent = ''; 
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        textElement.textContent = ''; 
        index = 0;
        type(); 
      }, delay);
    }
  }

  type(); 
}

window.addEventListener('load', () => {
  setTimeout(typeAnimation, 1000); // Delay start by 1000 milliseconds (1 second)
});
