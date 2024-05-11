function calcular(){
    var x1 = document.getElementById('n')
    var x = Number(x1.value)
    var c = 1
    for(c; c<=10; c++){
        res.innerHTML += `<br>${c} x ${x} = ${c*x} <br>`
    }
}