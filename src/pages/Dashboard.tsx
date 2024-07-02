import DOMPurify from 'dompurify';
import { useEffect, useState } from "react";
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
import axios from "axios";
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
// import { loggedIn } from "@/Redux/reducers/login";

// Define the data type for articles
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get("https://kb.etvbharat.com/keycloak/wp-json/wp/v2/posts?status=publish")
      .then((response) => {
        console.log(response?.data,"responseArticles");
        const formattedData = response.data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered,
          description:  DOMPurify.sanitize(item.content.rendered),
          content: DOMPurify.sanitize(item.content.rendered),
        }));
        setArticles(formattedData);
        
      })
      
      .catch((error) => {
        toast("Error fetching articles:", {
          description: error})
      });
  }, []);

  if (articles.length === 0) {
    return <div className='flex justify-center items-center h-screen text-3xl font-sans font-bold gap-3'>Loading... <Loader2 className=" animate-spin" /></div>;
  }

  const handleDescriptionClick = (id: number) => {
    navigate(`/articles/${id}`);
  };

  const product = {
    name: 'varsha',
    laogginStatus: "true",
    nummber: 173,
  };

  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Articles</PageHeaderHeading>
      </PageHeader>
      {/* <Button variant="secondary" onClick={()=>{dispatch(loggedIn(product))}}>add to reducer</Button> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {articles.map((article) => (
          <Card key={article.id} onClick={() => handleDescriptionClick(article.id)} className='hover:shadow-xl hover:cursor-pointer hover:animate-in hover:-translate-y-1'>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <img
                src={img}
                alt="Image"
                className="block dark:hidden w-96 rounded-lg"
              />
              <CardDescription
                className="cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: article.description }}
              />
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}