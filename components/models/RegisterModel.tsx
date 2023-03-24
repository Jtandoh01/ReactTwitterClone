import useLoginModel from "@/hooks/useLoginModel";
import useRegisterModel from "@/hooks/useRegisterModel";
import { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";


const RegisterModel = () => {
  const loginModel= useLoginModel();
  const registerModel = useRegisterModel();
  
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [name, setName]= useState('');
  const [userName, setUserName]= useState('');
  const [isLoading, setIsLoading]= useState(false);
  const onToggle = useCallback(()=>{
   if(isLoading){
      return;
   }
   registerModel.onClose();
   loginModel.onOpen();

  }, [isLoading,registerModel,loginModel]);


  const onSubmit = useCallback(async ()=>{
      try{
         setIsLoading(true);

          //TODO ADD REGISTER LOG IN

         registerModel.onClose();

      }
      catch(error){
         console.log(error);
      }
      finally{
         setIsLoading(false);
      }

   }, [registerModel]);



  const bodyContent = (
      <div className="flex flex-col gap-4">
         <Input
            placeholder="Name"
            onChange={(e)=> setName (e.target.value)}
            value= {name}
            disabled= {isLoading}


         />
         <Input
            placeholder="Email"
            onChange={(e)=> setEmail (e.target.value)}
            value= {email}
            disabled= {isLoading}


         />
         <Input
            placeholder="Username"
            onChange={(e)=> setUserName (e.target.value)}
            value= {userName}
            disabled= {isLoading}


         />
         <Input
            placeholder="Password"
            onChange={(e)=> setPassword (e.target.value)}
            value= {password}
            disabled= {isLoading}


         />
      </div>
  )


  const footerContent = (
      <div className="text-neutral-400 text-center mt-4">
         <p>
            Already have an account?
            <span
               onClick={onToggle} 
               className="
               cursor-pointer 
               text-white 
               hover:underline
            "
            
            >
               Login

            </span>
         </p>
      </div>
  )
  return (
    <Model
         disabled={isLoading}
         isOpen ={registerModel.isOpen}
         title = 'Create a new account'
         actionLabel="Sign up"
         onClose={registerModel.onClose}
         onSubmit={onSubmit}
         body={bodyContent}
         footer={footerContent}

      />
   );
}

export default RegisterModel;