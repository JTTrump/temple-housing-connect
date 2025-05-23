export default function DashboardLayout({ children }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow p-4 text-center text-2xl font-bold text-red-700">
          Temple Housing Connect
        </header>
        <main className="p-4 max-w-4xl mx-auto">{children}</main>
      </div>
    );
  }
  