import React from 'react'
import styles from "./Navbar.module.css"
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Navbar = () => {
  return (
<div>
<div className="flex flex-row items-center justify-between px-6 py-4">

{/* Logo */}
<div>
  <img className="w-24" src="https://cdn.dribbble.com/users/68544/screenshots/14723926/media/93d9b3e92d5425189b06fe08c6746747.png?compress=1&resize=400x300&vertical=top" alt="Linkly Logo" />
</div>

{/* Links */}
<div>
  <ul className="flex flex-row justify-evenly px-6">
    <a href="#"><li>Features</li></a>
    <a href="#"><li>Use Cases</li></a>
    <a href="#"><li>Pricing</li></a>
    <a href="#"><li>Company</li></a>
  </ul>
</div>
{/* Button */}
<div>
  <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 px-4 py-3 w-full"> Register / Login</button>
</div>
</div>
</div>
  )
}

export default Navbar