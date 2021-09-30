var opcion = document.getElementById('modo');


opcion.addEventListener("change",calcular,false);
function calcular(){
   
    var elemento=this.options[this.selectedIndex].value;
    var numero= document.getElementById("numero").value;
    var nn=parseInt(numero)
    var resultado= document.getElementById("resultado");
    
    //alert (elemento);

    switch(elemento){
        case "1":
            //Cambiar de decimal a binario
            resultado.value=nn.toString(2);
            break;
        case "2":
            //Cambiar de decimal a octal
            resultado.value=nn.toString(8);
            break;
        case "3":
            //Cambiar de decimal a hexadecimal
            resultado.value=nn.toString(16);
            break;

        //funcionan

        case "4":
            //Cambiar de binario a decimal
            resultado.value=parseInt(nn,2);
            break;
        case "5":
            //Cambiar de ocatal a decimal
            resultado.value=parseInt(nn,8);
           
            break;
        case "6":
            //Cambiar de hexadecimal a decimal
            nn=numero.toString(16);
            resultado.value=parseInt(nn ,16);
            break;
        
    }
}
