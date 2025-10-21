//Factory Function Pattern
//-> create a function that produces an object which can be controlled.

function createProduct(name, price){
    let stock = 10;

    //return the object
    return {
        name,
        price,
        buyStock(qty){
            
            if(stock < qty){
                console.log(`Your demand is ${qty} but only ${stock} stock are left!`)
            }else{
                stock -= qty;
                console.log(`You bought ${qty} stock now ${stock} stock are left .`)
            }
        },
        
        sellStock(qty){
            stock += qty;

            console.log(`You sold ${qty} stock. Available stocks is ${stock}`);
        }

    }

}

//Iphone stock
// const IphoneStock = createProduct("Iphone", 70000);
// IphoneStock.buyStock(2);
// IphoneStock.sellStock(4);

// Citizen Life stock
const CLIStock = createProduct("CLI", 10000);
CLIStock.buyStock(10);
CLIStock.sellStock(2);
