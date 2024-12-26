"use client";
import { login } from "@/actions/auth/login";
import React from "react";
import { Button } from "../ui/button";

interface TwitchLoginProps {
  redirect: string | null;
}

export default function TwitchLogin({ redirect }: TwitchLoginProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  async function handleLogin() {
    setIsLoading(true);
    login();
  }

  return (
    <form action={handleLogin}>
      <Button variant="outline" type="button" disabled={isLoading} onClick={handleLogin}>
        <span className="mr-2 h-4 w-4 flex justify-center items-center">
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
        </span>
        Twitch
      </Button>
    </form>
  );
}
