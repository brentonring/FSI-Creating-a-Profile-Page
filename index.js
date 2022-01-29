let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogImage.append('./assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

//let div = document.createElement('div')
//div.setAttribute('class', 'dog-content')

let description = document.createElement('h3')
//description.append('Description:')
description.textContent = "Description:"
dogDetails.append(description)

let description1 = document.createElement('p')
description1.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(description1)

let feedingTimes = document.createElement('h3')
feedingTimes.textContent = 'Feeding Times:'
dogDetails.append(feedingTimes)

let list = document.createElement('ul')
//list.createElement('li, li, li')
//content.append (list)
//list.createElement('listItem1, listItem2, listItem3')

let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
let listItem3 = document.createElement('li')
listItem1.textContent = "9:00 am"
listItem2.textContent = "12:00 pm"
listItem3.textContent = "5:00 pm"
list.append(listItem1, listItem2, listItem3)
dogDetails.append(list)