interface Avatar {
  url: string;
  className?: string;
}

function Avatar({ url, className }: Avatar) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile Pic"
      className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 hover:shadow-md ${className}`}
    />
  );
}

export default Avatar;
