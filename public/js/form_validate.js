$(function () {
    $("form[name='registration']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            firstname: "Please enter your firstname. No numbers or special characters",
            lastname: "Please enter your lastname. No numbers or special characters",
            phonenumber: {
                required: "Please provide a phone number",
                integer: "Please enter a valid phone number"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function (form) {
            form.submit();
            registerUser();

        }
    });
});

$(function () {
    $("form[name='login']").validate({
        rules: {
            email1: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: "Please enter your firstname. No numbers or special characters",
            lastname: "Please enter your lastname. No numbers or special characters",
            phonenumber: {
                required: "Please provide a phone number",
                integer: "Please enter a valid phone number"
            },
            email: "Please enter a valid email address"
        },
        submitHandler: function (form) {
            form.submit();
            loginUser();
        }
    });
});