"use client";

import Link from "next/link";

type Props = {
  title: string;
  items: {
    name: string;
    href: string;
    description: string;
  }[];
};

export default function MegaMenu({
  title,
  items,
}: Props) {
  return (
    <div className="group relative">

      <button
        className="
        font-medium
        hover:text-[#155EEF]
        transition
        "
      >
        {title}
      </button>

      <div
        className="
        invisible
        opacity-0
        group-hover:visible
        group-hover:opacity-100
        transition-all
        duration-300

        absolute
        top-full
        left-0
        mt-4

        w-[500px]

        rounded-[24px]

        bg-white

        shadow-[0_30px_80px_rgba(0,0,0,0.15)]

        border
        border-gray-100

        p-6
        "
      >
        <div className="grid gap-3">

          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              rounded-xl
              p-4
              hover:bg-gray-50
              transition
              "
            >
              <div className="font-semibold">
                {item.name}
              </div>

              <div
                className="
                text-sm
                text-gray-500
                mt-1
                "
              >
                {item.description}
              </div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}