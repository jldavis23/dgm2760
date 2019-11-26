let duplicateMenu = () => {
    // get all the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')
    document.querySelector('#smallNavArea').appendChild(newList)

    topList.forEach(menuItem => {
        // create the li and a for the new menu and set attributes
        let newLi = document.createElement('li')
        let newAnchor = document.createElement('a')
        newAnchor.setAttribute('href', menuItem.getAttribute('href'))

        // 'copy' the textContent from upper menu to new menu
        newAnchor.textContent = menuItem.textContent
        
        // append children to make them appear in the DOM
        newList.appendChild(newLi)
        newLi.appendChild(newAnchor)
    })
}

duplicateMenu()