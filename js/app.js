export const pascalToSnake = (entry) => {
    if(parseInt(entry)){
       return entry.toString(); 
    }
    let result = "";
    const caract = ["0","1","2","3","4","5","6","7","8","9","-","_"];
    for (let index = 0; index < entry.length; index++) {
        const element = entry[index];
        if(caract.includes(element)){
            result += element;
        } else if (element.toUpperCase() === element){
            if(index === 0){
                result += element.toLowerCase();
            } else {
                result += "_" + element.toLowerCase();
            }
        } else {
            result += element;
        }
    }
    return result;
}