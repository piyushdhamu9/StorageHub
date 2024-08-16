
"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main className="min-h-screen bg-slate-600 dark:bg-slate-700 flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-gray-900 dark:bg-slate-900 text-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/storagehub.jpg"
          height={420}
          width={420}
          alt="Logo"
          className=" rounded-3xl shadow-inner"
        />
        <div className="p-10 lg:w-2/3 flex flex-col space-y-5 ">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to StorageHub
            <br />
            Storing everything for you and your business needs. All in one
            place.
          </h1>
          <p className="text-lg leading-relaxed">
            Enhance your personal storage with StorageHub, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>

          {isSignedIn ? (
            <Link
              href="/dashboard"
              className="flex items-center bg-blue-500 py-3 px-6 w-fit rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              My Files
              <ArrowRight className="ml-3" />
            </Link>
          ) : (
            <div className="flex flex-col items-center p-6  rounded-lg shadow-md space-y-4">
              <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard" mode="modal">
                  <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

