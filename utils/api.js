const BASE_API = 'https://yts.am/api/v2/'

class Api {
  /**
   * Get the suggestion from the API
   * @param {number} id 
   */
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
    const { data } = await query.json()
    return data.movies
  }
  /**
   * Get the list of movies to create the categories
   */
  async getCategories() {
    const query = await fetch(`${BASE_API}list_movies.json?`)
    const { data } = await query.json()
    return data.movies
  }
}

export default new Api()