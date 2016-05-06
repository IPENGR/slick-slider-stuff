<script>
jQuery(document).ready(function( $ ) {
$('.novosti-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  //autoplay: true,
  //autoplaySpeed: 5500,
  speed: 60,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});
</script>
