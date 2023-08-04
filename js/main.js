function bronzeMedal (array){
    let gold =0;
    let silver =0;
    let bronze=0;
    
    for(let i = 0; i < array.length; i++){ // loop through each element in the array
        if (array[i] > gold){ // if the element is greater than gold
            bronze = silver; // set bronze to silver
            silver = gold; // set silver to gold
            gold = array[i]; // set gold to the element
        } else if (array[i] > silver){ // otherwise, if the element is greater than silver
            bronze = silver; // set bronze to silver
            silver = array[i]; // set silver to the element 
        } else if (array[i] > bronze){ // otherwise, if the element is greater than bronze
            bronze = array[i]; // set bronze to the element
        }
    }
    return bronze;
}

console.log(bronzeMedal([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]));
