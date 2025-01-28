import { ArrowRight } from "iconsax-react";
import Logo from "../Logo";

type Props = {};

const Footer = ({}: Props) => {
    const year = new Date().getFullYear();
    return (
        <footer className=" py-10 space-y-4">
            <div className="  pb-10">
                <div className=" text-8xl font-bold">
                    <h1>Get</h1> <h1>in</h1> <h1>touch</h1>
                </div>

                <p className=" text-base mt-10 md:w-1/2">
                    I'm currently available for freelance work. If you have a
                    project that you want to get started, think you need my help
                    with something or just fancy saying hey, then get in touch.
                </p>
            </div>

            <div className=" flex items-center justify-between ">
                <ul className=" flex items-center gap-10 text-xs uppercase mt-10">
                    <li>
                        <a href="mailto:olafisoyevincent@gmail.com">Email</a>
                    </li>
                    <li>
                        <a href="tel:+2347034579678">Phone</a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://linkedin.com/in/oluwaseun-olafisoye"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>

                <div className=" flex gap-3 items-center justify-between">
                    <input
                        type="text"
                        className=" h-10 rounded-2xl bg-[#bbbbbb] text-black pl-4 placeholder:text-black"
                        placeholder="Type your email"
                    />

                    <button className=" rounded-xl h-10 px-5 bg-[#c8c8cf] text-black">
                        <ArrowRight size="20" />{" "}
                    </button>
                </div>
            </div>

            <div className=" border-t border-t-1 border-gray-800 flex justify-between gap-10 items-center py-5">
                <Logo />

                <div className=" text-xs">© Oluwaseun Olafisoye | {year}</div>
            </div>
        </footer>
    );
};

export default Footer;
