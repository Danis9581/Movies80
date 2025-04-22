export const fetch80sHorrorMovies = async (page = 1) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=27&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31&page=${page}`
    );
    const data = await response.json();
    return {
      results: data.results.filter(movie => movie.poster_path),
      totalPages: data.total_pages,
      currentPage: page
    };
  };