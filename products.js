let products = [];

function showAll() {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        content += "<tr>" +
            "<td>" + products[i] + "</td>" +
            "<td><button class=\"button\" onClick=\"editByIndex(" + i + ")\">Edit</button></td>" +
            "<td><button class=\"button\" onClick=\"deleteByIndex(" + i + ")\">Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("products").innerHTML = content;
}

showAll();

function creatNewProduct () {
    let newProduct = document.getElementById("newProduct").value;
    document.getElementById("newProduct").value = "";
    
    products.push(newProduct);
    showAll();
}

function editByIndex(index) {
    products[index] =  prompt("Enter new value:");
    showAll();
}

function deleteByIndex(index) {
    products.splice(index,1);
    showAll();
}