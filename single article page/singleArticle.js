function getArticles(){
    return JSON.parse(localStorage.getItem('articles'))
}

const articles = getArticles()

const articleId = localStorage.getItem('selectedArticleId')


//comparer l'id stocker dans le local storage avec l'id de des articles
const articleTest = articles.find(article => article.id === articleId)

console.log(articleTest)

displayArticle(articleTest)

// afficher un article dans la page
function displayArticle(article){
    const main = document.querySelector('main')

    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    main.appendChild(mainContent)

    const mainImage = document.createElement('div')
    mainImage.classList.add('main-image')

    mainContent.appendChild(mainImage)

    const image = document.createElement('img')
    image.src = article.image

    mainImage.appendChild(image)

    const mainContentBottom = document.createElement('div')
    mainContentBottom.classList.add('main-content-bottom')

    mainContent.appendChild(mainContentBottom)

    const firstParagraph = document.createElement('div')
    firstParagraph.classList.add('paragraph')

    mainContentBottom.appendChild(firstParagraph)

    const firstParagraphContent = document.createElement('p')
    firstParagraphContent.textContent = article.paragraph1

    firstParagraph.appendChild(firstParagraphContent)

    const mainContentBottomImage = document.createElement('div')
    mainContentBottomImage.classList.add('main-content-bottom-image')

    mainContentBottom.appendChild(mainContentBottomImage)

    const image2 = document.createElement('img')
    image2.src = article.image2

    mainContentBottomImage.appendChild(image2)

    const secondParagraph = document.createElement('div')
    secondParagraph.classList.add('paragraph')

    mainContentBottom.appendChild(secondParagraph)

    const secondParagraphContent = document.createElement('p')
    secondParagraphContent.textContent = article.paragraph2

    secondParagraph.appendChild(secondParagraphContent)

    const quotation = document.createElement('div')
    quotation.classList.add('quotation')

    mainContentBottom.appendChild(quotation)

    const quotationLeft = document.createElement('div')
    quotationLeft.classList.add('quotation-left')

    quotation.appendChild(quotationLeft)

    const rectangle = document.createElement('div')
    rectangle.classList.add('rectangle')

    quotationLeft.appendChild(rectangle)

    const quotationRight = document.createElement('div')
    quotationRight.classList.add('quotation-right')

    quotation.appendChild(quotationRight)

    const quotationRightContent = document.createElement('h2')
    quotationRightContent.textContent = article.quote

    quotationRight.appendChild(quotationRightContent)

    const thirdParagraph = document.createElement('div')
    thirdParagraph.classList.add('paragraph')

    mainContentBottom.appendChild(thirdParagraph)

    const thirdParagraphContent = document.createElement('p')
    thirdParagraphContent.textContent = article.paragraph3

    thirdParagraph.appendChild(thirdParagraphContent)

    const heroContent = document.querySelector('.hero-content')

    const heroContentButtom = document.createElement('div')
    heroContentButtom.classList.add('hero-content-bottom')

    heroContent.appendChild(heroContentButtom)

    const heroContentBottomTile = document.createElement('h1')
    heroContentBottomTile.textContent = article.title

    heroContentButtom.appendChild(heroContentBottomTile)

    const herContentBottomDate = document.createElement('p')
    herContentBottomDate.textContent = article.date + ' • Daily digest'

    heroContentButtom.appendChild(herContentBottomDate)

}



