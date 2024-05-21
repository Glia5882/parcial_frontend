export class Celular {
    constructor(
        public id?: number | null,
        public marca?: string | null,
        public serial?: number| null,
        public fechaCompra?: Date | null,
        public aniooLanzamiento?: Date | null,
        public precio?: number | null,
        public sistemaOperativo?: string | null,
        public gama?: string | null,
    ) {}
}
