export class Sistema {
  constructor (
    readonly codigo: string,
    readonly hasModulo: boolean,
    readonly idSistema: number,
    readonly idStatus: number,
    readonly stSistema: string,
    readonly nmSistema: string,
    readonly sgSistema: string,
    readonly descSistema: string,
    readonly gerenteProducao: string,
    readonly gerenteDesenvolvimento: string,
    readonly gerenteSustentacao: string,
    readonly gerenteSimplificacao: string,
    readonly nomeIC: string,
    readonly apelido: string,
    readonly nmFornecedor: string,
    readonly modulos: string,
  ) {
  }
}
