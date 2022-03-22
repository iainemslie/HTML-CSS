
// Menu bar slide from side
const menuToggle = document.querySelector('.toggle')
        const showcase = document.querySelector('.showcase')
        const text = document.querySelector('.text')

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')
            text.classList.toggle('active')
        });



// Typewriter effect on title
class TypeWriter {
    constructor(txtElement, word, wait = 3000) {
      this.txtElement = txtElement;
      this.word = word;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex;
      // Get full text of current word
      const word = "Maudlin Library.";

      this.txt = this.word.substring(0, this.txt.length + 1);
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 310;

      this.wordIndex++;
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }

    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);
  
    // Init App
    function init() {
      const txtElement = document.querySelector('.typewriter');
      const word = txtElement.getAttribute('data-word');
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, word, wait);
    }