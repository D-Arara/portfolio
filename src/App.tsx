import React, { useState } from "react";
import "./App.css"; // スタイルを別ファイルで管理する場合

function App() {
	type Todo = {
		inputValue: string;
		key: number;
	};

	//inputの状態変化を表す定数
	const [inputValue, setInputValue] = useState<string>("");
	//タスクの配列
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo: Todo = { inputValue: inputValue, key: Date.now() };
		setTodos([...todos, newTodo]);
		setInputValue("");
	};

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
					<p>
						大阪大学大学院基礎工学研究科 システム創成専攻
						電子光科学領域 量子コンピューティング研究グループ
						藤井研究室 [
						<a href="https://quantphys.org/wp/qinfp/">Link</a>]
					</p>
				</section>
			</main>

			<h2>Todoリスト</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
				></input>
				<button>追加する</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo.inputValue}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
