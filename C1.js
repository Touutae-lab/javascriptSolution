function kaCokadekaMe(word)
{
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    words = 'ka'

    word.split('').map((letter, index) => {
        if (vowels.includes(letter) && index < word.length - 1) {
            if (vowels.includes(word[index + 1])) {
                words += letter
            } else {
                words += letter + 'ka'
            }
        }
        else {
            words += letter
        }
    })
    return words
}

function main() {
    console.log(kaCokadekaMe("a"));  // Output: "kaa"
    console.log(kaCokadekaMe("ka"));  // Output: "kaka"
    console.log(kaCokadekaMe("aa"));  // Output: "kaaa"
    console.log(kaCokadekaMe("Abbaa"));  // Output: "kaAkabbaa"
    console.log(kaCokadekaMe("maintenance"));  // Output: "kamaikantekanakance"
    console.log(kaCokadekaMe("Woodie"));  // Output: "kaWookadie"
    console.log(kaCokadekaMe("Incomprehensibilities"));  // Output: "kaIkancokamprekahekansikabikalikatiekas
}


main()