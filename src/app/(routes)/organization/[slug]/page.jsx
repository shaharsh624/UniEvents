"use client";
import { Client, Databases, Query } from "appwrite";
import { useEffect, useState } from "react";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const Organization = ({ params }) => {
  const [organization, setorganization] = useState([]);
  const { slug } = params;

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ORGS_ID,
      [Query.equal("slug", slug)]
    );

    promise.then(
      function (response) {
        console.log(response);
        setorganization(response.documents[0]);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <h1>{organization.name}</h1>
    </>
  );
};

export default Organization;
