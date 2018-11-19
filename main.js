/*Ajoute un trait bleu au dessus du nom de la section de page active dans la barre de navigation*/
$(document).ready(function() {
    $('#container-top li').on('click', function(){
        $('#container-top li').removeClass('active');
        $(this).toggleClass('active');
    })
});

/*Basculement sur le menu burger en mode responsive*/
$('.burger').click(function(e){
	$('nav ul').toggleClass('showMenu');
});

/*Défilement avec les flèches vers la droite ou la gauche des images du slider*/
var goRight = true;
$(function () {
	$('#arrow-right').on('click', function () {
		if (goRight){
			$('#slider figure').css('left', '-=100%');
			goRight = false;
		}
	});
	$('#arrow-left').on('click', function () {
		if (!goRight){
			$('#slider figure').css('left', '+=100%');
			goRight = true;
		}
	});
});
