import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";

const FollowBar = () => {
  const {data: users = [] }= useUsers();  
  return (
            <div className='px-6 py-4 hidden lg:block' >
                  <div className="bg-neutral-800 rounded-xl p-4 ">
                        <h2 className="text-white text-xl font-semibold">Follow</h2>
                        <div  className="flex flex-row gap-6 mt-4">
                              {users.map((user:Record<string, any>) => (
                                    <div key= {user.id} className="flex flex-col gap-4">
                                          <Avatar userId={user.id} />
                                          <div className="flex flex-col">
                                                <p className="text-white font-semibold text-sm mr-4px"> {user.name}</p>
                                                <p className="text-neutral-400 text-sm mr-4px ">@{user.username}</p>
                                          </div>                                    
                                    </div> 
                              ))}

                        </div>
                  </div>
            </div>
      );
}

export default FollowBar;