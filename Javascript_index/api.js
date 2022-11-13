export default class ApiRick {
    async getDataCharacter() {
        
      const url = await fetch(`https://rickandmortyapi.com/api/character`)
      const data = await url.json();
        return data
    }
    async getDataLocation() {
        
        const url = await fetch(`https://rickandmortyapi.com/api/location`)
        const data = await url.json();
          return data
      }
      async getDataEpisode() {
        
        const url = await fetch(`https://rickandmortyapi.com/api/episode`)
        const data = await url.json();
          return data
      }
  }