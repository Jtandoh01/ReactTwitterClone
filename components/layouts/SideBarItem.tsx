import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModel from "@/hooks/useLoginModel";

interface SideBarItemProps{
  label: string;
  icon: IconType;
  href?: string;
  onClick?: ()=> void;
  auth?: boolean,
      
}
const SideBarItem: React.FC<SideBarItemProps> = ({
      label,
      icon:Icon,
      href,
      onClick,
      auth
}
      
) => {
     const loginModel = useLoginModel();
     const router = useRouter();
     const {data: currentUser} =  useCurrentUser();
     const handleClick = useCallback(() => {
            if(onClick){
                  return onClick();
            } 
            
            if(auth && currentUser){
                  loginModel.onOpen();
            }
            else if(href){
                  router.push(href);
            }



      },[onClick,router,href,auth,currentUser,loginModel]); 
      

  return (
            <div onClick={handleClick} className="flex flex-row items-center">
                  <div className="
                         relative
                         rounded-full
                         h-14
                         w-14
                         flex
                         items-center
                         justify-center
                         p-4
                         hover:bg-slate-300
                         hover:bg-opacity-10
                         cursor-pointer
                         lg:hidden
                        

                  
                        "
                  >
                        <Icon size={28} color="white" />
                        
                  </div>
                  <div className="
                              relative
                              hidden
                              lg:flex
                              items-center
                              gap-4
                              p-4
                              rounded-full
                              hover:bg-slate-300
                              hover:bg-opacity-10
                              cursor-pointer

                        "
                  >
                        <Icon size={24} color="white" />
                        <p className="hidden lg:block text-white text-xl">
                              {label}
                        </p>

                  </div>

            </div>
  )
}

export default SideBarItem;