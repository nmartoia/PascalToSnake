export const pascalToSnake = (entry) => {
    if(parseInt(entry)){
       return entry; 
    }
    let result = "";

    for (let index = 0; index < entry.length; index++) {
        const element = entry[index];
        if(element.toUpperCase() === element){
            if(index === 0){
                result += element.toLowerCase()
            } else {
                result += "_" + element.toLowerCase()
            }
        } else {
            result += element;
        }
    }
    
    return result;
}

