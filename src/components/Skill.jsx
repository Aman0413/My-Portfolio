import Image from "next/image";

function Skill({ source, alt, title }) {
  return (
    <Image
      className="tilt-image"
      src={source}
      alt={alt}
      title={title}
      height={60}
      width={60}
    />
  );
}

export default Skill;
