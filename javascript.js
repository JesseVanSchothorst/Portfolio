//hamburger
const toggle = document.querySelector(".toggle-btn")
const toggleIcon = document.querySelector(".toggle-btn i")
const dropdown = document.querySelector(".dropdown")

toggleIcon.onclick = function() {
    dropdown.classList.toggle("show")
    const isOpen = dropdown.classList.contains("show")

    toggleIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}



// Scroll indicator and back to top button
window.onscroll = function() {
    myFunction();
    scrollFunction();
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// Cool scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("transition");
    } else {
      entry.target.classList.remove("transition");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


//FOR BOLD SCROLL THING
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('#nav a');
  var sections = document.querySelectorAll('section');
  
  function checkSectionInView() {
    var currentSection = '';

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('data-section') == currentSection) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  checkSectionInView();
  window.addEventListener('scroll', function() {
    checkSectionInView();
  });




const subheadingElement = document.getElementById('subheading');
const subheadingTexts = [
 '"Jesse frequently exceeds expectations as a result of his sharp focus on identifying and meeting goals which lead to timely, accurate, and thorough fulfillment of deliverables." - Tim Frantz; Lethbridge College Proffessor',
  '"Always works hard towards completion of tasks, Always there to help others as well" - Alex Pham; Bits by Bytes Software Development Team Member ',
  '"You can count on Jesse to cover for anyone and shows up to work early everytime" - Coworker from Sobeys Uplands'
];

class SubheadingRotator {
  constructor(element, texts, interval) {
    this.element = element;
    this.texts = texts;
    this.interval = interval;
    this.currentIndex = 0;
  }

rotateSubheading() {
    console.log("Rotating subheading...");
    this.element.innerText = this.texts[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    console.log("New index:", this.currentIndex);
    setTimeout(() => this.rotateSubheading(), this.interval);
}


  startRotation() {
    this.rotateSubheading();
  }
}

const subheadingRotator = new SubheadingRotator(subheadingElement, subheadingTexts, 8000);
subheadingRotator.startRotation();

});



