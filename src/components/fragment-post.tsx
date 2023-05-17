import Link from "next/link";
import PostTitle from "./post-title";

interface FragmentPostProps {
  title: string;
  author: string;
  content: string;
  id: string;
}

export default function FragmentPost({
  title,
  author,
  content,
  id,
}: FragmentPostProps) {
  return (
    <article className="bg-secondary-dark py-5 px-5 rounded-lg drop-shadow-md flex flex-col gap-4">
      <PostTitle title={title} author={author} />
      <p className="text-sm">{content}</p>
      <Link href={`/${author}/${id}`} className="text-sm text-blue font-bold">
        Read More
      </Link>
    </article>
  );
}
