<<<<<<< HEAD
import { catsData } from './data.js'
=======
import { catsData } from '/data.js'
>>>>>>> 94be6933ae82016b5963206e03ff1f22796045ee

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = []

    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

<<<<<<< HEAD

=======
>>>>>>> 94be6933ae82016b5963206e03ff1f22796045ee
function renderEmotionsRadios(cats){

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
<<<<<<< HEAD
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
=======

        radioItems += `<input>${emotion}</p>`
>>>>>>> 94be6933ae82016b5963206e03ff1f22796045ee
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




