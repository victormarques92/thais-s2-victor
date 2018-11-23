// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2020 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dia = $('.contagem-regressiva .dia span');
    var hora = $('.horario .hora span');
    var minuto = $('.horario .minuto span');
    var segundo = $('.horario .segundo span');

    if (days < 10) { dia.text('0' + days); } else { dia.text(days); }
    if (hours < 10) { hora.text('0' + hours); } else { hora.text(hours); }
    if(minutes < 10) { minuto.text('0' + minutes); } else { minuto.text(minutes); }
    if(seconds < 10) { segundo.text('0' + seconds); } else { segundo.text(seconds); }

    

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        $('#dataCasamento').html('EXPIRADO');
    }
}, 1000);
