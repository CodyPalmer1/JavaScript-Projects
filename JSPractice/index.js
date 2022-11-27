const title = document.getElementById('title')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')

title.addEventListener('submit', function(e){
    e.preventDefault()
    title.innerHTML = `
    <h1 id="title">THANK YOU FOR SUBMITTING</h1>
    `
})