class Pessoa{

	constructor(nome, idade, temfilhos){
		this.nome = nome;
		this.idade = idade;
		this.temfilhos = temfilhos;

	}
	 caminhar(){
	 	document.write("caminhando");
	 }
	 getInformaoces(){
	 	document.write(" nome: "+ this.nome+" idade: "+this.idade+" tem filhos? "+ this.temfilhos);
	 }
}

var pessoa = new Pessoa("jonas",20,false);

//pessoa.caminhar();
document.write("Informacoes sobre essa pessoa");
pessoa.getInformacoes();