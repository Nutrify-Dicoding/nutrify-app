import login1 from "../assets/login1.png"
import background from "../assets/background.png"

const Login = () => {
    return (
        <>
        <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen w-screen fixed top-0 left-0 z-[-2]"></div>
        <div className="flex items-center justify-center mt-[10rem] z-[2]">
        <div className="flex">           
        <img src={login1} alt="background" className="w-[320px] h-[340px]" />
        <div className="container max-w-sm bg-white bg-opacity-5 p-10 rounded-md shadow-lg">
        <h1 className="text-3xl font-thin text-center">Form Login</h1>
        <form action="" className="mt-5">
            <input type="text" className="block w-full mt-3 border border-sky-400 rounded-md h-8 p-2 placeholder-[#002140] text-sm" placeholder="Email"/>
            <input type="password" className="block w-full mt-3 border border-sky-400 rounded-md h-8 p-2 placeholder-[#002140] text-sm" placeholder="Password"/>
            <button className="mt-3 text-sm w-full bg-sky-600 border border-1 px-2 py-1 h-8 rounded-md text-white">Login</button>
        </form>
        </div>
        </div>
        </div>  
        </>
    )
}

export default Login;