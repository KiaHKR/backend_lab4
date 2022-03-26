fetch("/validate", {
        headers: {
            'auth-token': localStorage.getItem('auth-token')
        }
    })
    .then(async function (response) {
        if (response.status != 200) {
            location.href = "/";
        } else {
            const data = await response.json();
            $('#user').html("username: " + data.user.user)
            $('#pass').html("password: " + data.user.pass)
        }
    })