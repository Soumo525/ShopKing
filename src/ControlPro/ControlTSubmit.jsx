import React, { useRef, useState } from 'react'
import { useAuth } from '../Pages/AuthProvider'

function ControlTSubmit() {
    const { logoutUser,user,uploadT_image,addToTShirt } = useAuth()
    const [productTitle, setProductTitle ] = useState('')
  const [ productDes, setProductDes] = useState('')
  const [ price, setPrice ] = useState("")
  const [ catagory, setCatagory ] = useState('Anime T-SHIRT')
    const Timg = useRef(null)
    const handleTSubmit = async(e) => {
        e.preventDefault();
        console.log(productTitle);
        console.log(productDes);
        console.log(price);
        console.log(catagory);
        const fileInput = Timg.current.querySelector('input[type="file"]');
        const file = fileInput.files[0];
        if (user) {
            try {
              const fileId = await uploadT_image(file);
              await addToTShirt({ productTitle, productDes, price, catagory, imagekey: fileId });
            } catch (error) {
              console.error('Error:', error);
            }
            setProductTitle('')
            setProductDes('')
            setPrice('')
            setCatagory('')
          }
    
    }
  return (
    <>
     <div className="flex justify-end">
      <button onClick={ logoutUser }
      className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Logout
      </button>
    </div>
<form onSubmit={handleTSubmit} ref={Timg} >
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      T-SHIRT Title
      </label>
      <input onChange={(e) => setProductTitle(e.target.value)}
      class="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-500 rounded py-3 px-4 mb-3 
      leading-tight focus:outline-none focus:bg-white" 
      id="grid-first-name" type="text" placeholder="T-SHIRT"/>
      <p class="text-500 text-xs italic">Please fill out this field.</p>
    </div>
     <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      T-SHIRT image
      </label>
      <input 
      class="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" type="file" placeholder="Doe"/>
    </div> 
  </div>
  {/* Textarea */}
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PRODUCT  DESCRIPTION</label>
        <textarea onChange={ (e) => setProductDes(e.target.value)}
        id="message" rows="4" class="block p-2.5 w-full text-sm 
        text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
      T-SHIRT Price
      </label>
      <input onChange={ (e) => setPrice(e.target.value)}
      class="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-city" type="text" placeholder="100"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Catagory
      </label>
      <div class="relative">
        <select onChange={ (e) => setCatagory(e.target.value)}
        class="block appearance-none w-full bg-gray-200 border 
        border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
        focus:outline-none focus:bg-white focus:border-gray-500" 
        id="grid-state">
          <option>Anime T-SHIRT</option>
          <option>Custome T-SHIRT </option>
          <option>Superhero T-SHIRT</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  
  </div>
    <br></br>
    <button onClick={() => ( console.log("T-Shirt Submited"))}
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Submit
    </button>
    </form>
    </>
  )
}

export default ControlTSubmit