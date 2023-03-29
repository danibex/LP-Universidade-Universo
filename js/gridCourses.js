$("#btn-ead").click(function (e) {
    e.preventDefault()
    $('.presencial').fadeOut(600)
    $(".ead").fadeIn(600)
    $("")
   });
   
   $("#btn-presencial").click(function (e) {
    e.preventDefault()
    $(".ead").fadeOut(600)
    $(".presencial").fadeIn(600)
   });
   $('#btn-todos').click(function(e) {
     e.preventDefault()
     $(".presencial").fadeIn(600)
     $(".ead").fadeIn(600)
   })
   