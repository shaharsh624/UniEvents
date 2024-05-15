"use client";
import { Client, Databases, Query } from "appwrite";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div class="rounded-lg py-1 my-10 mx-20">
        <div class="grid grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-10 m-10">
          <div class="col-span-3">
            <div class="grid grid-cols-3 lg:grid-cols-3 m-4">
              <div class="col-span-1">
                <Image
                  src={organization.logo}
                  alt={organization.slug}
                  width={180}
                  height={180}
                />
              </div>
              <div class="grid col-span-2 grid-rows-3 gap-7">
                <h1 className="text-5xl">{organization.name}</h1>
                <p className="text-2xl">{organization.tagline}</p>
                <p className="text-lg">Science & Technical Committee</p>
              </div>
            </div>
          </div>

          <div class="col-span-1 rounded-lg bg-dark-blue p-2 ">
            <div class="grid grid-cols-2 text-lg row-span-1 m-3">
              <p>Founded: 2019</p>
              <p>Team Size: 50</p>
            </div>
            <div className="row-span-1 grid grid-cols-4 m-8 justify-between">
              <Image
                src={organization.logo}
                alt={organization.slug}
                width={30}
                height={30}
              />
              <Image
                src={organization.logo}
                alt={organization.slug}
                width={30}
                height={30}
              />
              <Image
                src={organization.logo}
                alt={organization.slug}
                width={30}
                height={30}
              />
              <Image
                src={organization.logo}
                alt={organization.slug}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Organization;
