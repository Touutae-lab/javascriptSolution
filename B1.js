function wordMesh(arr){
    let result = ''
    for (let i = 0; i < arr.length - 1; i++) {
        let word1 = arr[i]
        let word2 = arr[i+1]

        let mesh = (word1 + ' ' + word2).match(/(.+) \1/)
        if (mesh === null) {
            return 'failed to mesh'
        }
        result += mesh[1]
    }
    return result
}

function testRegEx() {
    let word1 = 'beacon'
    let word2 = 'condominium'
    let mesh = (word1 + ' ' + word2).match(/(.+) \1/)
    console.log(mesh[1])

    word1 = 'allow'
    word2 = 'lowering'
    mesh = (word1 + ' ' + word2).match(/(.+) \1/)
    console.log(mesh[1])

    word1 = 'abandon'
    word2 = 'donation'
    mesh = (word1 + ' ' + word2).match(/(.+) \1/)
    console.log(mesh[1])


    word1 = 'jamestown'
    word2 = 'ownership'
    word3 = 'ownerstore'
    word4 = 'ownerlip'

    mesh = (word1 + ' ' + word2 + ' ' + word3 + ' ' + word4).match(/(.+)(?=\1\1\1)/)
    console.log(mesh[1])
}

function main() {
    console.log(wordMesh(["beacon","condominium","umbilical","california"]) === "conumcal")
    console.log(wordMesh(["allow","lowering","ringmaster","terror"]) === "lowringter")
    console.log(wordMesh(["abandon","donation","onion","ongoing"]) === "dononon")
    console.log(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]) === "ownhippuscartpher")
    console.log(wordMesh(["apple","snack","KING","Grape","SNAKE","cake"]) === "failed to mesh")
    testRegEx()
}
main()