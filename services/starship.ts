export default class Starship {
    static getAll(page: number, search: string = "") {
        return useApiFetch(`https://swapi.dev/api/starships?page=${page}&${search ? 'search='+ search : ''}`, {
            withoutData: false,
        })
    }

    static getById(id: number) {
        return useApiFetch(`https://swapi.dev/api/starships/${id}`)
    }
}
