var num = [4, 7, 2, 9, 5]
num.sort()
var pos = num.indexOf(4)
console.log(num)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}