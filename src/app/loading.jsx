import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image className="h-96" width={100} height={100} src="/spinner.svg" alt="loading.."/>
    </div>
  );
};

export default Loading;
