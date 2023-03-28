
import axios from 'axios';
import { useCallback, useState } from "react";
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';


import useLoginModel from "@/hooks/useLoginModel";
import useRegisterModel from "@/hooks/useRegisterModel";


import Input from "../Input";
import Model from "../Model";


const RegisterModel = () => {
  const registerModel = useRegisterModel(); 
  const loginModel= useLoginModel();

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [name, setName]= useState('');
  const [username, setUserName]= useState('');
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

         //TODO ADD REGISTER & LOG IN
         await axios.post('/api/register', {
            email,
            username,
            name,
            password,
         });

         toast.success('Account created. Congrats!!');

         signIn('credentials', {
            email,
            password
         })

         registerModel.onClose();     

      }
      catch(error){
         console.log(error);
         toast.error('Opps! Something went wrong! ');
      }
      finally{
         setIsLoading(false);
      }

   }, [registerModel, email, username, name, password]);



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
            type='email'
            onChange={(e)=> setEmail (e.target.value)}
            value= {email}
            disabled= {isLoading}


         />
         <Input
            placeholder="Username"
            onChange={(e)=> setUserName (e.target.value)}
            value= {username}
            disabled= {isLoading}


         />
         <Input
            placeholder="Password"
            type='password'
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