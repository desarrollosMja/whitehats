//Dejar fijo el logo negro en pantalla menor a 992px INDEX
if (window.innerWidth <= 991){
  $('.logo').attr('src', './assets/img/favicon-negro.png');
} else{
      // Función para cambiar imagen del logo al hacer el scroll INDEX
      $(function() {
        $(document).scroll(function() {
          if ($(this).scrollTop() > 1) {
            $('.logo').attr('src', './assets/img/favicon-negro.png')
          }
          if ($(this).scrollTop() < 1) {
            $('.logo').attr('src', './assets/img/logo-whitehats-blanco-200-200.png');
          }
        });
      });
}

//Dejar fijo el logo negro en pantalla menor a 992px SERVICIOS
if (window.innerWidth <= 991){
  $('.logoServicios').attr('src', '../assets/img/favicon-negro.png');
} else{
      // Función para cambiar imagen del logo al hacer el scroll SERVICIOS
      $(function() {
        $(document).scroll(function() {
          if ($(this).scrollTop() > 1) {
            $('.logoServicios').attr('src', '../assets/img/favicon-negro.png')
          }
          if ($(this).scrollTop() < 1) {
            $('.logoServicios').attr('src', '../assets/img/logo-whitehats-blanco-200-200.png');
          }
        });
      });
}



// Función para ir haciendo aparecer las secciones al hacer scroll
  //INDEX
  if (window.innerWidth > 991){  
      //MEDIA QUERY PARA DESKTOP
      $(function() {
        $(document).scroll(function() {
          //ABOUT
          if ($(this).scrollTop() > 10) {
            $("#about").addClass("mostrar3s");
            $("#pabloGimenez").addClass("acercar2s");
            $("#monicaGonzaga").addClass("acercar2s");
            $("#susanaRocasalvo").addClass("acercar2s");
          }

          //SERVICES
          if ($(this).scrollTop() > 600) {
            $("#services").addClass("mostrar3s");
          }

          //PORTFOLIO
          if ($(this).scrollTop() > 900) {
            $("#portfolio1").addClass("acercar2s");
          }
          if ($(this).scrollTop() > 900) {
            $("#portfolio2").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 900) {
            $("#portfolio3").addClass("acercar1s");
          }
          if ($(this).scrollTop() > 900) {
            $("#portfolio4").addClass("acercar1s");
          }
          if ($(this).scrollTop() > 900) {
            $("#portfolio5").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 900) {
            $("#portfolio6").addClass("acercar2s");
          }

          //LLAMADA A LA ACCION
          if ($(this).scrollTop() > 1400) {
            $("#llamadoAlaAccion").addClass("mostrar3s");
          }

          //CONTACT
          if ($(this).scrollTop() > 1600) {
            $("#contact").addClass("mostrar3s");
          }

          //ELEMENTOS DEL FORM
          if ($(this).scrollTop() > 1900) {
            $("#nameInput").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 2000) {
            $("#emailInput").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 2100) {
            $("#phoneInput").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 2200) {
            $("#msgInput").addClass("acercar3s");
          }
          if ($(this).scrollTop() > 2300) {
            $("#submitButton").addClass("acercar3s");
          }

        });
    });
  } else{
    //MEDIA QUERY PARA CEL Y TABLET
    $(function() {
      $(document).scroll(function() {
        //ABOUT
        if ($(this).scrollTop() > 10) {
          $("#about").addClass("mostrar3s");
          $("#pabloGimenez").addClass("acercar2s");
          $("#monicaGonzaga").addClass("acercar3s");
          $("#susanaRocasalvo").addClass("acercar4s");
        }

        //SERVICES
        if ($(this).scrollTop() > 600) {
          $("#services").addClass("mostrar3s");
        }

        //PORTFOLIO
        if ($(this).scrollTop() > 900) {
          $("#portfolio1").addClass("acercar3s");
        }
        if ($(this).scrollTop() > 1000) {
          $("#portfolio2").addClass("acercar3s");
        }
        if ($(this).scrollTop() > 1100) {
          $("#portfolio3").addClass("acercar3s");
        }
        if ($(this).scrollTop() > 1200) {
          $("#portfolio4").addClass("acercar3s");
        }
        if ($(this).scrollTop() > 1300) {
          $("#portfolio5").addClass("acercar3s");
        }
        if ($(this).scrollTop() > 1400) {
          $("#portfolio6").addClass("acercar3s");
        }

        //LLAMADA A LA ACCION
        if ($(this).scrollTop() > 1900) {
          $("#llamadoAlaAccion").addClass("mostrar4s");
        }

        //CONTACT
        if ($(this).scrollTop() > 2100) {
          $("#contact").addClass("mostrar4s");
        }

        //ELEMENTOS DEL FORM
        if ($(this).scrollTop() > 2500) {
          $("#nameInput").addClass("acercar4s");
        }
        if ($(this).scrollTop() > 2600) {
          $("#emailInput").addClass("acercar4s");
        }
        if ($(this).scrollTop() > 2700) {
          $("#phoneInput").addClass("acercar4s");
        }
        if ($(this).scrollTop() > 2800) {
          $("#msgInput").addClass("acercar4s");
        }
        if ($(this).scrollTop() > 2900) {
          $("#submitButton").addClass("acercar4s");
        }

      });
    });
  }
  
  //SERVICIOS EN GENERAL
  if (window.innerWidth > 991){
    //MEDIA QUERY PARA DESKTOP
    $(function(){
      $(document).scroll(function() {
        
        //#principalServicios
        if ($(this).scrollTop() > 200) {
          $("#principalServicios").addClass("mostrar3s");
        }

        //PLANES
        if ($(this).scrollTop() > 700) {
          $("#planEmprendedor").addClass("acercar3s");
          $("#planIntermedio").addClass("acercar3s");
          $("#planAvanzado").addClass("acercar3s");
        }
      });
    });
  } //MEDIA QUERY PARA CEL Y TABLET
    else{
      if ($(this).scrollTop() > 800) {
        $("#planEmprendedor").addClass("acercar2s");
        $("#planIntermedio").addClass("acercar3s");
        $("#planAvanzado").addClass("acercar4s");
      }
  }