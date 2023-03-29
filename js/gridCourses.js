$("#btn-ead").click(function (e) {
    e.preventDefault()
    $('.presencial').fadeOut(600)
    $(".ead").fadeIn(600)
    $("")
    $('#btn-ead').addClass('active')
    $("#btn-presencial").removeClass('active')
    $("#btn-todos").removeClass('active')
   });
   $("#btn-presencial").click(function (e) {
    e.preventDefault()
    $(".ead").fadeOut(600)
    $(".presencial").fadeIn(600)
    $("#btn-presencial").addClass('active')
    $('#btn-ead').removeClass('active')
    $("#btn-todos").removeClass('active')
   });
   $("#btn-todos").click(function(e) {
     e.preventDefault()
     $(".presencial").fadeIn(600)
     $(".ead").fadeIn(600)
     $("#btn-todos").addClass('active')
     $("#btn-presencial").removeClass('active')
     $('#btn-ead').removeClass('active')
   })
   