import Footer from "../common_components/Footer";
import DashboardProvider from "../contexts/Dashboard/DashboardProvider";
import '../../app/globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <DashboardProvider>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </DashboardProvider>
      </body>
    </html>
  );
};
