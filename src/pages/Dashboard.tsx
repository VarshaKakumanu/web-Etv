import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import img from "/public/img.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
// import { loggedIn } from "@/Redux/reducers/login";

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
  {
    id: "item-3",
    title: "Article 3",
    description: "Here is some more dummy text....",
    content:
      "Another paragraph of dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, justo a suscipit aliquet, nisl libero cursus erat, ut cursus enim purus ut turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce auctor eros sed libero auctor, at vehicula magna scelerisque. Quisque nec dapibus erat. Aenean ut felis sit amet justo accumsan congue. Nulla facilisi. Sed id leo ac lectus tempor faucibus. Curabitur vestibulum lorem nec eros tincidunt, sed consequat orci dictum. Suspendisse potenti. Praesent eget tincidunt nisi, nec pharetra ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam consectetur felis, in cursus tortor bibendum sit amet. Mauris non facilisis sapien. Duis semper, libero eget bibendum scelerisque, mauris nulla tincidunt eros, sit amet sollicitudin nisi odio non est. Curabitur tempor diam vitae nulla egestas, sed fermentum nisi tincidunt.",
  },
  {
    id: "item-4",
    title: "Article 4",
    description: "Here is some more dummy text....",
    content:
      "Another paragraph of dummy text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur, justo a suscipit aliquet, nisl libero cursus erat, ut cursus enim purus ut turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce auctor eros sed libero auctor, at vehicula magna scelerisque. Quisque nec dapibus erat. Aenean ut felis sit amet justo accumsan congue. Nulla facilisi. Sed id leo ac lectus tempor faucibus. Curabitur vestibulum lorem nec eros tincidunt, sed consequat orci dictum. Suspendisse potenti. Praesent eget tincidunt nisi, nec pharetra ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer aliquam consectetur felis, in cursus tortor bibendum sit amet. Mauris non facilisis sapien. Duis semper, libero eget bibendum scelerisque, mauris nulla tincidunt eros, sit amet sollicitudin nisi odio non est. Curabitur tempor diam vitae nulla egestas, sed fermentum nisi tincidunt.",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDescriptionClick = (id:any) => {
   navigate(`/articles/${id}`);
  };

  const product = {
    name: 'varsha',
    laogginStatus : "true",
    nummber: 173,
  }

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Articles</PageHeaderHeading>
      </PageHeader>
      {/* <Button variant="secondary" onClick={()=>{dispatch(loggedIn(product))}}>add to reducer</Button> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {articles.map((article) => (
          <Card key={article.id} onClick={() => handleDescriptionClick(article.id)}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <img
                src={img}
                alt="Image"
                className="block dark:hidden w-96 rounded-lg"
              />
              <CardDescription
                 
                className="cursor-pointer"
              >
                {article.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
