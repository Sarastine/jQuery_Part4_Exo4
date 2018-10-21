$(function() {
	name = '';
	firstName = '';
	birthDate = '';
	birthPlace = '';
	job = '';
	company = '';
	$('#name').focusout(function(){
		name = $('#name').val();
		var regex1 = new RegExp(/[^a-zA-Z\-àâéèêëùûïîô]/); // Pourquoi "var"?
		if (regex1.test(name)) {
			$('#name').val('');
			$('#nameError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
			nameCheck = false;
		} else {
			$('#nameError').text('');
			nameCheck = true;
			console.log('Correct');
		}
	});
	$('#firstName').focusout(function(){
		firstName = $('#firstName').val();
		var regex2 = new RegExp(/[^a-zA-Z\-àâéèêëùûïîô]/); // Pourquoi "var"?
		if (regex2.test(firstName)) {
			$('#firstName').val('');
			$('#firstNameError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
			firstNameCheck = false;
		} else {
			$('#firstNameError').text('');
			firstNameCheck = true;
			console.log('Correct');
		}
	});
	$('#birthDate').focusout(function(){
		birthDate = $('#birthDate').val();
		var regex3 = new RegExp(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/);  //(/^[a-zA-Z0-9.-_]{1,}@[[a-zA-Z0-9]{1,}.[a-zA-Z]{1,}$/); // Pourquoi "var"?
		if (regex3.test(birthDate)) {
			$('#birthDateError').text('');
			birthDateCheck = true;
			console.log('Correct');
		} else {
			$('#birthDate').val('');
			$('#birthDateError').text('Entrez une date');
			birthDateCheck = false;
		}
	});
	$('#birthPlace').focusout(function(){
		birthPlace = $('#birthPlace').val();
		var regex4 = new RegExp(/[^a-zA-Z\- àâéèêëùûïîô]/); // Pourquoi "var"?
		if (regex4.test(birthPlace)) {
			$('#birthPlace').val('');
			$('#birthPlaceError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
			birthPlaceCheck = false;
		} else {
			$('#birthPlaceError').text('');
			birthPlaceCheck = true;
			console.log('Correct');
		}
	});
	$('#job').focusout(function(){
		job = $('#job').val();
		var regex1 = new RegExp(/[^a-zA-Z\- àâéèêëùûïîô]/); // Pourquoi "var"?
		if (regex1.test(job)) {
			$('#job').val('');
			$('#jobError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
			jobCheck = false;
		} else {
			$('#jobError').text('');
			jobCheck = true;
			console.log('Correct');
		}
	});
	$('#company').focusout(function(){
		company = $('#company').val();
		var regex1 = new RegExp(/[^a-zA-Z\- àâéèêëùûïîô]/); // Pourquoi "var"?
		if (regex1.test(company)) {
			$('#company').val('');
			$('#companyError').text('N\'utilisez que des lettres et éventuellement un tiret (-)');
			companyCheck = false;
		} else {
			$('#companyError').text('');
			companyCheck = true;
			console.log('Correct');
		}
	});
	$('#generate').click(function(){
		if (nameCheck && firstNameCheck && birthDateCheck && birthPlaceCheck && jobCheck && companyCheck) {
			$('#message').text(firstName + ' ' + name + ', né le ' + birthDate + ' à ' + birthPlace + ', actuellement ' + job + ' à ' + company +'.');
		} else {
			$('#message').text('Complétez correctement tous les champs, s\'il vous plaît');
		}
	});
});