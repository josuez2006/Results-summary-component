const cards = document.querySelectorAll('.summary__card')


window.addEventListener('load', () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => {
            updateCardsData(data)
            updateResultsScore(data)
        })
})
    

function updateCardsData(data) {

    data.forEach((element, i) => {

        const iconCard = cards[i].querySelector('.card__icon')
        const titleCard = cards[i].querySelector('.card__title')
        const scoreCard = cards[i].querySelector('.card__score')

        iconCard.setAttribute('src', element.icon)
        titleCard.textContent = element.category
        scoreCard.textContent = element.score

        if (element.score > 100) {
            scoreCard.textContent = 100
        }

    })
}


function updateResultsScore(data) {

    const resultsScore = getResultsScore(data)

    const resultsScoreElement = document.getElementById('results-score')
    resultsScoreElement.textContent = resultsScore
    
}


function getResultsScore(data) {
    let resultsScore = 0

    data.map(element => resultsScore += element.score)

    resultsScore = Math.round(resultsScore / data.length)

    return resultsScore
}