import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Page not found";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFDFF] font-exo flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <p className="text-brand-blue text-sm md:text-base tracking-wide">
          ERROR 404
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-text">
          Page not found
        </h1>

        <p className="mt-4 text-brand-text/80 text-lg md:text-xl">
          The page{" "}
          <span className="font-medium">{location.pathname}</span> doesn’t exist or
          was moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand-dark-blue px-5 py-3 text-white text-base md:text-lg hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-md border border-brand-dark-blue/30 px-5 py-3 text-brand-text text-base md:text-lg hover:bg-white/60 transition-colors"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
