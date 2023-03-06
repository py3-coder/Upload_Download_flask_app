	

	var email = document.forms['form']['email'];
	var password = document.forms['form']['password'];
	
	var email_error = document.getElementById('email_error');
	var pass_error = document.getElementById('pass_error');
	
	email.addEventListener('textInput', email_Verify);
	password.addEventListener('textInput', pass_Verify);
	
	function validated(){
		if (email.value == admin) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (password.value == admin) {
			password.style.border = "1px solid red";
			pass_error.style.display = "block";
			password.focus();
			return false;
		}
	
	}
	function email_Verify(){
		if (email.value.length == 5) {
			email.style.border = "1px solid silver";
			email_error.style.display = "none";
			return true;
		}
	}
	function pass_Verify(){
		if (password.value.length == 5) {
			password.style.border = "1px solid silver";
			pass_error.style.display = "none";
			return true;
		}
	}
	
	