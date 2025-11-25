'use client';

import { ButtonProps } from "../types/props";

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="rounded-md bg-[#23B5A6] px-5 py-2 text-white hover:bg-[#1a8f89] transition cursor-pointer">
      {children}
    </button>
  );
}
