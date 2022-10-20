//window.alert("Pimbaaaaaaaaaaaaaaaa")

function carregar(){
    var msg=window.document.getElementById('msg')
    var data=new Date()
    var hora= data.getHours()
    var minuto=data.getMinutes()
    msg.innerHTML=`Agora são ${hora}:${minuto}`
    if (hora>=6 && hora<12){
    Img.src ='manha.jpg'
    document.body.style.background = '#FFDEAD'
    }   else if(hora>=12 && hora<=18 ){
    img.src = 'tarde.jpg' 
    document.body.style.background = '#CD853F'
    } else if(hora>18 && hora<24){ 
    img.src='noite.jpg'
    document.body.style.background ='#191970'
    }else{
    img.src='madrugas.jpg'
    document.body.style.background ='#4B0082'}

}

