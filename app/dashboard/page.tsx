// import { auth, currentUser } from "@clerk/nextjs/server";
// import DropZone from "@/Components/DropZone";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebase";
// import { FileType } from "@/typings";
// import TableWrapper from "@/Components/table/TableWrapper";
// import { useAuth } from "@clerk/nextjs";

// import Link from "next/link";

// async function Dashboard() {
  
//   const { userId } = auth();

//   if(!userId){
//     return <Link href="/">Dashboard</Link>
//   }
//   // if(!userId) return;

//   const docsResults = await getDocs(collection(db, "users", userId!, "files"));
//   const skeltonFiles: FileType[] = docsResults.docs.map((doc) => ({
//     id: doc.id,
//     filename: doc.data().filename || doc.id,
//     timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
//     fullName: doc.data().fullName,
//     downloadURL: doc.data().downloadURL,
//     type: doc.data().type,
//     size: doc.data().size,
//   }));

//   // console.log(skeltonFiles);

//   return (
//     <div className="border-t">
//       <DropZone />

//       <section className="container space-y-5">
//         <h2 className="font-bold">All Files</h2>

//         <div>
//           <TableWrapper skeltonFiles={skeltonFiles} />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Dashboard;



// "use client";

// import { useAuth } from "@clerk/nextjs";
// import DropZone from "@/Components/DropZone";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/firebase";
// import { FileType } from "@/typings";
// import TableWrapper from "@/Components/table/TableWrapper";
// import { useEffect, useState } from "react";

// function Dashboard() {
//   const { isSignedIn, userId } = useAuth();
//   const [skeltonFiles, setSkeltonFiles] = useState<FileType[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!isSignedIn) {
//       window.location.href = "/";
//       return;
//     }

//     async function fetchFiles() {
//       try {
//         const docsResults = await getDocs(collection(db, "users", userId!, "files"));
//         const files: FileType[] = docsResults.docs.map((doc) => ({
//           id: doc.id,
//           filename: doc.data().filename || doc.id,
//           timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
//           fullName: doc.data().fullName,
//           downloadURL: doc.data().downloadURL,
//           type: doc.data().type,
//           size: doc.data().size,
//         }));

//         setSkeltonFiles(files);
//       } catch (err) {
//         setError("Failed to fetch files");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchFiles();
//   }, [isSignedIn, userId]);

//   if (!isSignedIn) return null; // Prevent rendering if not signed in

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="border-t">
//       <DropZone />

//       <section className="container space-y-5">
//         <h2 className="font-bold">All Files</h2>

//         <div>
//           <TableWrapper skeltonFiles={skeltonFiles} />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Dashboard;


"use client";

import { useAuth } from "@clerk/nextjs";
import DropZone from "@/Components/DropZone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/Components/table/TableWrapper";
import { useEffect, useState } from "react";

function Dashboard() {
  const { isSignedIn, userId } = useAuth();
  const [skeltonFiles, setSkeltonFiles] = useState<FileType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSignedIn) {
      window.location.href = "/";
      return;
    }

    async function fetchFiles() {
      try {
        const docsResults = await getDocs(collection(db, "users", userId!, "files"));
        const files: FileType[] = docsResults.docs.map((doc) => ({
          id: doc.id,
          filename: doc.data().filename || doc.id,
          timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
          fullName: doc.data().fullName,
          downloadURL: doc.data().downloadURL,
          type: doc.data().type,
          size: doc.data().size,
        }));

        setSkeltonFiles(files);
      } catch (err) {
        setError("Failed to fetch files");
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, [isSignedIn, userId]);

  if (!isSignedIn) return null; // Prevent rendering if not signed in

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <DropZone />

        <section className="space-y-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">All Files</h2>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
            <TableWrapper skeltonFiles={skeltonFiles} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
