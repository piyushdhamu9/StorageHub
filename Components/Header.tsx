import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center px-4">
        
        <h1 className=" font-bold text-4xl text-center ">StorageHub</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        {/* Theme toggler */}
        <ThemeToggler />

        {/* User button for signed-in users */}
        <UserButton />

        {/* Sign-in button for signed-out users */}
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;


