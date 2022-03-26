function registerUser() {
    const email_query = document.getElementById('email').value;
    const pass_query = document.getElementById('password').value;
    console.log("REGISTER")


    fetch(`/register_page`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: email_query,
            password: pass_query
        })

    })
}

function loginUser() {
    console.log("hello")
    const email_query1 = document.getElementById('email1').value;
    const pass_query1 = document.getElementById('password1').value;
    fetch(`/login_page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: email_query1,
                password: pass_query1
            })

        })
        .then(async response => {
            const data = await response.json();
            console.log(data)
            if (response.status != 200) {
                alert("oh no");
            } else {
                localStorage.setItem('auth-token', data.token);
                location.href = "/secured";
            }
        });
}