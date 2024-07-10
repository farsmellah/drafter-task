"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";

export default function SortButton() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const sortOptions = {
    title: {
      asc: "title&_order=asc",
      desc: "title&_order=desc",
    },
  };

  const [selectedSort, setSelectedSort] = useState(
    searchParams.get("_sort") || ""
  );

  const handleSortChange = useDebouncedCallback((sortValue) => {
    let params = new URLSearchParams(searchParams);

    switch (sortValue) {
      case sortOptions.title.asc:
        params.set("_sort", "title");
        params.set("_order", "asc");
        break;
      case sortOptions.title.desc:
        params.set("_sort", "title");
        params.set("_order", "desc");
        break;
      default:
        params.delete("_sort");
        params.delete("_order");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 350);

  useEffect(() => {
    handleSortChange(selectedSort);
  }, [selectedSort]);

  return (
    <select
      className="form-select"
      aria-label="Sort select"
      value={selectedSort}
      onChange={(e) => setSelectedSort(e.target.value)}
    >
      <option value="">Sort by</option>
      <option value={sortOptions.title.asc}>A-Z</option>
      <option value={sortOptions.title.desc}>Z-A</option>
    </select>
  );
}
