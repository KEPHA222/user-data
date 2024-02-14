import Feed from "../components/Feed";
import React from "react";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Your User Data</span>
    </h1>
    <p className="desc text-center">
      JSONPlaceholder is a free online REST API that you can use whenever you
      need some fake data.
    </p>

    <Feed />
  </section>
);

export default Home;

// import Link from "next/link";
// import React from "react";

// export default function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link href="/albums">Albums</Link>
//     </div>
//   );
// }
