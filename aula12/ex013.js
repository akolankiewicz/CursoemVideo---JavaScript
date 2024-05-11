var agora = new Date()
var hora = agora.getHours()
if (hora<12 && hora>0){
    console.log("bom dia")
}if(hora>=12 && hora<19){
 console.log('boa tarde')
}if(hora>=19 && hora <= 24){
    console.log('boa noite')
}
