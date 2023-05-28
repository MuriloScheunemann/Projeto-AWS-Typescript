// Esse programa roda em Linux somente. (por causa do formato dos comandos cli que são um pouco diferentes no windows \ ^)
import prompt from 'prompt-sync';
import { EC2 } from './EC2'

let instancia: EC2 = new EC2();
let comando;
let sair = true;
const teclado = prompt();

while (sair) {
    console.log('\n+----------Instâncias---------+|');
    console.log('| 1. Criar                       |');
    console.log('| 2. Parar                       |');
    console.log('| 3. Iniciar                     |');
    console.log('| 4. Listar                      |');
    console.log('| 9. Sair do Programa            |');
    console.log('+--------------------------------+');
    const opcao = teclado("Opcao: ");

    switch (opcao) {
        case '1':
            console.log("\n***CREATE EC2 INSTANCE***");
            instancia.name = teclado("NAME: ")
            instancia.ami = teclado("AMI-ID: ");
            instancia.count = teclado("COUNT: ");
            instancia.type = teclado("TYPE: ");
            instancia.key = teclado("KEY: ");
            instancia.sg = teclado("SEC GROUP-ID: ");
            instancia.subnet = teclado("SUBNET-ID: ");

            comando = instancia.criarInstancia()!

            const criar = teclado("Criar ambiente?[y/n] ");
            if (criar == "y" || criar == "yes") {
                instancia.executar(comando)
            }
            break;

        case '2':
            console.log("***STOP EC2 INSTANCE***");
            const idStop = teclado("INSTANCE-ID: ");
            comando = instancia.pararInstancia(idStop);
            instancia.executar(comando);
            break;

        case '3':
            console.log("***START EC2 INSTANCE***");
            const idStart = teclado("INSTANCE-ID: ");
            comando = instancia.iniciarInstancia(idStart);
            instancia.executar(comando);
            break;

        case '4':
            console.log("***LIST EC2 INSTANCES***");
            comando = instancia.listarInstancias();
            instancia.executar(comando);
            break;
        
        case '9':
            sair = false;
    }

    
}







