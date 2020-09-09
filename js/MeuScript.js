function calcular (tipo, valor){

    //.           TIPOS              

    //. TIPO AÇÃO    
    if(tipo === 'acao'){

        //; AÇÃO DE VALOR C  (LIMPAR O VISOR)  
        if (valor === 'c'){
            document.getElementById('resultado').value = ''
        }

        //; AÇÕES DE VALOR  + | - | * | /  CONTATENAR  
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/'){
            document.getElementById('resultado').value += valor
        }        


        if(valor === '='){
           var valorCampo = eval(document.getElementById('resultado').value) 
           document.getElementById('resultado').value = valorCampo
        }

       

        if (valor === '.') {
            var conteudo = document.getElementById('resultado').value
            *  conteudo.includes('.') ? document.getElementById('resultado').value  : document.getElementById('resultado').value += valor         
            
            
          }
                

        
          if(valor === '\b'){
                document.getElementById('resultado').value = document.getElementById('resultado').value.substring(0, document.getElementById('resultado').value.length - 1)
                
          }
         







    //. TIPO VALOR    
    }else if(tipo === 'valor'){
        //; CONTATENAÇÃO DOS VALORES 
        document.getElementById('resultado').value += valor

    }   
        
       
        

}


    
    
  

  