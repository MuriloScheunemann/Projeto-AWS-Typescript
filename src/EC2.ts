import { ComponenteAWS } from './ComponenteAWS'

export class EC2 extends ComponenteAWS {
    ami: string = "";
    type: string = "";
    key: string = "";
    sg: string = "";
    subnet: string = "";

    criarInstancia() {
        if (this.ami != "" && this.type != "" && this.key != "" && this.sg != "" && this.subnet != "") {
            return (`aws ec2 run-instances --image-id "${this.ami}" --count ${this.count} --instance-type "${this.type}" --key-name "${this.key}" --security-group-ids "${this.sg}" --subnet-id "${this.subnet}" --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=${this.name}}]'\n`)
        } else {
            console.log("Parametros incorretos!");
        }
    }
    pararInstancia(id:string): string{
        return `aws ec2 stop-instances --instance-ids "${id}" --output yaml-stream`
    }
    iniciarInstancia(id:string): string{
        return `aws ec2 start-instances --instance-ids "${id}" --output yaml-stream`
    }
    listarInstancias(){
        return "aws ec2 describe-instances \
        --filters Name=tag-key,Values=Name \
        --query 'Reservations[*].Instances[*].{Instance:InstanceId, Name:Tags[?Key==`Name`]|[0].Value, State:State.Name}' \
        --output table"
    }



}

