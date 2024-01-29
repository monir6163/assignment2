/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { createStudent } from "@/actions/createStudent";
import Button from "../Button";
const AddTodo = () => {
  return (
    <div>
      <form
        className="w-full md:w-1/2 mx-auto shadow-lg rounded p-4 border"
        action={createStudent}
      >
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              name="first_name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              name="last_name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-age"
            >
              Age <span className="text-red-600">*</span>
            </label>
            <input
              name="age"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-age"
              type="number"
              placeholder="30"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-grade"
            >
              Grade <span className="text-red-600">*</span>
            </label>
            <input
              name="grade"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-grade"
              type="text"
              placeholder="A+"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-courses"
            >
              Courses <span className="text-red-600">*</span>
            </label>
            <select
              name="courses"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-courses"
            >
              <option value="">Select Course</option>
              <option value="Nextjs">Nextjs</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Nodejs">Nodejs</option>
            </select>
          </div>
        </div>
        <div className="px-3">
          <Button />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
