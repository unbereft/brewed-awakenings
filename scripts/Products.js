import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li class="product"
        data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

