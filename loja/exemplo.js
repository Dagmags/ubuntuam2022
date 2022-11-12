
    var nome = prompt ("Digite o nome?");
    document.write ("<br></br>")
    document.write ("Bom dia " + nome);
    var anoNascimento =prompt ("Digite o anos de nascimento :");
    var idade = 2022 - anoNascimento 
    document.write ("<br></br>")
    document.bgColor = "yellow"
    document.write ( "Oi "+nome+" sua idade é "+ idade +"anos!!!");

    if (idade<18){
        document.bgColor = "yellow"
        document.write ("<br>Você é menor de 18 anos!")

    }else if (idade<60){
        document.bgColor = "green"
        document.write ("<br>Você é adulto!")

    }else {
        document.bgColor = "blue"
        document.write ("<br>Você é da terceira idade!")

    } 
    
   

