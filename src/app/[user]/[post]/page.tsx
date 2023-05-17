"use client";
import { CompletePost } from "@/components/complete-post";
import { UserLayout } from "@/components/user-layout";
import { CompletePosts } from "@/utils/mocks/post";
import { useParams } from "next/navigation";

export default function Main() {
  const params = useParams();
  const post = CompletePosts.find(
    (p) => p.id === params.post && p.author === params.user
  );

  return (
    <UserLayout
      user={params.user}
      blogTitle="Malu"
      linkedinLink="https://linkedin.com/in/marialuisacampos"
      githubLink="https://github.com/marialuisacampos"
    >
      {post && (
        <CompletePost
          title={post.title}
          author={post.author}
          content={post.content}
        />
      )}
    </UserLayout>
  );
}
