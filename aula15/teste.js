var num = [3, 6, 2, 9, 7]

/*for(var pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
