import type { MetaFunction } from "@remix-run/node";
import { Button, DarkThemeToggle } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple To-Do" },
    { name: "description", content: "Just a simple to-do app built with React and Remix." },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <DarkThemeToggle />
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">To-Do App</h1>
        </header>
        <Button>
          <FaPlus className="mr-2 h-5 w-5" />
          Add New Task
        </Button>
      </div>
    </div>
  );
}
