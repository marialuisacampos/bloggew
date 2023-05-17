import PostTitle from "./post-title";

interface FragmentPostProps {
  title: string;
  author: string;
  content: string;
}

export default function FragmentPost({
  title,
  author,
  content,
}: FragmentPostProps) {
  return (
    <article className="bg-secondary-dark py-5 px-5 rounded-lg drop-shadow-md flex flex-col gap-4">
      <PostTitle title={title} author={author} />
      <p className="text-sm">{content}</p>
      <a href={`/malucamposlima/postlink`} className="text-sm">
        Read More
      </a>
    </article>
  );
}
