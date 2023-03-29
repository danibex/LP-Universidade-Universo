$('#ancoraInicio').click(function() {
    $('#ancoraInicio').addClass('active')  
    $('#ancoraCursos').removeClass('active')  
    $('#ancoraContato').removeClass('active')  
  })
  $('#ancoraCursos').click(function() {
    $('#ancoraCursos').addClass('active')  
    $('#ancoraInicio').removeClass('active')  
    $('#ancoraContato').removeClass('active')  
  })
  $('#ancoraContato').click(function() {
    $('#ancoraContato').addClass('active')  
    $('#ancoraCursos').removeClass('active')  
    $('#ancoraInicio').removeClass('active')  
  })