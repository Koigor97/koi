import Image from "next/image";

import { Card } from "../ui/card";

function ImageBox({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <Image
        src="/images/portfolio-img.webp"
        alt="Photo of Koigor, the author"
        width={6240}
        height={4160}
        className="rounded-xl h-full object-cover object-center "
      />
    </Card>
  );
}

export default ImageBox;
