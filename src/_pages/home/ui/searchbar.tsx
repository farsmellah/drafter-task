"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((search: string) => {
    let params = new URLSearchParams(searchParams);
    if (search) {
      params.set("title_like", search);
    } else {
      params.delete("title_like");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 350);

  return (
    <div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <i className="bi bi-search"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("title_like")?.toString()}
        />
      </div>
    </div>
  );
}
