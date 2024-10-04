import Head from "next/head";
import Image from "next/image";
// import DarkModeToggle from "./components/DarkModeToggle";

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

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
        {/* Navbar */}
        <nav className="bg-gray-800 overflow-x-auto p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              TypeScript Documentation
            </h1>
            {/* Dark Mode Toggle Component */}
            {/* <DarkModeToggle /> */}
          </div>
        </nav>

        {/* Breadcrumbs */}
        <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex flex-row gap-3 text-wrap flex-wrap items-center">
            <p>Topics: </p>
            <ul className="flex space-x-4 text-sm sm:text-md">
              <li>
                <a
                  href="#variables-basic-types"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Variables and Basic Types
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#enums"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Enums
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#functions"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Functions
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#objects-readonly"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Objects and Readonly
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#type-aliases"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Type Aliases
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#union-types"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Union Types
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#intersection-types"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Intersection Types
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#literal-types"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Literal Types
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#nullable-types"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Nullable Types
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#optional-chaining"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Optional Chaining
                </a>
              </li>{" "}
              {` >`}
              <li>
                <a
                  href="#optional-call-operator"
                  className="text-blue-600 dark:text-blue-400 text-nowrap"
                >
                  Optional Call Operator
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content */}
        <div className="container mx-auto p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 pb-1 border-b-2 border-gray-100 w-fit">
            TypeScript Basics and Examples
          </h1>

          {/* Section 1: Variables and Basic Types */}
          <section id="variables-basic-types">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              1. Variables and Basic Types
            </h2>
            <p className="mb-4">
              TypeScript enforces types, making it easier to catch errors early.
              You can declare variables with specific types like{" "}
              <code>number</code>, <code>string</code>, etc.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
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
          <section id="enums">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              2. Enums
            </h2>
            <p className="mb-4">
              Enums allow us to define a set of named constants.
              TypeScript&apos;s enums can be both numeric and string-based.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
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

          {/* Section 3: Functions */}
          <section id="functions">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              3. Functions
            </h2>
            <p className="mb-4">
              Functions in TypeScript can have return types, optional
              parameters, and more.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example 1:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
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
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
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

          {/* Section 4: Objects and Readonly Properties */}
          <section id="objects-readonly">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              4. Objects and Readonly Properties
            </h2>
            <p className="mb-4">
              Objects in TypeScript can be defined with specific properties, and
              some properties can be marked as <code>readonly</code> to prevent
              reassignment.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`const employee: {
  readonly id: number;
  name: string;
  age?: number; // Optional property
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = "Trishon";
employee.age = 25;
// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property`}
            </pre>
            <p className="mt-4">
              This defines an employee object where <code>id</code> is readonly,
              meaning it cannot be changed after assignment.
            </p>
          </section>

          {/* Section 5: Type Aliases */}
          <section id="type-aliases">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              5. Type Aliases
            </h2>
            <p className="mb-4">
              Type aliases allow us to define custom types to be reused across
              the codebase.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`type EmployeeType = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
};

const Employee: EmployeeType = {
  id: 1,
  name: "",
  age,
  retire: (date: Date) => {
    console.log(date);
  },
};`}
            </pre>
            <p className="mt-4">
              <code>EmployeeType</code> is a custom type that can be reused to
              define different employee objects.
            </p>
          </section>

          {/* Section 6: Union Types */}
          <section id="union-types">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              6. Union Types
            </h2>
            <p className="mb-4">
              Union types allow a variable to have multiple types. You can use
              union types for flexibility.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`function kgToLbs(weight: number | string) {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10)); // Output: 22
console.log(kgToLbs("10")); // Output: 22`}
            </pre>
            <p className="mt-4">
              This function accepts either a number or a string, processes it
              accordingly, and returns the result.
            </p>
          </section>

          {/* Section 7: Intersection Types */}
          <section id="intersection-types">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              7. Intersection Types
            </h2>
            <p className="mb-4">
              Intersection types combine multiple types into one.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`type Draggable = {
  drag: () => void;
};
type Resizable = {
  resizes: () => void;
};

type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag: () => {},
  resizes: () => {},
};`}
            </pre>
            <p className="mt-4">
              <code>UIWidget</code> inherits both <code>Draggable</code> and{" "}
              <code>Resizable</code> types, meaning the object must implement
              both methods.
            </p>
          </section>

          {/* Section 8: Literal Types */}
          <section id="literal-types">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              8. Literal Types
            </h2>
            <p className="mb-4">
              Literal types allow you to specify exact values for types.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`type Quantity = 50 | 100 | 150;
let quantity: Quantity = 100;

type Sizes = "small" | "medium" | "large";
let shirtSize: Sizes = "small";`}
            </pre>
            <p className="mt-4">
              Here, <code>Quantity</code> can only be 50, 100, or 150, and{" "}
              <code>Sizes</code> can only be small, medium, or large.
            </p>
          </section>

          {/* Section 9: Nullable Types */}
          <section id="nullable-types">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              9. Nullable Types
            </h2>
            <p className="mb-4">
              Nullable types allow a variable to be either a specific type or{" "}
              <code>null</code> or <code>undefined</code>.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet("Hello!"); // Output: HELLO!
greet(null); // Output: Hola!
greet(undefined); // Output: Hola!`}
            </pre>
            <p className="mt-4">
              This function accepts <code>string</code>, <code>null</code>, or{" "}
              <code>undefined</code> and handles them accordingly.
            </p>
          </section>

          {/* Section 10: Optional Chaining */}
          <section id="optional-chaining">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              10. Optional Chaining
            </h2>
            <p className="mb-4">
              Optional chaining allows you to access properties of an object
              that may not exist.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`type Customer = {
  birthDate?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthDate: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthDate?.getFullYear()); // Output: current year or undefined`}
            </pre>
            <p className="mt-4">
              Here, if <code>customer</code> or <code>birthDate</code> is{" "}
              <code>null</code> or <code>undefined</code>, the optional chaining
              operator <code>?.</code> prevents the code from throwing an error.
            </p>
          </section>

          {/* Section 11: Optional Call Operator */}
          <section id="optional-call-operator">
            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
              11. Optional Call Operator
            </h2>
            <p className="mb-4">
              You can also conditionally call a function if it exists.
            </p>
            <h4 className="text-xl font-semibold mb-2">Example:</h4>
            <pre className="bg-gray-800 overflow-x-auto text-white p-4 rounded">
              {`let log: any = (message: string) => console.log(message);
let log1: any = null;

log1?.("a"); // No output, as log1 is null`}
            </pre>
            <p className="mt-4">
              The <code>?.</code> ensures the function is called only if it
              exists.
            </p>
          </section>
        </div>

        {/* Footer */}
        <nav className="bg-gray-800 overflow-x-auto p-4 shadow-lg">
          <div className="container mx-auto flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-2">
            <div className="text-white flex flex-row gap-2">
              <p className="flex flex-row gap-2 items-center text-sm sm:text-lg">
                <strong>Author -</strong>
                <Image
                  height={20}
                  width={20}
                  src="/images/author/trishon baidaya shontu.jpeg"
                  alt="trishon baidaya shontu"
                  className="rounded-full p-[2px] w-6 sm:w-8 h-6 sm:h-8 border-[1px] border-gray-100"
                />
                <span> Engr. Trishon Baidaya Shontu</span>
              </p>
            </div>
            <div className="date">Updated - 4th October, 2024</div>
            {/* Dark Mode Toggle Component */}
            {/* <DarkModeToggle /> */}
          </div>
        </nav>
      </div>
    </>
  );
}
