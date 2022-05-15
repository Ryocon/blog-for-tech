const loginHandler = async(event) => {
    event.preventDefault()

    const loginUsername = document.querySelector('#login-username').value

    const userPwd = document.querySelector('#user-password').value

    console.log(loginUsername, userPwd)

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: loginUsername,
            password: userPwd
        }),
        headers: { 'Content-Type': 'application/json' }

    })
    if (response.ok) {
        // CHANGE TO DASHBOARD
        document.location.replace('/') 
    } else {
        alert('Failed to login!')
    }
}


document.querySelector('.loginForm').addEventListener('submit', loginHandler)