function init() {
    setEvents();
}

function setEvents() {
    setLikeEvents();
    setPostCommentEvents();
}

// NOTE: I'm using button arrays to set the events
// because I'm thinking about the real instagram,
// which has more than only one post.

function setLikeEvents() { //setting like button events
    let likeButtons = document.querySelectorAll('.like-btn')
    likeButtons.forEach(button => button.addEventListener('click', handleLike))
}

function setPostCommentEvents() { //setting comment button events
    let commentBtns = document.querySelectorAll('.comment-btn')
    commentBtns.forEach(button =>
        button.addEventListener('click', handleComment))
}

function handleLike(e) {
    if (e.target.classList.contains('fa-regular')) { //changing the like button classes
        e.target.classList.remove('fa-regular')
        e.target.classList.add('fa-solid')
        e.target.classList.add('liked')
    } else {
        e.target.classList.remove('fa-solid')
        e.target.classList.remove('liked')
        e.target.classList.add('fa-regular')
    }
}

function handleComment(e) {
    let commentStr = e.target.previousElementSibling
    if (commentStr.value.replace(/\s+/g, '') !== '') { //Checking if it has text to submit, prevent blank space comments
        let commentsDiv = document.querySelector('#comments')
        commentsDiv.innerHTML += `<p><b>Comment</b> ${commentStr.value}</p>`
        commentStr.value = ''
    }
}