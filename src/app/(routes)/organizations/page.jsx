"use client"
import { Client, Databases, Query } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

const Organizations = () => {
  const [organizations, setorganizations] = useState([])

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ORGS_ID,
    );

    promise.then(function (response) {
      console.log(response);
      setorganizations(response.documents);
    }, function (error) {
      console.log(error);
    });
  }, [])


  return (
    <>
    <div>
      {organizations.map((org) => (
        <h2 key={org.slug}>{org.name}</h2>
      ))}
      </div>
    </>
  );
}

export default Organizations