const InputTag = document.getElementsByClassName("form-control")[0];
const ShoppingListTag = document.getElementsByClassName("ShoppingListContainer")[0];

let productId = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;
    const SpanTag = document.createElement("span");
    const parentDiv = document.createElement("div");
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const icon = document.createElement("i")
    const Products = productId.toString() + ". " + inputValue;
    parentDiv.classList.add("ProductName")
    parentDiv.addEventListener("click", () => {
        const classExist = parentDiv.classList.contains("purchased")
        if(classExist){
            parentDiv.classList.remove("purchased")
        }else {
            parentDiv.classList.add("purchased")
        }
    })
    icon.classList.add("far", "fa-trash-alt")
    icon.addEventListener("click", (event) => {
        productContainer.remove()
    })
    SpanTag.append(Products);
    parentDiv.append(SpanTag)
    productContainer.append(parentDiv, icon)
    ShoppingListTag.append(productContainer)

    InputTag.value = "";
    productId += 1;
}

InputTag.addEventListener("change", handleChange)