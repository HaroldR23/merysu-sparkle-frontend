export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} MerySu Sparkle Cleaning. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="text-slate-600">Privacy</a>
          <a href="#" className="text-slate-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
