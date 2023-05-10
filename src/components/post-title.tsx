interface PortTitleProps {
  title: string;
  author: string;
}

export default function PostTitle({ title, author }: PortTitleProps) {
  return (
    <h1 className="font-decorated text-3xl font-bold uppercase">{title}</h1>
  );
}
