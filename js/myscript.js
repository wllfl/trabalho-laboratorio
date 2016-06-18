
$(document).ready(function(){

    $('.parallax').parallax();

    $('.button-collapse').sideNav();

	function filterPath(string) {
		return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}

	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
		&& location.hostname == this.hostname
		&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
					$('html, body').animate({scrollTop: targetOffset}, 600);
					return false;
				});
			}
		}
	});

	$('#enviar').on('click', function(){
        var dados = $('#form-contato').serialize();

        $.ajax({
            url: 'envia_email.php',
            type: 'POST',
            data: dados,
            dataType: "json",
            success: function(data) {
                if(data.erro == "0"){
                   $('.msg').html(data.mensagem).removeClass('erro').removeClass('alerta').addClass('sucesso');
                }else{
                    if(data.erro == "1"){
                        $('.msg').html(data.mensagem).removeClass('sucesso').removeClass('alerta').addClass('erro');
                    }else{
                        $('.msg').html(data.mensagem).removeClass('sucesso').removeClass('erro').addClass('alerta');
                    }
                }
            }
        });
    });
});
	