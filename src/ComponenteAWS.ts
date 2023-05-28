import * as child_process from 'child_process';

export class ComponenteAWS{
    name: string = "";
    count: string = "";

    public executar(comando:string): void{
            try {
              // Executa o comando no terminal
              child_process.execSync(comando, { stdio: 'inherit' });
              console.log("Sucesso!");
            } catch (erro) {
              console.error('Erro ao executar o comando:', erro);
            }
    }

    


}