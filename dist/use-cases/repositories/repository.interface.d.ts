export interface RepositoryInterface {
    find: (cod: string) => Promise<any>;
    findAll: () => Promise<any[]>;
    create: (datas: Object) => Promise<any>;
    update: (cod: string, datas: Object) => Promise<any>;
    delete: (cod: string) => Promise<any>;
}
