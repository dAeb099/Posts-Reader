import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";
import Footer from "./components/footer/Footer";
import { useFetch } from "./hooks/useFetch";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const elSearch = document.querySelector("#search");
    const elPosts = document.querySelector("#posts__container");
    let code = "";

    const fetchedData = fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => data);

    const renderCards = (card) => {
      code += `<div class="card">
      <h2>${card.title}</h2>
      <p>${card.body}</p>
      <p>User's ID: ${card.userId}</p>
      </div>`;
    };

    fetchedData.then((data) => {
      elSearch.addEventListener("input", (e) => {
        data
          .filter((item) => item.title.includes(elSearch.value))
          .forEach((card) => {
            renderCards(card);
          });
        elPosts.innerHTML = code;
        code = "";
      });

      data.forEach((card) => {
        renderCards(card);
      });

      elPosts.innerHTML = code;
      code = "";
    });
  });

  return (
    <>
      <Navbar />
      <Posts />
      <Footer />
    </>
  );
};

export default App;
