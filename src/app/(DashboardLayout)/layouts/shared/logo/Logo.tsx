//import LogoDark from "public/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/images/logos/xtremelogo.svg" width="100" height="100" alt="logo" />
    </Link>
  );
};

export default Logo;
