// select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

// set initial state of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    // set menu state
    showMenu = false;

  }
}
// Change my Name

setInterval(function () {
  // toggle the class every three second
  $('#david').toggleClass('change');
  setTimeout(function () {
    // toggle back after 1 second
    $('#david').toggleClass('change');
  }, 1000);

}, 3000);
// Change the About me Text

setInterval(function () {
  // toggle the class every three second
  $('#about').toggleClass('change');
  setTimeout(function () {
    // toggle back after 1 second
    $('#about').toggleClass('change');
  }, 1000);

}, 3000);

// Change Knowledge Text
setInterval(function () {
  // toggle the class every three second
  $('#knowledge').toggleClass('change');
  setTimeout(function () {
    // toggle back after 1 second
    $('#knowledge').toggleClass('change');
  }, 1000);

}, 2000);

// Type Writer

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function () {
  // Current Index of Word
  const current = this.wordIndex % this.words.length;
  // Get Full Text od Current Word
  const fullTxt = this.words[current];

  // CHeck if deleting
  if (this.isDeleting) {
    // Remove Character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add Character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into Element
  this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 200;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make pause
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 200;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM Load

document.addEventListener('DOMContentLoaded', init);

// Init App

function init() {
  const txtElement = document.querySelector('#sec1 .txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


// Scroll Between Sections
$(function () {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });
});

// Scroll Magic Section 2

// text appear
var block = new ScrollMagic.Controller();

$('.block').each(function () {
  var textSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9
    })
    .setClassToggle(this, 'b-appear')
    .addIndicators()
    .addTo(block);
});

var block3 = new ScrollMagic.Controller();

$('.block-3').each(function () {
  var textSlide = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9
    })
    .setClassToggle(this, 'b-appear')
    .addIndicators()
    .addTo(block3);
});