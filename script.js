function capitaliseKeys(object) {
    let entries = Object.entries(object);
    let capitalisedKeys = entries.map((entry) => entry[0].toUpperCase());
    console.log(Object.fromEntries(capitalisedKeys));

}


function stringToObject(string) {
    let arrayObject = [];
    let entries = string.split(",");
    console.log(entries);
    entries.forEach(item => {
        array = item.split(":"); arrayObject.push(array)
    })
    console.log(Object.fromEntries(arrayObject));
}

function shoppingList(string) {
    let arrayObject = [];
    let entries = string.split(", ");
    console.log(entries);
    entries.forEach(item => {
        array = item.split(" "); 
      if (array[0] > 0) {
        
      arrayObject.push([array[1], array[0]])
      }
    })
    console.log(Object.fromEntries(arrayObject));
}


function mapObject(obj, fn) {
    let values = Object.values(obj);
    let keys = Object.keys(obj);
    let newValues = values.map((item) => fn(item));
    entries = newValues.map((value, i) => {
      return [keys[i], value]
    }) 
    console.log(Object.fromEntries(entries))
  }
  