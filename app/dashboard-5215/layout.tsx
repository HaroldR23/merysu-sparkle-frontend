import Footer from "../common_components/Footer";
import '../../app/globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
};
