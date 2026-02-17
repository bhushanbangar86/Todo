import Header from "./Header";
import Input from "./Input";
import TodoItems from "./TodoItems";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <Header />
        <Input />
        <TodoItems />
      </div>
    </>
  );
};

export default Home;
