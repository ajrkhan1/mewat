// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";
// import Image from 'next/image'
// import { client } from "@/sanity/client";
// import imageUrlBuilder from '@sanity/image-url'

// const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, slug, "categoryName": category->name, publishedAt}`;

// const options = { next: { revalidate: 30 } };
// const builder = imageUrlBuilder(client)

// export default async function IndexPage() {
//   const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
 
//   return (
//     <>
//     {/* <main className="container mx-auto min-h-screen max-w-3xl p-8">
//       <h1 className="text-4xl font-bold mb-8">Posts</h1>
//       <ul className="flex flex-col gap-y-4">
//         {posts.map((post) => (
//           <li className="hover:underline" key={post._id}>
//             <a href={`/${post.slug.current}`}>
//               <h2 className="text-xl font-semibold">{post.title}</h2>
//               <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
//             </a>
//             <span>{post.categoryName}</span>
//           </li>
//         ))}
//       </ul>
//     </main> */}
//     <div id="wrapper" className="wrap overflow-hidden-x">
//     <div className="section panel overflow-hidden swiper-parent border-top">
//                 <div className="section-outer panel py-2 lg:py-4 dark:text-white">
//                     <div className="container max-w-xl">
//                         <div className="section-inner panel vstack gap-2">
//                             <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
//                                 <div className="block-content panel">
//                                     <div className="swiper" data-uc-swiper="items: 1; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 24;" data-uc-swiper-l="items: 4; gap: 24;">
//                                         <div className="swiper-wrapper">
//                                         {posts.slice(0, 5).map((post) => (
//                                             <div className="swiper-slide">
//                                                 <div>
//                                                     <article className="post type-post panel uc-transition-toggle gap-2">
//                                                         <div className="row child-cols g-2" data-uc-grid>
//                                                             <div className="col-auto">
//                                                                 <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
//                                                                     <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
//                                                                     <img alt={post.title} src={post.image} className="aspect-video rounded-xl" width="100%"/>
                                                                    
//                                                                     </div>
//                                                                     <a href="blog-details.html" className="position-cover"></a>
//                                                                 </div>
//                                                             </div>
//                                                             <div>
//                                                                 <div className="post-header panel vstack justify-between gap-1">
//                                                                     <h3 className="post-title h6 m-0 text-truncate-2">
//                                                                         <a className="text-none hover:text-primary duration-150" href={`/${post.slug.current}`}>{post.title}</a>
//                                                                     </h3>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </article>
//                                                 </div>
//                                             </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
//                                         <i className="icon-1 unicon-chevron-left"></i>
//                                     </div>
//                                     <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
//                                         <i className="icon-1 unicon-chevron-right"></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     </div>
//     </>
//   );
// }


























import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/client";


const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...12]{_id, title, image, slug, "categoryName": category->name, publishedAt}`;



const options = { next: { revalidate: 30 } };



export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
 
    

  return (
    <>
    {/* <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <a href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </a>
            <span>{post.categoryName}</span>
          </li>
        ))}
      </ul>
    </main> */}
    <div id="wrapper" className="wrap overflow-hidden-x">
    <div className="section panel overflow-hidden swiper-parent border-top">
                <div className="section-outer panel py-2 lg:py-4 dark:text-white">
                    <div className="container max-w-xl">
                        <div className="section-inner panel vstack gap-2">
                            <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
                                <div className="block-content panel">
                                    <div className="swiper" data-uc-swiper="items: 1; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 24;" data-uc-swiper-l="items: 4; gap: 24;">
                                        <div className="swiper-wrapper">
                                        {posts.slice(0, 5).map((post) => (
                                            console.log(post),
                                            <div className="swiper-slide">
                                                <div>
                                                    <article className="post type-post panel uc-transition-toggle gap-2">
                                                        <div className="row child-cols g-2" data-uc-grid>
                                                            <div className="col-auto">
                                                                <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                                                                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                                                    <img src={urlFor(post.image).url()} className="aspect-video rounded-xl" />            
                                                                    </div>
                                                                    <a href="blog-details.html" className="position-cover"></a>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="post-header panel vstack justify-between gap-1">
                                                                    <h3 className="post-title h6 m-0 text-truncate-2">
                                                                        <a className="text-none hover:text-primary duration-150" href={`/${post.slug.current}`}>{post.title}</a>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                                        <i className="icon-1 unicon-chevron-left"></i>
                                    </div>
                                    <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                                        <i className="icon-1 unicon-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
}