import useOnline from "./hooks/useOnline";

function App() {
  const isOnline = useOnline();
  console.log(isOnline);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}

export default App;
