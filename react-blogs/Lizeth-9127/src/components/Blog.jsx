import { Header } from "./Header";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { humanizeDate } from "../js/main.mjs";
import { articles } from "../js/articles";

const setCards = ({ title, description, date }) => {
  return <Card title={title} date={humanizeDate(date)}>{description}</Card>;
};

export const Blog = () => {
  return (
    <>
      <div className="grid-wrapper">
        <Header/>
        <div className="flex-wrapper">{articles.map(setCards)}</div>
        <Footer/>
      </div>
    </>
  );
};
