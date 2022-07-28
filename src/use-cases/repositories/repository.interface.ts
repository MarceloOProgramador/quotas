
export interface repository {

    find: (cod: string) => Promise<any>;
    findAll: () => Promise<any[]>;
    update: (cod: string, datas: Object) => Promise<any>;
    delete: (cod: string) => Promise<any>;

}