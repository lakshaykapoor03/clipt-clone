import React from 'react'
import Logo from './Logo'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <div className="grid grid-flow-col items-center gap-4">
    <Logo />
    <ul className="list-none grid grid-flow-col gap-4 text-white">
        <li>Testimonials</li>
        <li>Pricing</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>FAQ</li>
    </ul>
    <div className='flex justify-end'>
        <Button className=" border-solid border-2    border-red-700">Start hiring</Button>
    </div>
</div>
)
}

export default Header