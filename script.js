function capitaliseKeys(object) {
    let entries = Object.entries(object);
    let capitaliseKey = entries.map((entry) => entry[0].toUpperCase();
    console.log(Object.fromEntries(capitaliseKey));

}

capitaliseKeys({ a: 1, b: 2, c: 3 