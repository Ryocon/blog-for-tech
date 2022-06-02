const { response } = require("express")

const newPostHandler = async (event) => {
    event.preventDefault()

    const title = document.getElementById('post-title').value.trim()
    const postContent = document.getElementById('post-content').value.trim()


    if (title && content) {
        const repsonse = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, postContent }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.reload()
        } else {
            alert(response.statusText)
        }
    }


}