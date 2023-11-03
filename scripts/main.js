import { Employees } from "./Employees.js"
import { Orders } from "./Orders.js"
import { Products } from "./Products.js"
import { getOrders } from "./database.js"

const mainContainer = document.querySelector(".container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`

mainContainer.innerHTML = applicationHTML
const productTags = document.querySelectorAll(".product")

for (let product of productTags) {
    product.addEventListener("click", () => {
        alert(`${product.textContent} is $${Number(product.dataset.price).toFixed(2)}.`)
    })
}

const employeeTags = document.querySelectorAll(".employee")
let fulfilledOrders = 0

for (let employee of employeeTags) {
    // this is a DOM element, not an object with properties!
    // look up what methods DOM elements can use
    // look at how the html on Orders was interpolated, must declare variables in order to use them in the for loop! 
    employee.addEventListener("click", () => {
    
    const orders = getOrders()

    for (const order of orders) {
        if (order.employeeId === Number(employee.dataset.id)) {
            fulfilledOrders++
        }
    } 

    window.alert(`${employee.textContent} sold ${fulfilledOrders} products`);
    });

}

// ALERT - this code will continue to add to the fulfulledOrder variable when any item is clicked in the same class. Go back and rewrite this to where it will work without refreshing the page every time. 






// const employeeOrders = (id) => {
//     const fulfilledOrders = 0

//     for (const order of fulfilledOrders) {
//         if (order.employeeId === id) {
//             fulfilledOrders++
//         }
//     }
//     return fulfilledOrders
// }

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.dataset.type === "employee") {
//             const employeeId = itemClicked.dataset.id
            
//             for (const employee of employeeId) {
//                 if (itemClicked.dataset.id === parseInt(employeeId)) {

//                     const orderCount = employeeOrders(id)

//                     window.alert(`${employee.name} sold ${orderCount} products.`)
//                 }
//             }
//         }
//     }
// )



// how can I, using the data at my disposal, match employees with the number of orders they have taken?
// using an if statement, I can loop through the employeeId property on orders and match them to the id property of the employee 
// if employee.id is the same as order.employeeId, get # of orders that match ids 


// let numOfOrders = 0
//     if (employee.id === orders.dataset.employeeId) {
//         numOfOrders++
//     } 
