let valores = [8, 1, 7, 4, 2, 9]
//console.log(valores)
for(var pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem valores ${valores[pos]}`)
} 

console.log('segundo jeito')
for(var pos1 in valores){ 
    console.log(`A posiçaõ ${pos} tem valor ${valores[pos1]}`)
}