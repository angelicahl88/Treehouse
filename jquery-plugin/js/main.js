$('.animsition').animsition({
  inClass: 'fade-in-up-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 700
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
})
.on('sticky-start', function() {
  $('h1.description').html('We build <strong>great</strong> apps');
})
.on('sticky-end', function() {
  $('h1.description').html('We build apps');

});

$('h5.wantToWork').sticky({
  topSpacing: 64,
  getWidthFrom: '.container',
  responsiveWidth: true
})
.on('sticky-start', function() {
  $('h5.wantToWork').append('<a id="emailSticky" href="#">Email us</a>');
})
.on('sticky-end', function() {
  $('a#emailSticky').remove();
});
