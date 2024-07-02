import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import img from "/public/img.png";
import { useNavigate, useParams } from "react-router-dom";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// Define the data types
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
}

export default function ArticleDetail() {
  const { id } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://kb.etvbharat.com/keycloak/wp-json/wp/v2/posts?status=publish"
      )
      .then((response) => {
        const fetchedArticles = response.data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered,
          description: DOMPurify.sanitize(item.content.rendered),
          content: DOMPurify.sanitize(item.content.rendered),
        }));

        setArticles(fetchedArticles);
        const foundArticle = fetchedArticles.find(
          (article: Article) => article.id === parseInt(id as string)
        );
        setArticle(foundArticle);
      })
      .catch((error: any) => {
        toast("Error fetching articles:", {
          description: error})
      });
  }, [id]);

  if (articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-sans font-bold gap-3">
        Loading... <Loader2 className=" animate-spin" />
      </div>
    );
  }

  const handleDescriptionClick = (id: number) => {
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row m-2 p-2">
        <Card className="m-4 p-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <h1 className="font-sans text-xl md:text-4xl lg:text-6xl">
              {article?.title}
            </h1>
            <img
              src={img}
              alt="Image"
              className="w-full overflow-hidden rounded-lg"
            />
            {article && (
              <p
                className="text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></p>
            )}
          </div>
        </Card>
        <Card className="m-4 p-4">
          <div className="flex text-lg font-bold m-2 items-center justify-center">
            Related Articles
          </div>
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <Card
                key={article?.id}
                className="flex flex-col items-center justify-between gap-1 p-2 hover:shadow-xl hover:cursor-pointer hover:animate-in hover:-translate-y-1"
                onClick={() => handleDescriptionClick(article?.id)}
              >
                <h1 className="font-sans font-bold text-sm">
                  {article?.title}
                </h1>
                <img
                  src={img}
                  alt="Image"
                  className="w-full overflow-hidden rounded-lg"
                />
                <p>tap for more info</p>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
