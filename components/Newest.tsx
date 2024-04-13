import React from "react";
import { getData } from "@/lib/data";
import { simplifiedProduct } from "@/app/interface";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewestCard from "./NewestCard";

const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
    _id,
      price,
    name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
  }`;

const Newest = async () => {
  const data: simplifiedProduct = await getData(query);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.isArray(data) &&
            data.map((product: simplifiedProduct) => (
              <NewestCard key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Newest;
