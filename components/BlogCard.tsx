import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Reseña de disco</h2>
          <p> Maecenas mi est, mollis id bibendum id, dictum ut metus. Aenean efficitur urna a ultrices ultricies. Maecenas vel nibh consequat, dapibus felis eget, ullamcorper sapien. </p>
          <div className="card-actions justify-end">
            <Link href="/blog/test">
            <button className="btn btn-primary"
            >Ver más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
