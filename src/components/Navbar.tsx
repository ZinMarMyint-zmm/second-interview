import "../index.css"
import logo from "../assets/Logo(2).png"
import noti from "../assets/Notifications.png"
import user from "../assets/user image.png"
const Navbar = () => {
  return (
    <div className='bg-topbar'>
      <div className='container mx-auto flex justify-between'>
        <img src={logo} alt="" /> 
        <div className='flex items-center justify-center'>
          <img src={noti} className="w-5 h-5 mx-3"  alt="" />
          <img src={user} className="mx-3 w-10 h-10" alt="" />
          <span className='text-white text-xs'>
            <p className='font-semibold'>Liza</p>
            <p>Operator</p>
          </span>
        </div>
        </div>
    </div>
  )
}

export default Navbar