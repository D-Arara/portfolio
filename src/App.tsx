import React from 'react';
import './App.css'; // スタイルを別ファイルで管理する場合

function App() {
  return (
    <div>
      <header>
        <h1>Don Arai の </h1>
      </header>

      <main>
        <section>
          <h2>荒井 盾 (Don Arai)</h2>
          <p>大阪大学 基礎工学研究科 博士前期課程学生</p>
        </section>
        <section>
          <h2>所属</h2>
          <p>大阪大学大学院基礎工学研究科 システム創成専攻 電子光科学領域 量子コンピューティング研究グループ 藤井研究室 
            [<a href="https://quantphys.org/wp/qinfp/">Link</a>]
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;
