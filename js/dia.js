function boasVindas(nome, hora) {
  if (hora < 12) return "Bom dia, " + nome + "!";
  if (hora <= 18) return "Boa tarde, " + nome + "!";
  return "Boa noite, " + nome + "!";
}


console.log(boasVindas("Luana", 19)); 
console.log(boasVindas("Bianca", 18));  
console.log(boasVindas("Vitória", 12)); 