import { Card, CardContent } from "../ui/card";

import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

import { Button } from "../ui/button";
import Link from "next/link";

function HeroBox({ className }: { className?: string }) {
  return (
    <Card
      className={`${className} bg-gradient-to-r from-[#f3cc6b] via-[#fcd17a] to-[#fad997] bg-opacity-30  backdrop-blur-md shadow-lg py-10 px-8`}
    >
      <CardContent className="grid gap-6 p-0">
        <div className="grid gap-2">
          <h1 className="text-3xl md:text-4xl font-bold ">
            Hi 👋🏾, I&apos;m Koigor, a dedicated Software Developer. Turning
            complex problems into innovative solutions with code.
          </h1>
          <p className="text-lg md:text-xl ">
            I specialize in creating scalable, dynamic, and responsive web
            applications using modern technologies like React, Node.js, MongoDB,
            and more.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-bodyText text-base" asChild>
            <a href="mailto:koigorfogbawa@gmail.com">Contact Me</a>
          </Button>
          <Button
            className="bg-secondary1 text-base hover:bg-green-800"
            asChild
          >
            <a
              href="../../public/docs/SamuelTuray_Resume%20.pdf"
              download="SamuelTuray_Resume.pdf"
            >
              Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-4">
          <Link href="https://github.com/Koigor97">
            <SiGithub className="hover:text-secondary1" />
          </Link>

          <Link href="https://www.linkedin.com/in/samuel-turay1/">
            <SiLinkedin className="hover:text-secondary1" />
          </Link>

          <Link href="https://www.instagram.com/koigor101/">
            <SiInstagram className="hover:text-secondary1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default HeroBox;
