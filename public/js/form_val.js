const fname = document.querySelector("#Name1");
const Gender = document.querySelector("#Gender1");
const dateOfBirth = document.querySelector("#date2");
const phonenumber = document.querySelector("#phonenumber1");
const nin = document.querySelector("#Nin1");
const role1 = document.querySelector("#role1");
const UserID= document.querySelector("#UserID");
const password = document.querySelector("#password");

const checkName = () => {
	let alphabet = /^[a-zA-Z]+ [a-zA-Z]+$/;
	if (fname.value === "") {
		// alert("User Name is Empty");
		fname.style.border = "2px solid red";
		fname.focus();
		return false;
	} else {
		fname.style.border = "2px solid #198754";
		document.querySelector("#Gender1").focus();
	}

	if (fname.match(alphabet)) {
		document.querySelector("#Gender1").focus();
		return true;
	} else {
		fname.style.border = "2px solid green";
		fname.focus();
	}
};

const checkPhone = () => {
	let format = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (phonenumber.value === "") {
		phonenumber.style.border = "3px solid red";
		phonenumber.focus();
		return true;
	} else {
		phonenumber.style.border = "3px solid green";
		document.querySelector("#Nin1").focus();
	}
};

const checkGender = () => {
    if (Gender.value === '') {
        Gender.style.border = "3px solid red";
        Gender.focus();
        return true;
    } else {
		Gender.style.border = "3px solid green";
		document.querySelector("#date1").focus();
	}

}

const checkDate1 = () => {
    if (dateOfBirth.value === '') {
        dateOfBirth.style.border = "3px solid red";
        dateOfBirth.focus();
        return true;
    } else {
		dateOfBirth.style.border = "3px solid green";
		document.querySelector("#phonenumber1").focus();
	}

}

const checkNin = () => {
    if (nin.value === '') {
        nin.style.border = "3px solid red";
        nin.focus();
        return true;
    } else {
		nin.style.border = "3px solid green";
		document.querySelector("#role1").focus();
	}

}

const checkRole = () => {
    if (role1.value === '') {
        role1.style.border = "3px solid red";
        role1.focus();
        return true;
    } else {
		role1.style.border = "3px solid green";
		document.querySelector("#UserID").focus();
	}

}

const checkPassword = () => {
    if (password.value === '') {
        password.style.border = "3px solid red";
        password.focus();
        return true;
    } else {
		password.style.border = "3px solid green";
		document.querySelector("#password").focus();
	}

}

const checkUserID = () => {
    if (UserID.value === '') {
        UserID.style.border = "3px solid red";
        UserID.focus();
        return true;
    } else {
		UserID.style.border = "3px solid green";
		document.querySelector("#password").focus();
	}

}