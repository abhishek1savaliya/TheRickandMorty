import React from 'react'

const Navbar = () => {
  return (
    <div>
  <nav class="bg-gray-700 p-4 flex justify-center">
    <div class="flex items-center space-x-4">
      <a href="/" class="text-white">Character</a>
      {/* <a href="/location" class="text-white">Location</a> */}
      {/* <a href="/episode" class="text-white">Episode</a> */}
    </div>
  </nav>
    </div>
  )
}

export default Navbar
