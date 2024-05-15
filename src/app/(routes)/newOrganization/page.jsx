"use client"
import { Client, Databases, Query, ID } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

const Organizations = () => {
  const [organizations, setorganizations] = useState([])

  useEffect(() => {
    // const databases = new Databases(client);

  //   const promise = databases.createDocument(
  //     process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  //     process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ORGS_ID,
  //     ID.unique(),
  //     {'name': 'IEEE CIS PDEU', 'slug': 'icp'}
  // );

    // promise.then(function (response) {
    //   // console.log(response);
    //   setorganizations(response.documents);
    // }, function (error) {
    //   console.log(error);
    // });
  }, [])

  return (
    <>
    New Organization Page
    </>
  );
}

export default Organizations