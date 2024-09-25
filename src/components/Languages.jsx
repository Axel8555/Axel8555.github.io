// @/components/Languages.jsx

import Link from "next/link";

export default function Languages() {
  return (
    <div className="flex mb-2 ">
      <Link href="/en/">English</Link>
      {" | "}
      <Link href="/es/">Español</Link>
    </div>
  );
}
