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
  
    async getAllCharacters() {
      const res = await this.getResorce("/characters?page=5&pageSize=10");
      return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
      const res = await this.getResorce(`/characters/${id}`);
      return this._transformCharacter(res);

    }
    getAllBooks(){
        return this.getResorce('/books');
    }
    getAllHouses(){
      return this.getResorce('/houses/');
    }
    getHouse(id){
      return this.getResorce(`/houses/${id}`);
    }

    _transformCharacter(char){
      console.log(char);
      return {
        url: char.url.match(/\d+/gm)[0],
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died ? char.died : 'unknown',
        culture: char.culture
      };
    }
    _transformHouse(house){
      return {
        name: house.name,
        region: house.region,
        words: house.words,
        titles: house.titles,
        overlord: house.overlord,
        ancestralWeapons: house.ancestralWeapons
      };
    }

    _transformBook(book){
      return {
        name: book.name,
        numberOfPages: book.numberOfPages,
        publisher: book.publisher,
        released: book.released
      }
    }
  }