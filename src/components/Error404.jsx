import React from "react";

function Error404() {
  return (
    <div>
      <main
        className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-44 sm:py-64 lg:px-8"
        dir="rtl"
      >
        <p className="text-base/8 font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          הדף לא נמצא{" "}
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          מצטערים, לא הצלחנו למצוא את הדף שאתה מחפש.{" "}
        </p>
        <div className="mt-10">
          <a href="/" className="text-sm/7 font-semibold text-indigo-600">
            חזרה למסך הבית
            <span aria-hidden="true" className="pr-1">
              &larr;
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Error404;
