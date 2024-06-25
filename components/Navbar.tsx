import logo from "../assets/logo.png"
import Image from 'next/image'

function Navbar() {
    return (
        <div className="w-full flex px-36 py-3 justify-between">
            <img src="/logo.png" className="w-[140px]" alt="logo"/>
            <div className="flex font-semibold gap-3 text-[13px]">
                <a href="#home">HOME</a>
                <a href="#home">ACTIVITIES</a>
                <a href="#home">CONTACT</a>
                <a href="#news">ABOUT</a>
            </div>
        </div>
    )
}

export default Navbar