import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/18ef6723-6025-43e7-acf5-888ff8eda138-1sxq8.jpg",
  "https://utfs.io/f/f59f5374-d7d0-4ca9-81cc-e6694c0f9060-1x47w.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className='w-48 p-4'>
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
