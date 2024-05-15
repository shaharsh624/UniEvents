"use client";
import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_PUBLIC_URL)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const Organizations = () => {
    const [organizations, setorganizations] = useState([]);

    useEffect(() => {
        const databases = new Databases(client);

        let promise = databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ORGS_ID
        );

        promise.then(
            function (response) {
                console.log(response);
                setorganizations(
                    response.documents.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    )
                );
            },
            function (error) {
                console.log(error);
            }
        );
    }, []);

    return (
        <>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-x-20 lg:gap-y-10 m-10">
                {organizations.map((org) => (
                    <>
                        <Link href={`/organizations/${org.slug}`}>
                            <div class="rounded-lg bg-dark-blue py-1 transform transition duration-100 ease-in-out hover:scale-95">
                                <div className="flex justify-center items-center mx-auto my-5">
                                    <Image
                                        src={org.logo}
                                        alt={org.slug}
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className=" flex justify-center items-center rounded-lg mb-3">
                                    <p key={org.slug}>{org.name}</p>
                                </div>
                                <div className=" text-xs flex justify-center text-center items-center mb-5 rounded-lg px-7">
                                    <p key={org.slug}>{org.tagline}</p>
                                </div>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </>
    );
};

export default Organizations;
