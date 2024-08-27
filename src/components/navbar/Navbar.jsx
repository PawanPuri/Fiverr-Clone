import { useState } from 'react'
import './Navbar.scss'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [active,setActive]=useState(false)
  const [open,setOpen]=useState(false)
  const isActive=()=>{
    window.scrollY > 0 ? setActive(true):setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);

    return ()=>{
      window.removeEventListener('scroll',isActive)
    }

  },[]);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link className='link' to={'/'}><span className='text'>fiverr</span></Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>explore</span>
                <span>english</span>
                <span>sign up</span>
               {!currentUser?.isSeller && <span>become a seller</span>}
               {!currentUser && <button >join</button>}
               {currentUser &&(
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img  onClick={()=>setOpen(!open)} src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <span>{currentUser?.username}</span>
               {  open && <div className="options">
                    {currentUser?.isSeller && (
                      <>
                     <Link to={'/myGigs'} className='link'> <span>gigs</span></Link>
                      <span>add new gigs</span>
                      
                      </>
                    )}
                    <Link className='link' to={'/orders'}><span>order</span></Link>
                    <Link className='link' to={'/messages'}><span>messages</span></Link>
                    <span>logout</span>
                  </div>}
                </div>
               )}

            </div>
        </div>
       { active &&( <> 
       <hr />
        <div className="menu">
          <span>test1</span>
          <span>test1</span>
        </div>
        </>)}

    </div>
  )
}

export default Navbar
