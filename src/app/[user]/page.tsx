import BlogHeader from "@/components/blog-header";
import RootLayout from "../layout";
import { PostFragment } from "@/utils/mocks/post";
import FragmentPost from "@/components/fragment-post";
import { Footer } from "@/components/footer";
import { UserLayout } from "@/components/user-layout";

export default function Main() {
  return (
    <UserLayout
      user="marialuisacampos"
      blogTitle="Malu"
      linkedinLink="https://linkedin.com/in/marialuisacampos"
      githubLink="https://github.com/marialuisacampos"
    >
      <div className="flex flex-col gap-10">
        {PostFragment.map((post) => (
          <FragmentPost
            title={post.title}
            content={post.content}
            author="marialuisacampos"
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </UserLayout>
  );
}
