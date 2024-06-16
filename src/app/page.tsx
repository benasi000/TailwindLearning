import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen space-y-3">
        <div className="w-1/4 bg-red-500 min-w-min">Logo</div>
        <div className="w-3/4 bg-green-500">Navbar items</div>
      </div>
      <div className="flex min-h-screen">
        <div className="w-1/4 bg-blue-500 min-w-min">Logo</div>
        <div className="w-3/4 bg-yellow-500">Navbar items</div>
      </div>
    </div>

  );
}
