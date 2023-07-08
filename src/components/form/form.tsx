import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IconType } from "react-icons";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Button = (props: { children: string; icon: IconType }): JSX.Element => {
  return (
    <button className="sm:text-sm border-black border-solid border-[3px] rounded-md 2xl:p-2 p-1 font-bold flex justify-center items-center gap-4 duration-150 hover:bg-zinc-100">
      <props.icon className="text-center 2xl:text-3xl text-2xl" />
      {props.children}
    </button>
  );
};

const Form = () => {
  return (
    <div className="font-bold 2xl:max-w-lg sm:max-w-md sm:px-[4.2rem] sm:m-0 m-12 2xl:py-12 sm:py-6 h-screen flex flex-col justify-center">
      <div className="2xl:mb-8 md:mb-4 mb-2">
        <img src={logo} className="w-16 h-16" />
        <h1 className="text-black font-bold 2xl:text-4xl text-2xl">Log In</h1>
        <p className="text-zinc-400 mt-2 sm:text-sm">
          Don't have an account?&nbsp;
          <span className="text-black font-bold md:text-md">
            Create an account
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button icon={FcGoogle}>Continue with Google</Button>
        <Button icon={FaApple}>Continue with Apple</Button>
      </div>
      <div className="flex justify-center">
        <p className="md:text-sm text-center text-zinc-400 2xl:py-4 py-2 w-full flex justify-between items-center before:box-content before:w-[30%] before:h-[0.05rem] before:bg-zinc-400 before:block after:box-content after:w-[30%] after:h-[0.05rem] after:bg-zinc-400 after:block">
          OR
        </p>
      </div>
      <form className="flex 2xl:gap-4 gap-2 flex-col">
        <input
          className="border-2 border-zinc-400 w-full 2xl:p-2 p-1 rounded-md font-bold sm:text-sm"
          type="text"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className="border-2 border-zinc-400 w-full 2xl:p-2 p-1 rounded-md font-bold sm:text-sm"
          type="password"
          name="Password"
          placeholder="Password"
        ></input>
        <button className="bg-black text-white 2xl:p-2 p-1 rounded-md hover:text-zinc-300 duration-150 sm:text-sm">
          Log In
        </button>
      </form>
      <div className="flex flex-col 2xl:my-8 my-4 2xl:gap-4 gap-2 sm:text-sm">
        <p className="underline hover:no-underline cursor-pointer">
          Use single sign-on
        </p>
        <p className="underline hover:no-underline cursor-pointer">
          Reset password
        </p>
      </div>

      <p className="text-zinc-400 text-[0.9rem] pr-12 sm:text-xs">
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
      <p className="text-zinc-400 text-[0.9rem] pr-12 md:text-xs mt-2 mb-4">
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
      <div className="mt-auto gap-4 flex text-zinc-400 sm:text-xs">
        <a className="cursor-pointer">Terms</a>
        <a className="cursor-pointer">Privacy</a>
        <a className="cursor-pointer">Support</a>
      </div>
    </div>
  );
};

export default Form;
