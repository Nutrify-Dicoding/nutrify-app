import background from "../assets/background.png"

const SignUp = () => {
    return (
        <>
         <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen w-screen fixed top-0 left-0 z-[-2]"></div>
         <div className="flex items-center justify-center mt-[10rem] z-[2]">
        <div className="flex">           
        <div className="container max-w-sm bg-white bg-opacity-5 backdrop-blur-sm p-10 rounded-md shadow-lg">
        <h1 className="mt-5 text-lg">
        <span className="text-white mr-[4px] font-bold" >Login</span>
        <span className="text-[#FB8500] font-bold" >Now!</span></h1>
        <form action="" className="-mt-1">
            <input type="text" className="block w-full mt-4 rounded-md h-9 p-3 placeholder-[#002140] text-xs" placeholder="Email"/>
            <input type="password" className="block w-full mt-4 rounded-md h-9 p-3 placeholder-[#002140] text-xs" placeholder="Password"/>
            <button className="mt-4 text-xs w-full bg-[#FB8500] px-2 py-1 h-8 rounded-md text-white">Login</button>
        </form>
        <p className="mt-3 text-xs text-white text-center">Belum punya akun? <a href="#" className="text-[#FB8500] font-bold">Register</a></p>
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default SignUp;