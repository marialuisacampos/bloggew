import BlogHeader from "@/components/blog-header";
import RootLayout from "../layout";
import { PostFragment } from "@/utils/mocks/post";
import FragmentPost from "@/components/fragment-post";

export default function Main() {
  return (
    <RootLayout>
      <BlogHeader
        title="Malu"
        linkedinLink="https://linkedin.com/in/marialuisacampos"
        githubLink="https://github.com/marialuisacampos"
        resumeLink="https://docs.google.com/document/d/1TrFNwBTk2wHQ3gkKtxlLadz8Z8Gag6p13DQnkZ-vvrU/edit?usp=sharing"
      />
      <div className="flex flex-col gap-10">
        {PostFragment.map((post) => (
          <FragmentPost
            title={post.title}
            content={post.content}
            author="Malu"
            key={post.title}
          />
        ))}
      </div>
    </RootLayout>
  );
}
