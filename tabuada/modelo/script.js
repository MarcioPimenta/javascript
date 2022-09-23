function tabuada(){
    var num = window.document.getElementById('txtn')
    var res = window.document.getElementById('res')
    var n = Number(num.value)
    res.innerHTML = ''
    if (num.value.length == 0) {
        alert('Escolha um número!')
    } else {
        var c = 1
        for (n; c <= 10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c}<br>`
        }
    }
}