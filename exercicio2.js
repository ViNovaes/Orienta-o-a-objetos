class Jogos {
constructor(nome,genero,classificacao,anodeLancamento,multiplayer){
        this.nome = nome
        this.genero = genero
        this.classificacao = classificacao
        this.anodeLancamento =  anodeLancamento
        this.multiplayer = multiplayer
                }
        conjuntos(){
                console.log(`${this.nome} foi lançado no ano de ${this.anodeLancamento}. Não é recomendado para menores de ${this.classificacao}`)
                        }
}

let game1 = new Jogos ('The last of us Part 1','Sobrevivencia',21,2022,'Sim')
console.log(game1)
game1.conjuntos()