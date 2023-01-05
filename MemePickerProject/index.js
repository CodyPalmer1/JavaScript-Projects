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

/*
Challenge:
1. Take control of the 'emotion-radios' div.
2. In renderEmotionsRadios, set up a let
   to hold our string of HTML. You can initialise
   it with an empty string.
3. Iterate over "emotions" and put each emotion
   in a <p> tag and then add them to the let you
   created in step 2.
4. Render the string to the 'emotion-radios' div.
*/

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)