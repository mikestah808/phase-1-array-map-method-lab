// function titleCased(tutorials){
//     const capitalizeFirstLetter = tutorials.map(sentence => sentence.split(" ")[0].slice(1))
//     return capitalizeFirstLetter; 
// }



// sentence.split(" ")[0].slice(1)


const titleCased = () => {
    let tuto = tutorials.map(function toTitleCase(string = " ") {
        const regex = /^[a-z]{0,1}|\s\w/gi;

        string.match(regex).forEach((char) => {
            string = string.replace(char, char.toUpperCase());
        });
        return string;
    }
    
    )

    return tuto;
}