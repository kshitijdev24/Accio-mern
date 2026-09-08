const products = [
    { name: "Laptop", price: 60000, stock: 5, category: "Electronics" },
    { name: "Phone", price: 30000, stock: 0, category: "Electronics" },
    { name: "Chair", price: 5000, stock: 12, category: "Furniture" },
    { name: "Table", price: 10000, stock: 3, category: "Furniture" }
];

function analyzeProducts(products) {
    let Costliest = Number.NEGATIVE_INFINITY;
    let sum=0;
    let outStock = [];
    let available = [];
    let totalProducts;
    let mostExpensive;

    for (let prod of products) {
        if (prod.price > Costliest) {
            Costliest = prod.price;
            mostExpensive = prod.name;
        }
        if (prod.stock == 0) {
            outStock.push(prod.name);
        }
        if (prod.stock > 0) {
            available.push(prod.name);
        }
        sum += prod.price;
    }
    let result = {};
    result.mostExpensive = mostExpensive;
    result.averagePrice = sum / products.length;
    result.outOfStock = outStock;
    result.available = available;
    result.totalProducts = products.length;

    console.log(result);
}
analyzeProducts(products)