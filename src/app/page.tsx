import Head from "next/head";
// import DarkModeToggle from "./component/DarkModeToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript Basics and Examples</title>
        <meta
          name="description"
          content="Learn TypeScript Basics with practical examples and code snippets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">
              TypeScript Documentation
            </h1>
            {/* Dark Mode Toggle Component */}
            {/* <DarkModeToggle /> */}
          </div>
        </nav>

        {/* Content */}
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            TypeScript Basics and Examples
          </h1>

          {/* Section 1: Variables and Basic Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Variables and Basic Types
            </h2>
            <p className="mb-4">
              TypeScript enforces types, making it easier to catch errors early.
              You can declare variables with specific types like{" "}
              <code>number</code>, <code>string</code>, etc.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`let age: number = 20;
              
if (age < 50) {
  age += 10;
  console.log(age); // Output: 30
}`}
            </pre>
            <p className="mt-4">
              In this example, the <code>age</code> variable is defined as a{" "}
              <code>number</code>. We also have a simple condition that checks
              the age and updates its value accordingly.
            </p>
          </section>

          {/* Section 2: Enums */}
          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Enums</h2>
            <p className="mb-4">
              Enums allow us to define a set of named constants.
              TypeScript&apos;s enums can be both numeric and string-based.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`const enum sizes {
  small = 1 + 20, // Output: 21
  medium,
  large,
}
const mySize = sizes.medium;
const yourSize = sizes.large;
console.log(mySize, yourSize); // Output: 22 23`}
            </pre>
            <p className="mt-4">
              Here, <code>sizes</code> is an enum with three sizes: small,
              medium, and large, with automatic increment after the first value.
            </p>
          </section>

          {/* More Sections */}
          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Functions</h2>
            <p className="mb-4">
              Functions in TypeScript can have return types, optional
              parameters, and more.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example 1:</h4>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`function incomeTax(income: number): number {
  if (income > 50_000 && income < 75_000) {
    return income * 1.15; // Tax applied
  }
  return income; // No tax applied
}
let income: number = 20_000;
console.log(incomeTax(income)); // Output: 20000`}
            </pre>

            <h4 className="text-xl font-semibold mt-4 mb-2">
              Example 2 (with Optional Parameters):
            </h4>
            <pre className="bg-gray-800 text-white p-4 rounded">
              {`function incomeTax2(income: number, year?: number): number {
  if (income > 50_000 && income < 75_000 && (year || 2022) >= 2024) {
    return income * 1.15;
  }
  return income;
}
console.log(incomeTax2(20_000)); // Output: 20000`}
            </pre>
            <p className="mt-4">
              Optional parameters, like <code>year?</code>, allow us to pass or
              skip parameters while calling functions.
            </p>
          </section>

          {/* Continue with other sections in a similar format */}
        </div>
      </div>
    </>
  );
}
