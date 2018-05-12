(function($) {
  "use strict";


  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });
  
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  
  navbarCollapse();
  
  $(window).scroll(navbarCollapse);

})(jQuery);


var portfolioApp = angular.module('app', []);
 
 portfolioApp.controller('portfolio', function($scope){
    // // dane
    $scope.portfolio = [
                    { Tytul: 'Farba', Icon: 'img/portfolio/baby_icon.jpg', Photo: 'img/portfolio/baby.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.' },
                    { Tytul: 'Kafelki', Icon: 'img/portfolio/bath_icon.jpg', Photo: 'img/portfolio/bath.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.' },
                    { Tytul: 'Panele', Icon: 'img/portfolio/floor_icon.jpg', Photo: 'img/portfolio/floor.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.'},
                    { Tytul: 'Gładzie', Icon: 'img/portfolio/hall_icon.jpg', Photo: 'img/portfolio/hall.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.' },
                    { Tytul: 'Tapeta', Icon: 'img/portfolio/hall_2_icon.jpg', Photo: 'img/portfolio/hall_2.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.' },
                    { Tytul: 'Drewno', Icon: 'img/portfolio/korytarz_icon.jpg', Photo: 'img/portfolio/korytarz.jpg', Data: '15.11.2017', Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus, at aliquid vero unde repellat, libero ipsum itaque sit nisi consectetur dicta doloremque. Modi, ipsum deleniti cumque. Doloremque, quos aliquid.'}
            ];        

 });