const categoriesRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesRef.length}`)

const categoriesCount = (elems) =>{
    for (const elem of elems) {
        const count = elem.querySelectorAll('li')
        const categoryName = elem.querySelector('h2').textContent
        console.log(`Category: ${categoryName}`)
        console.log(`Elements: ${count.length}`)
    }
}

categoriesCount(categoriesRef)
