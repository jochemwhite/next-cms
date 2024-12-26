import TwitchLogin from "@/components/buttons/TwitchLogin";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8  rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Login</h1>
        <TwitchLogin redirect="/dashboard" />
      </div>
    </div>
  )
}

LoginPage.displayName = 'LoginPage';

