const calculadora=(a,b,c)=>{
    let resul
    if (c == "+"){
         resul = a+b
    }else if (c == "-"){
         resul= a-b
    }else if (c == "*"){
        resul= a*b
    }else if (c == "/"){
        if(b==0){
           resul=("error")
        }else{
           resul= a/b} 
    }else{
        resul=("valores invalidos")
    }return resul
}
console.log(calculadora(10,0,"/"))