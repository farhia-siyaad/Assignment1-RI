function Header() {
     return <div className='flex justify-between p-4'>
    <h1 className='text-red-500 font-bold text-3xl'>Xplore</h1>
     <ul className='flex gap-8 text-2xl text-black'>
       <li>Home</li>
       <li>Service</li>
       <li>About</li>
       <button className='bg-red-500 py-1 px-2 border-2 border-red-600 rounded-md'>signup</button>
     </ul>
   
     </div>
         
   }
   export default Header