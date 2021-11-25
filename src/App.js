import NewArticle from "./components/NewArticle";

import "./global.css";

function App() {
  return (
    <div className="app">
      <div className="new_article">
        <h2>Novo Artigo</h2>
        <NewArticle />
      </div>
      <div className="articles"></div>
    </div>
  );
}

export default App;
