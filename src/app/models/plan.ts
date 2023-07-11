export class Plan {
    nombrePlan!: string;
    cantDias!: Number;

    constructor(nombrePlan?: string, cantDias?: Number){
        this.nombrePlan = nombrePlan!;
        this.cantDias = cantDias!;
    }
}
