import Image from "next/image";

export default function loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Image src="spinner.svg" alt="loading" width={500} height={500} />
    </div>
  );
}
