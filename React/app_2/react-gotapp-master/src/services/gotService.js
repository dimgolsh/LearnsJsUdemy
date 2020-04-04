export default class GotService {
    constructor() {
      this._apiBase = "https://www.anapioficeandfire.com/api";
    }
    async getResorce(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error(`Could not fey ${url} status ${res.status}`);
      }
      const some = await res.json();
  
      return some;
    }
  
    getAllCharacters() {
      return this.getResorce("/characters?page=5&pageSize=10");
    }
    getCharacter(id) {
      return this.getResorce(`/characters/${id}`);
    }
    getAllBooks(){
        return this.getResorce('/books')
    }
  }