import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module

const employees = getEmployees()
const orders = getOrders()
const products = getProducts()

// Function whose responsibility is to find the product for an order
const findProduct = (order) => { // removed allProducts parameter
    let orderProduct = null
    
    for (const product of products) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}


// Function whose responsibility is to find the employee for an order
const findEmployee = (order) => { // removed allEmployees parameter
    let orderEmployee = null

    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let html = ""
    html = "<ul>"
     
    for (const order of orders) {
        const employee = findEmployee(order) // removed employees parameter 
        const product = findProduct(order)
        
        html += `
            <li data-type="order"
            data-employeeId="${order.employeeId}">
                ${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}
            </li>
        `
    }

    html += "</ul>"

    return html
}

