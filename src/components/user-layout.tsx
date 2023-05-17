import BlogHeader from "./blog-header";
import { Footer } from "./footer";

interface UserLayoutProps {
  user: string;
  blogTitle: string;
  linkedinLink: string;
  githubLink: string;
  children: React.ReactNode;
}

export function UserLayout({
  blogTitle,
  linkedinLink,
  githubLink,
  children,
  user,
}: UserLayoutProps) {
  return (
    <>
      <BlogHeader
        title={blogTitle}
        linkedinLink={linkedinLink}
        githubLink={githubLink}
        user={user}
      />
      {children}
      <Footer />
    </>
  );
}
