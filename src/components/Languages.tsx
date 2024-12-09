// @/components/Languages.jsx

import Link from "next/link";

export default function Languages() {
  return (
    <div className="flex mb-2 gap-2 text-slate-400">
      <Link href="/en/">English</Link>
      {"."}
      <Link href="/es/">Español</Link>
    </div>
  );
}
