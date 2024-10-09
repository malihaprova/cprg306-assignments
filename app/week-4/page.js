'use client'
 
import { useState } from 'react'

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)
    const increment = () => {
        setQuantity(quantity + 1);
      };
    const decrement = () => {
        setQuantity(quantity - 1);
      };


    return (
        <main class="flex justify-center w-full">
            <div class="p-2 m-4 bg-white text-white w-36">
                <div class="flex justify-between">
                    <span class="m-1 text-black">{quantity}</span>
                    <div class="flex">
                        <button class="m-1 w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" 
                        onClick={decrement}>-</button>
                        <button class="m-1 w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75" 
                        onClick={increment}>+</button>
                    </div>
                </div>
            </div>
        </main>
    );
  }