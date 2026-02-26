// adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}
// deletar item do carrinho
async function deleteItem(userCart, item){
    const index = userCart.findIndex((p)=> p.name === item.name);
    if(index !== -1 ){
        userCart.splice(index, 1);
    }

}
// remover um item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p)=> p.name === item.name);
    
    
    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }
    if(userCart[indexFound].quantity == 1 ){
        userCart.splice(indexFound, 1);
        return;
    }

}
//display

 async function displayStore(myStore){
    console.log("\nStore Cart")
    myStore.forEach((item, index)=> {
      console.log(`${index + 1}.${item.name} ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    })
   }
// calcular o total
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`\n${result}`);
    
}

export {
    addItem, calculateTotal, deleteItem, removeItem,displayStore
};