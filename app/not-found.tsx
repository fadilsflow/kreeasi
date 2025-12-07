
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen space-y-4">
      <div className="flex items-center border-b pb-3">
        <p className="text-3xl font-medium text-primary-brand border-r pr-4">404</p>
        <p className="pl-4">Halaman yang anda cari tidak Ditemukan.</p>
      </div>
      <Link href="/" className="underline ">
        Kembali ke Beranda.
      </Link>
    </div>
  );
}
