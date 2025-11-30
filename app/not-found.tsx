import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Halaman Tidak Ditemukan. </p>
      <Link href="/" className="link">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
