import React from "react";
import Marquee from "react-fast-marquee";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";
import NEXT from "../assets/Next.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import zod from "../assets/zod.png";
import Apollo from "../assets/apollo.png";
import Firebase from "../assets/firebase.png";
import Typescript from "../assets/TypeScript.png";
import Zod from "../assets/zod.png";
import Prisma from "../assets/Prisma.png";
import Sql from "../assets/SQL.png";
import Graphql from "../assets/GraphQL.png";
import Git from "../assets/git.png";
const Skill = () => {
  const Skills = [
    {
      id: 1,
      image: HTML,
    },
    {
      id: 2,
      image: CSS,
    },
    {
      id: 3,
      image: JS,
    },
    {
      id: 4,
      image: ReactImg,
    },
    {
      id: 5,
      image: Node,
    },
    {
      id: 6,
      image: Github,
    },
    {
      id: 7,
      image: NEXT,
    },
    {
      id: 8,
      image: Tailwind,
    },
    {
      id: 9,
      image: Mongo,
    },
    {
      id: 10,
      image: zod,
    },
    {
      id: 11,
      image: Apollo,
    },
    {
      id: 12,
      image: Firebase,
    },
    {
      id: 13,
      image: Typescript,
    },
    {
      id: 14,
      image: Zod,
    },
    {
      id: 15,
      image: Prisma,
    },
    {
      id: 16,
      image: Sql,
    },
    {
      id: 17,
      image: Graphql,
    },
    {
      id: 18,
      image: Git,
    },
  ];
  return (
    <>
      <div className="px-48 bg-[#0a192f] pb-16 pt-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
          Skills
        </p>
        <p className="pt-4 text-gray-300">
          {" "}
          Check out some of the technologies I've worked with
        </p>

        <Marquee pauseOnHover={true} className="pt-10">
          {Skills.map((skill) => (
            <img
              className="inline-block h-20 object-cover pl-8 cursor-pointer"
              src={skill.image}
              alt="logo"
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Skill;
