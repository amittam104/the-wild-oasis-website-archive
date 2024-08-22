"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = searchParam.get("capacity");

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParam);

    params.set("capacity", filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className=" flex items-center">
      <Button
        filter="all"
        handleFilter={handleFilter}
        currentFilter={currentFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        currentFilter={currentFilter}
      >
        1 &mdash; 3
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        currentFilter={currentFilter}
      >
        4 &mdash; 7
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        currentFilter={currentFilter}
      >
        8 &mdash; 10
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, currentFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 border border-primary-800 ${
        currentFilter === filter ? "bg-primary-700" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
