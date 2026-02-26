import createItem from '../items/handle.js';
import * as createService from './handle.js';


let myStore = []; 
//chama a funçao carrinho
async function callMyCart(MyCart){
            //funçao carrinho
    async function MyCart(store){
    
    //crio itens
    let item1 = await createItem("maquita", 399.00,1);
    let item2 = await createItem("furadeira", 579.00,3)
    //adiciono itens
    await createService.addItem(store, item1);
    await createService.addItem(store, item2)
    //removo itens
    //await createService.removeItem(store, item2)
    
    //mostro na tela os itens
    await createService.displayStore(store)
    
    //deleto o item
    await createService.deleteItem(store, item2);
    console.log("Store Total is!")
    await createService.calculateTotal(store);
    
}
MyCart(myStore);
}

export default callMyCart;