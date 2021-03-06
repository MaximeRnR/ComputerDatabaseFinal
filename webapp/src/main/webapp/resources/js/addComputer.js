///On load

var nameisok = false;
var diisok = true;
var ddisok = true;
var companyisok = true;

$(document).ready(function(){


	// INIT OF BUTTON
	$('#submit').prop('disabled', true);

	// ONCHANGE VALIDATION FOR EACH INPUT
	$('#name').keyup(function(){
		if(!$('#name').val().match("^[a-zA-Z0-9 ._-]+$") || $('#name').val()=="") {
			$('#name').removeClass('valid');
			$('#name').addClass('invalid');
			nameisok = false;
			allisright();
		}else {
			$('#name').removeClass('invalid');
			$('#name').addClass('valid');
			nameisok = true;
			allisright();
		}
	});
	
	

	$('#introduced').change(function(){
		if( ( $('#introduced').val().match("^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$") && 
				new Date($('#introduced').val()) < new Date(2038, 12, 01) &&
				new Date($('#introduced').val()) > new Date(1970, 01, 01) ) ||
				$('#introduced').val()=="" ) {
			$('#introduced').removeClass('invalid');
			$('#introduced').addClass('valid');
			diisok = true;
			allisright();
		}else {
			$('#introduced').removeClass('valid');
			$('#introduced').addClass('invalid');
			diisok=false;
			allisright();
		}
	});

	$('#discontinued').change(function(){
		if(( $('#discontinued').val().match("^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$") && 
				new Date($('#discontinued').val()) < new Date(2038, 12, 01) &&
				new Date($('#discontinued').val()) > new Date(1970, 01, 01) ) ||
				$('#discontinued').val()=="") {
			$('#discontinued').removeClass('invalid');
			$('#discontinued').addClass('valid');
			ddisok = true;
			allisright();
		}else {
			$('#discontinued').removeClass('valid');
			$('#discontinued').addClass('invalid');
			ddisok=false;
			allisright();
		}
	});

	$('#companyId').change(function(){
		if($('#companyId').val().match("^[0-9]+$") || $('#companyId').val()==0) {
			$('#companyId').removeClass('invalid');
			$('#companyId').addClass('valid');
			company = true;
			allisright();
		}else {
			$('#companyId').removeClass('valid');
			$('#companyId').addClass('invalid');
			company=false;
			allisright();
		}
	});

});

//VALIDATION OF ALL INPUTS TO ENABLE SUBMIT BUTTON

var allisright = function(){

	if(nameisok && diisok && ddisok && companyisok) {
		if($('#discontinued').val()!="") {
			if($('#introduced').val()!="") {
				if( new Date($('#introduced').val()) < new Date($('#discontinued').val())) {
					$('#submit').prop('disabled', false);
					$('#introduced').removeClass('invalid');
					$('#introduced').addClass('valid');
					$('#discontinued').removeClass('invalid');
					$('#discontinued').addClass('valid');
				}else {
					$('#submit').prop('disabled', true);
					$('#introduced').addClass('invalid');
					$('#discontinued').addClass('invalid');
				}
			}else{
				$('#introduced').removeClass('invalid');
				$('#introduced').addClass('valid');
				$('#discontinued').removeClass('invalid');
				$('#discontinued').addClass('valid');
				$('#submit').prop('disabled', false);
			}	
		}else{
			$('#submit').prop('disabled', false);
			$('#introduced').removeClass('invalid');
			$('#introduced').addClass('valid');
			$('#discontinued').removeClass('invalid');
			$('#discontinued').addClass('valid');
		}
	}else{
		$('#submit').prop('disabled', true);
	}	
}

