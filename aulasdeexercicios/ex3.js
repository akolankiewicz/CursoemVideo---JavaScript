function calcular(){
    var ini = document.getElementById('txti')
    var f1 = document.getElementById('fim')
    var p1 = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || f1.value.length == 0 || p1.value.length == 0) {
        alert('ERRO - Faltam dados!')
    }else{
        res.innerHTML = 'contando: '
        var i = Number(ini.value)
        var f = Number(f1.value)
        var p = Number(p1.value)
        if (p==0){
            alert('Passo invalido! Considerando como 1')
            p = 1
        }
        if (i<f){ //MENOR PRO MAIOR
        for(var c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`}

                } else { // MAIOR PRO MENOR
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
}
