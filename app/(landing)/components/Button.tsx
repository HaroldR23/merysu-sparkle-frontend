export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-md bg-[#23B5A6] px-5 py-2 text-white hover:bg-[#1a8f89] transition cursor-pointer">
      {children}
    </button>
  );
}
