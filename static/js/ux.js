packaging_group.on('change', function() {
	var packaging = packaging_group.filter(':checked').attr('value');
	if (packaging == 'own_packaging') {
		flat_rate_choices.hide();
		own_packaging_choices.fadeIn('fast');
	} else {
		own_packaging_choices.hide();
		flat_rate_choices.fadeIn('fast');
	}
});

$(".changes_rates_field").on('change', function(){
	rateButton.show();
	buyButton.hide();
	ratePrice.html(" ");
});

function displayRateResult(data){
	var data = JSON.parse(data);
	var amount = data.amount;
	var object_id = data.object_id;
	rateObjectId = object_id;
	rateAmount = amount;
	rateButton.hide();
	buyButton.show();
	ratePrice.html("$"+amount);
}

function displayRateError(){
	rateButton.show();
	buyButton.hide();
	ratePrice.html(" ");
	alert("We couldn't find any rates - please try again or change your package information.");
}

function displayLabelResult(data){
	console.log(data);
}

function displayLabelError(data){
	console.log(data);
}