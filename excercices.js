function toUpper (item) {
  let result = [];
  item.forEach(function (param) {
    result.push(param.toUpperCase());
  });
  console.log(result);
}
toUpper(['mere', 'pere', 'alune']);

function arrayDouble (arr) {
  let result = [];
  arr.forEach(function (item) {
  result.push(item);
  result.push(item);
  });
  console.log(result);
  };
  
  arrayDouble(['pop', 'rock', 'dance']);

  function arraySum (num) {
    let total = 0;
    
    num.forEach(function (item) {
      total = total + item;
    });
    console.log(total);
    };
     
    arraySum([1, 2, 3, 4]);
    

    function clickMe () {
      let word = 'Done';
      let element1 = document.getElementById('todo-button');
       element1.innerText = word;
    };

    let count = 0;
    function raiseTheCounter () {
        count = count + 1;
        let counter = document.getElementById('counter');
        counter.innerText = count;
    };
    let raise = 0;
    function decreaseCounter (){
     raise = raise - 1;
      let raised = document.getElementById('counter');
      raised.innerText = raise;
    };

    let div = document.createElement('div');
    let input = document.getElementById('lool');
   
    function newInput () {
      let newItem = input.value;
      div.innerText = newItem;
      let newDiv = document.getElementById('clone');
      newDiv.appendChild(div);
      
    };

    function removeInput () {
    div.innerHTML = "";
    input.value = "";
    }

    const cart = document.getElementById('cart');

    function addToCart (food) {
      const cartItem = document.createElement('div');
      cartItem.innerText = food;
      cart.appendChild(cartItem);
    
    };

function clearCart () {
  cart.innerHTML = "";
};


 const measurement = document.getElementById('input');

function convertToCm () {
   const value = measurement.value;
    const convertedValue = +value * 2.54;
    const result = document.createElement('div');
    result.innerText = convertedValue;
    document.body.appendChild(result);
};
      
    function convertToInch () {
      const value = measurement.value;
      const convertedValue = +value / 2.54;
      const result = document.createElement('div');
      result.innerText = convertedValue;
      document.body.appendChild(result);
    };
    /*
    function cartTotal (cartArray) {
      let total = 0;
      cartArray.forEach(function (item) {
        total = total + item.price * item.quantity;
      });
      console.log(total);
    };
    cartTotal([
      {name: 'Apple', price: 4, quantity: 2},
      {name: 'Orange', price: 3, quantity: 3} 
    ]);*/

    const receipt = document.getElementById('receipt');

    function displayReceipt (cartArray) {
      receipt.innerHTML = '';

      cartArray.forEach(function(item) {
        const createDiv = document.createElement('div');
        createDiv.innerText = `${item.name} $${item.price} * ${item.quantity} = $${item.price * item.quantity}`
        document.body.appendChild(createDiv);

        let cartTotal = 0;
        cartArray.forEach(item => {
          cartTotal = cartTotal + item.price * item.quantity});

          const totalLine = document.createElement('div');
          totalLine.innerText = `Cart total = $ ${cartTotal}`;
          receipt.appendChild(totalLine);  
      });
          
    };
    displayReceipt([
      {name: 'Apple', price: 4, quantity: 2}, 
      {name: 'Orange', price: 3, quantity: 3}
    ]);

    //Ex.11
    let total = 0;

    function createCart(foodPrices) {
      const foods = Object.keys(foodPrices);
    
      foods.forEach(function (food) {
        const cartItem = document.createElement('div');
    
        // Here we get the food price using the food variable.
        // If food = 'Apple', then foodPrices[food] is the same
        // as foodPrices['Apple'], which is the same as foodPrices.Apple
        const foodPrice = foodPrices[food];
        cartItem.innerText = food + ' $' + foodPrice;
    
        const addButton = document.createElement('button');
        addButton.innerText = 'Add';
        addButton.style = 'margin: 12px';
    
        // Sorry I didn't teach this (I'll revise in the 2022 edition)!
        // You'll have to use a function without a name here. If you
        // create a separate addToCart() function, it will not have
        // access to any of the variables in this function.
        addButton.onclick = function () {
          total = total + foodPrice;
        };
    
        cartItem.appendChild(addButton);
    
        // This wil render each food with an "Add" button onto the webpage.
        document.body.appendChild(cartItem);
      });
    }
    
    createCart({ Apple: 3, Orange: 4, Egg: 2 });

   //Ex. 12....1
   function letter (str) {
    const myString = str.toUpperCase();
    console.log(myString);
    return myString;
   };
   letter('hello world');

    //Ex.12...2
   function aboveFreezing (temps) {
    const newTemp = temps.filter(temp => temp > 0);
    console.log(newTemp);
    return newTemp;
  };

aboveFreezing([0, 15, -10, -5, 20]);

//Ex.12...3
function removeRed(foodArray) {
  // Instead of saving the filtered array in a variable,
  // we can return it in the same line.
  return foodArray.filter(function (food) {
    return food.color !== 'red';
  });
}
removeRed([{ name: 'Apple', color: 'red' }, { name: 'Egg', color: 'white' }]);

//Ex.13...1
function max(numArray) {
  let max = -Infinity;

  numArray.forEach(function (num) {
    // You can have an if statement without the else
    if (num > max) {
      max = num;
    }
  });

  return max;
}
max([1, 5, -2, 4, 3, 5, 0]);

//Ex.13...2
function min(numArray) {
  let min = Infinity;

  numArray.forEach(function (num) {
    if (num < min) {
      min = num;
    }
  });

  return min;
}
min([1, 5, -2, 4, 3, 5, 0]);

//Ex.13...4
function pickApples(fruitArray) {
  let applesPicked = 0;

  const filteredArray = fruitArray.filter(function (fruit) {
    if (applesPicked >= 2) {
      // Remember, returning true keeps this value in the array.
      return true;
    } else if (fruit === 'apple') {
      applesPicked = applesPicked + 1;
      return false;
    } else {
      return true;
    }
  });

  return filteredArray;
}
pickApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);

//Ex.13...5
function pickFruits(fruitArray) {
  let applesPicked = 0;
  let orangesPicked = 0;

  const filteredArray = fruitArray.filter(function (fruit) {
    if (fruit === 'apple') {
      if (applesPicked >= 2) {
        return true;
      } else {
        applesPicked = applesPicked + 1;
        return false;
      }
    } else if (fruit === 'orange') {
      if (orangesPicked >= 1) {
        return true;
      } else {
        orangesPicked = orangesPicked + 1;
        return false;
      }
    } else {
      return true;
    }
  });

  return filteredArray;
}
pickFruits(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);

//Ex.13...6
function pickLastApples(fruitArray) {
  let applesPicked = 0;

  const reversedArray = fruitArray.reverse();

  const filteredArray = reversedArray.filter(function (fruit) {
    if (applesPicked >= 2) {
      return true;
    } else if (fruit === 'apple') {
      applesPicked = applesPicked + 1;
      return false;
    } else {
      return true;
    }
  });

  // Remember to reverse the array back.
  return filteredArray.reverse();
}
pickLastApples(['cherry', 'apple', 'orange', 'apple', 'banana', 'apple']);