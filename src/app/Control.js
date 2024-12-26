"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

function Control() {
  const params = useParams();
  const id = params.id;

  return (
    <ul>
      <div>
        <Link href={"/create"}>create</Link>
        {id ? (
          <>
            <div>
              <Link href={`/update/${id}`}>update</Link>
            </div>
            <div>
              <input type="button" value={"delete"}></input>
            </div>
          </>
        ) : null}
      </div>
    </ul>
  );
}

export default Control;
