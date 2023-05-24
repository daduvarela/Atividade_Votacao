var idade 
idade = prompt ("Digite sua idade: ")
if (idade > 15 && idade < 18 || idade >70) 
{
    document.write ("O voto é opcional.")
}
else if (idade<16)
{
    document.write ("Você não pode votar.")
}
else {
    document.write ("Você pode votar.")
}