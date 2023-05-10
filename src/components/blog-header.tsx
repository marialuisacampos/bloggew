interface BlogHeaderProps {
  title: string;
  linkedinLink: string;
  githubLink: string;
  resumeLink: string;
}

export default function BlogHeader({
  title,
  linkedinLink,
  githubLink,
  resumeLink,
}: BlogHeaderProps) {
  return (
    <header className="flex justify-between pb-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-6 items-center">
        <a href={linkedinLink}>LinkedIn</a>
        <a href={githubLink}>GitHub</a>
        <a href={resumeLink}>Resume</a>
      </div>
    </header>
  );
}
