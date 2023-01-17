import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', function(e){
    console.log(e.target.id)
})

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
<<<<<<< HEAD
            if (!emotionsArray.includes(emotion)){
=======
            if(!emotionsArray.includes(emotionsArray)){
>>>>>>> 4daa6347593a7d26d40bd6f15c8c6ac6a7ae17d2
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




