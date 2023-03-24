import SideBarLogo from './SideBarLogo';
import SideBarItem from './SideBarItem';
import SideBarTweetButton from './SideBarTweetButton';
import { BiLogOut} from 'react-icons/bi'
import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const SideBar = () => {
  const items = [
    {
      icon: BsHouseFill,
      label: 'Home',
      href: '/'
    },
    {
      
      icon: BsBellFill,
      label: 'Notifications',
      href: '/notifications'

    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: FaUser
    }
  ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col item-end'>
        <div className='space-y-2 lg:w-[230px'>
          <SideBarLogo />
          {items.map((item)=>(
            <SideBarItem
            key={item.href}
            href={item.href} 
            icon={item.icon} 
            label={item.label}

            />
          ))}
          <SideBarItem onClick={()=>{}} icon={ BiLogOut} label='Logout'/>
          <SideBarTweetButton/>
        </div>
      </div>

    </div>
  )
}

export default SideBar