import Logo from "../Logo";
import StarBorder from "../ui/StarBorder";

type Props = {};

const Navbar = ({}: Props) => {
    return (
        <nav className=" py-5 flex justify-between items-center">
            <Logo />

            <ul className=" flex items-center gap-10 text-xs uppercase">
                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <StarBorder as="li">
                    <a href="#contact">Contact</a>
                </StarBorder>
            </ul>
        </nav>
    );
};

export default Navbar;
