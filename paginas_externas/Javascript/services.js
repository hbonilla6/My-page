window.addEventListener("load", function () {
  new Glider(document.querySelector('.carousel_lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel_anterior",
      next: ".carousel_siguiente",
    },
    responsive: [
      {
        breackpoint: 450,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
      },{
        breackpoint: 800,
        settings:{
            slidesToShow: 4,
            slidesToScroll: 4
        }
      }
    ],
  });
});
