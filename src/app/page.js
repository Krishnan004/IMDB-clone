// app/page.js or app/(home)/page.js

import React from 'react';

// ✅ Memoized MovieCard
const MovieCard = React.memo(function MovieCard({ movie }) {
  return (
    <div className="border p-2 rounded shadow">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title || movie.name} 
        className="w-full h-auto rounded"
      />
      <h2 className="mt-2 font-semibold text-lg">
        {movie.title || movie.name}
      </h2>
      <p className="text-sm text-gray-600">
        {movie.release_date || movie.first_air_date}
      </p>
    </div>
  );
});

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";

  const endpoint = genre === 'fetchTrending' 
    ? '/trending/all/week' 
    : '/movie/top_rated';

   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTM5Mzk5N2FkZWEzYmJlOTk4ZmUyMzg4MWVmODlhMyIsIm5iZiI6MTc0NzM4NDkyNy44MjIsInN1YiI6IjY4MjZmYTVmNDE0NmZkYWE4YjBhODRkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d481tVI0ztt9Lko_rk-0CKRUEOvPx6gzvCtrfujZaY8'
    }
  };

  const res = await fetch(`https://api.themoviedb.org/3${endpoint}?language=en-US&page=1`, options);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {result.results?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
