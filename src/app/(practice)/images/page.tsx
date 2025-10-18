import React from "react";
import Image from "next/image";

const ImagesPage = () => {
  return (
    <>
      <h1>Images Page</h1>
      <Image src="/150x150.png" alt="サンプル画像" width={150} height={150} />
      <div className="relative w-1/2 h-screen">
        <Image
          src="/150x150.png"
          alt="サンプル画像"
          sizes="50vw"
          fill
          objectFit="contain"
        />
      </div>
      <div className="relative w-full lg:w-1/2 h-screen">
        <Image
          src="/150x150-2.png"
          alt="サンプル画像"
          sizes="(max-width: 64rem) 100vw, 50vw"
          fill
          objectFit="cover"
        />
      </div>
      <Image
        src="/150x150-3.png"
        alt="サンプル画像"
        width={150}
        height={150}
        quality={100}
      />
      <Image
        src="/150x150-4.png"
        alt="サンプル画像"
        width={150}
        height={150}
        quality={25}
      />
      <Image
        src="/150x150-5.png"
        alt="サンプル画像"
        width={150}
        height={150}
        priority
      />
      <Image
        src="https://placehold.jp/3d4070/ffffff/150x150.png"
        alt="サンプル画像"
        width={150}
        height={150}
      />
    </>
  );
};

export default ImagesPage;
