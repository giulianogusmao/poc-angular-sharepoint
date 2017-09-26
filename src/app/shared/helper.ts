const url: object = {
  anhumas: '10.129.226.42',
  localhost: 'localhost',
  sopher: '10.72.1.75',
  assets: 'assets/dados/',
};

export class Helper {

  constructor() {
    throw new Error('Class Helper não pode ser instânciada');
  }

  static apiUrl(api: string, server: string = 'sopher'): string {
    if (!url.hasOwnProperty(server)) {
      throw new Error(`Não existe nenhuma referência para o servidor: ${server}`);
    }

    const sr = server === 'assets' ? `${url[server]}${api}` : `http://${url[server]}/webapi/api/${api}`;
    console.log(sr);
    return sr;
  }

}
