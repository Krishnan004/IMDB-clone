import { NextResponse } from "next/server";

export async function GET(request) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
//   );
//   const data = await res.json();
  return NextResponse.json({
    message: "Hello from the server",
  });
}