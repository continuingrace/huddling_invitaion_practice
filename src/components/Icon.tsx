import Image from "next/image";

// Figma icon/check, icon/plus, icon/minus, icon/none
// none은 아이콘 없이 자리만 차지한다 (NavBar 빈 칸용).
type IconProps = {
  name: "check" | "plus" | "minus" | "none";
  size?: 20 | 24 | 32;
  className?: string;
};

const sizeClasses = {
  20: "size-20",
  24: "size-24",
  32: "size-32",
};

export default function Icon({ name, size = 24, className = "" }: IconProps) {
  const classes = `shrink-0 ${sizeClasses[size]} ${className}`;

  if (name === "none") {
    return <span aria-hidden className={`block ${classes}`} />;
  }

  return (
    <Image
      src={`/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={classes}
    />
  );
}
