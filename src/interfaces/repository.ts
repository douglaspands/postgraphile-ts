export default interface IRepository<T> {
    get(id: number): Promise<T>;
    find(item: T): Promise<Array<T>>;
    create(item: T): Promise<boolean>;
    update(id: number, item: T): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
