import NextImage from "next/image";

// Figma Image (node 132:2427)
// type 1: 초대장 커버 그림(201×201), type 2: 작은 그림(48×48, 둥근 모서리)
// next/image의 Image와 이름이 같아서, 안에서는 NextImage로 불러온다.
// alt: 그림 설명. 장식용 그림이면 빈 글자("")를 넣는다.
type ImageProps = {
  type?: "1" | "2";
  alt: string;
  className?: string;
};

const images = {
  "1": { src: "/images/image-1.png", size: 201, classes: "size-201" },
  "2": { src: "/images/image-2.png", size: 48, classes: "size-48 rounded-media" },
};

export default function Image({ type = "1", alt, className = "" }: ImageProps) {
  const { src, size, classes } = images[type];

  return (
    <NextImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`shrink-0 object-cover ${classes} ${className}`}
    />
  );
}
