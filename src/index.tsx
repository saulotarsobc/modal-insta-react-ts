import React from "react";
import ReactDOM from "react-dom/client";
import InstaModal from "./components/InstaModal";

import images from "./images/img.jpg";

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <InstaModal title="Título aki..." srcImg={images} description="description description..." />
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo distinctio ad nemo fuga aperiam voluptatem et voluptatum, veritatis quia alias libero a itaque aliquam assumenda labore nisi vero, ullam neque! Tenetur, voluptate in vitae aliquid omnis ipsam consectetur non officia doloribus? Facilis culpa saepe deleniti laudantium veniam optio explicabo incidunt odit tempora. Labore, eius. Quisquam, magni voluptatibus, sequi, qui eveniet ea quas totam dolorum omnis sapiente nihil tempore delectus adipisci repellendus. Earum reprehenderit quis voluptatem, ipsam autem iusto vitae suscipit voluptatibus temporibus modi! Repellendus non enim veritatis ullam praesentium odio rerum officiis atque. Enim iste esse iusto dicta iure officiis.
  </React.StrictMode>
);
