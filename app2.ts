class Carro {
    private modelo:string 
    private numeroDePortas: number
    private velocidade: number = 0

    public acelerar(): void {
        this.velocidade = this.velocidade+10
    }

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor( endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }


    public mostrarListaDeCarros(): Carro[]{
        return this.listaDeCarros
    }
}

class Pessoa {
    public nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido: string){
        this.nome = nome 
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }
    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }
    public comprarCarror(carro:Carro): void{
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro{
        return this.carro
    }
}

/*--- criar carros ---*/

let carroA = new Carro('dodge Journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* Montar lista de carros */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */

// console.log(concessionaria.mostrarListaDeCarros())

/*--- Comprar o carro --- */

let client = new Pessoa('Helena', 'Veloster')
concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == client.dizerCarroPreferido()){

        //compra o carro
        client.comprarCarror(carro)
    }
})

console.log(client.dizerCarroQueTem())