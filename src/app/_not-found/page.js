// app/_not-found/page.js or app/not-found.js (depending on structure)
export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
