import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IconType } from "react-icons";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Button = (props: { children: string; icon: IconType }): JSX.Element => {
  return (
    <button className="border-black border-solid border-[3px] rounded-md p-2 font-bold flex justify-center items-center gap-4 duration-150 hover:bg-zinc-100">
      <props.icon className="text-center text-3xl" />
      {props.children}
    </button>
  );
};

const Form = () => {
  return (
    <div className="font-bold max-w-lg px-[4.2rem] py-12 h-screen flex flex-col">
      <div className="mb-8">
        <img src={logo} className="w-16 h-16" />
        <h1 className="text-black font-bold text-4xl">Log In</h1>
        <p className="text-zinc-400 mt-2    ">
          Don't have an account?&nbsp;
          <span className="text-black font-bold ">Create an account</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button icon={FcGoogle}>Continue with Google</Button>
        <Button icon={FaApple}>Continue with Apple</Button>
      </div>
      <div className="flex justify-center">
        <p className="text-center text-zinc-400 py-4 w-full flex justify-between items-center before:box-content before:w-[30%] before:h-[0.05rem] before:bg-zinc-400 before:block after:box-content after:w-[30%] after:h-[0.05rem] after:bg-zinc-400 after:block">
          OR
        </p>
      </div>
      <form className="flex gap-4 flex-col">
        <input
          className="border-2 border-zinc-400 w-full p-2 rounded-md font-bold"
          type="text"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className="border-2 border-zinc-400 w-full p-2 rounded-md font-bold"
          type="password"
          name="Password"
          placeholder="Password"
        ></input>
        <button className="bg-black text-white p-2 rounded-md hover:text-zinc-300 duration-150">
          Log In
        </button>
      </form>
      <div className="flex flex-col my-8 gap-4">
        <p className="underline hover:no-underline cursor-pointer">
          Use single sign-on
        </p>
        <p className="underline hover:no-underline cursor-pointer">
          Reset password
        </p>
      </div>

      <p className="text-zinc-400 text-[0.9rem] pr-12">
        By Clicking "Continue Apple/Goole", above you acknowledge thaat you have
        agree to our&nbsp;
        <span className="underline hover:no-underline cursor-pointer">
          General Term and Conditions
        </span>
        &nbsp; and have read and acknowledge the&nbsp;
        <span className="underline cursor-pointer hover:no-underline ">
          Privacy Policy
        </span>
      </p>
      <p className="text-zinc-400 text-[0.9rem] pr-12 mt-4">
        This site is protected by reCAPTCHA and the&nbsp;
        <span className="underline hover:no-underline cursor-pointer">
          privacy policy
        </span>
        &nbsp;and&nbsp;
        <span className="underline cursor-pointer hover:no-underline ">
          Term of Service
        </span>
        apply
      </p>
      <div className="mt-auto gap-4 flex text-zinc-400">
        <a className="cursor-pointer">Terms</a>
        <a className="cursor-pointer">Privacy</a>
        <a className="cursor-pointer">Support</a>
      </div>
    </div>
  );
};

export default Form;
