import PostTitle from "./post-title";

interface CompletePostProps {
  author: string;
  title: string;
  content: string;
}

export function CompletePost({ title, author, content }: CompletePostProps) {
  return (
    <article className="flex flex-col gap-4">
      <PostTitle title={title} author={author} />
      <p>{content}</p>
    </article>
  );
}
