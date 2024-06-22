// pages/ArticleDetail.js
import { Card } from "@/components/ui/card";
import img from "/public/img.png";
import { useNavigate, useParams } from "react-router-dom";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";

const articles = [
  {
    id: "item-1",
    title: "Article 1",
    description: "Sure, here is some dummy text f....",
    content:
      "Sure, here is some dummy text for a paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, justo a suscipit aliquet, nisl libero cursus erat, ut cursus enim purus ut turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce auctor eros sed libero auctor, at vehicula magna scelerisque. Quisque nec dapibus erat. Aenean ut felis sit amet justo accumsan congue. Nulla facilisi. Sed id leo ac lectus tempor faucibus. Curabitur vestibulum lorem nec eros tincidunt, sed consequat orci dictum. Suspendisse potenti. Praesent eget tincidunt nisi, nec pharetra ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam consectetur felis, in cursus tortor bibendum sit amet. Mauris non facilisis sapien. Duis semper, libero eget bibendum scelerisque, mauris nulla tincidunt eros, sit amet sollicitudin nisi odio non est. Curabitur tempor diam vitae nulla egestas, sed fermentum nisi tincidunt.",
  },
  {
    id: "item-2",
    title: "Article 2",
    description: "Here is some more dummy text....",
    content:
      "Another paragraph of dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, justo a suscipit aliquet, nisl libero cursus erat, ut cursus enim purus ut turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce auctor eros sed libero auctor, at vehicula magna scelerisque. Quisque nec dapibus erat. Aenean ut felis sit amet justo accumsan congue. Nulla facilisi. Sed id leo ac lectus tempor faucibus. Curabitur vestibulum lorem nec eros tincidunt, sed consequat orci dictum. Suspendisse potenti. Praesent eget tincidunt nisi, nec pharetra ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam consectetur felis, in cursus tortor bibendum sit amet. Mauris non facilisis sapien. Duis semper, libero eget bibendum scelerisque, mauris nulla tincidunt eros, sit amet sollicitudin nisi odio non est. Curabitur tempor diam vitae nulla egestas, sed fermentum nisi tincidunt.",
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }
  const navigate = useNavigate();

  const handleDescriptionClick = (id: any) => {
    navigate(`/articles/${id}`);
  };

  return (
    <>
      <div className="flex m-2 p-2">
        {" "}
        <Card className="m-4 p-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <h1 className="font-sans text-6xl">{article.title}</h1>
            <img
              src={img}
              alt="Image"
              className="w-full overflow-hidden rounded-lg"
            />

            <p>{article.content}</p>
          </div>
        </Card>
        <Card className="m-4 p-4">
          <div className="flex text-lg font-bold m-2 items-center justify-center">
            Related Articles
          </div>
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="flex flex-col items-center justify-between gap-1 p-2"
                onClick={() => handleDescriptionClick(article.id)}
              >
                <h1 className="font-sans font-bold text-sm">{article.title}</h1>
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
