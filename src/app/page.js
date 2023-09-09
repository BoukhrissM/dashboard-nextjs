import LoginForm from "./components/loginForm/loginForm";
export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <div className="min-h-screen flex items-center justify-center">
        <LoginForm/>
      </div>
    </main>
  );
}
