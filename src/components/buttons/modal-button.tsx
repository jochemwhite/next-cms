"use client";
import React from "react";
import { Button } from "../ui/button";
import { useModal } from "@/providers/modal-provider";

interface ModalButtonProps {
  text: string;
  component: React.ReactNode;
  variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
  className?: string;
}

export default function ModalButton({ text, variant, className, component }: ModalButtonProps) {
  const { openModal } = useModal();

  function handleClick() {
    openModal(<>{component}</>);
  }

  return (
    <Button variant={variant} className={className} onClick={handleClick}>
      {text}
    </Button>
  );
}
