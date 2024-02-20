import React, { useContext, useState } from "react";
import { useRef } from "react";
import { FilterContext } from "../context/Context";



const Filter = ({
  category,
  catHandler,
  cat,
  price,
  setPrice,
  setRating,
  setCheck,
}) => {
  
  const inpRef = useRef()
  const {product} = useContext(FilterContext)

  const quaHandler = (category) => {
    console.log(category);
    let itemCount = 0;
    for (let p of product) {
      if (p.category == category) {
        itemCount++;
      }
    }
    return "(" + itemCount + ")";
  };

  return (
    <div className="w-[250px] ">
      <div className="font-bold text-center text-2xl">Category</div>
      <ul>
        <li
          className={`p-2 shadow-md rounded-md hover:bg-blue-500 hover:text-white  shadow-blue-500 mt-2 text-xl ${
            cat.length == 0 ? "active-category" : ""
          }`}
          onClick={() => {
            catHandler(null);
          }}
        >
          All
        </li>
        {category.map((d, i) => {
          return (
            <li
              key={i}
              className={`p-2 shadow-md rounded-md hover:bg-blue-500 hover:text-white  shadow-blue-500 mt-2 text-xl flex justify-between ${
                cat.indexOf(d) != -1 ? "active-category" : ""
              }`}
              onClick={() => {
                catHandler(d);
              }}
            >
              {d} <span>{cat.indexOf(d) != -1 ? quaHandler(d) : ""}</span>
            </li>
          );
        })}
      </ul>

      <div className="font-bold text-center text-2xl mt-3">Price</div>

      <label className="block mb-2 text-sm font-medium text-gray-900">
        From:
      </label>
      <input
        type="number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="From"
        required
        value={price.from}
        onChange={(e) => {
          setPrice({
            from: parseInt(e.target.value),
            to: price.to,
          });
        }}
      ></input>

      <label className="block mb-2 text-sm font-medium text-gray-900">
        To:
      </label>
      <input
        type="number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="To"
        required
        value={price.to}
        onChange={(e) => {
          setPrice({
            from: price.from,
            to: parseInt(e.target.value),
          });
        }}
      ></input>

      <div className="font-bold text-center text-2xl mt-3">Rating</div>
      <form action="" ref={inpRef}>
        <div>
          <input
            id="checked-checkbox"
            type="checkbox"
            value="4"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            onClick={(e) => {
              setCheck(e.target.checked);
              setRating(e.target.value);
            }}
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-md font-medium text-gray-900 "
          >
            4+ Rating ⭐
          </label>
        </div>
        <div>
          <input
            id="checked-checkbox"
            type="checkbox"
            value="3"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            onClick={(e) => {
              setRating(e.target.value);
              setCheck(e.target.checked);
            }}
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-md font-medium text-gray-900 "
          >
            3+ Rating ⭐
          </label>
        </div>
        <div>
          <input
            id="checked-checkbox"
            type="checkbox"
            value="2"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
            onClick={(e) => {
              setRating(e.target.value);
              setCheck(e.target.checked);
            }}
          />
          <label
            for="checked-checkbox"
            class="ms-2 text-md font-medium text-gray-900 "
          >
            2+ Rating ⭐
          </label>
        </div>
      </form>
      <button
        className="text-white text-2xl bg-red-600 rounded-xl pt-2 pb-2 ps-4 pe-4 mt-4 ms-3"
        onClick={() => {
          // setCat(null)
          setPrice({
            from: 0,
            to: 0,
          });
          setRating(null)
         inpRef.current.reset()
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
