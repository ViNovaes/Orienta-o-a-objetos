//criando as caracteristicas/atributos do animal
class Animais {
constructor(tipo,nome,som,idade){
    this.tipo = tipo 
    this.nome = nome
    this.som = som
    this.idade = idade
    }
//criando metodos para o animal
    latir(){
        console.log(`${this.nome} disse ${this.som}`)
    }

        fazerNiver(novaIdade){
            this.idade +=novaIdade
            console.log(`O ${this.nome} fez aniversario de ${this.idade} anos`)
        }
}

let zeca = new Animais ('Cachorro','Zeca','auau',12)
zeca.latir()
console.log(zeca)
zeca.fazerNiver(1)

