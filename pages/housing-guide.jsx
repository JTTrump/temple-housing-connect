import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function HousingGuide() {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">📘 Student Housing Guide</h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto">
          Not sure which housing option is right for you? Here’s a quick breakdown of your choices.
        </p>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold">🏠 Furnished Apartments</h2>
              <p>✔️ Move-in ready — perfect for out-of-town or first-time renters.</p>
              <p>❗ Typically higher rent, but less hassle. Ideal for short leases or transitions.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold">🏚️ Unfurnished Apartments</h2>
              <p>✔️ Usually cheaper per month, and more flexible long-term.</p>
              <p>❗ Requires furniture and setup. Best for students who already have roommates or furniture lined up.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold">🏫 Student Dorms</h2>
              <p>✔️ Convenient, social, utilities-included. Perfect for first-year students or those who want to stay close to campus life.</p>
              <p>❗ Less privacy and limited lease flexibility.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold">🏘️ Off-Campus Houses</h2>
              <p>✔️ Spacious, great for groups, and often cheaper per person.</p>
              <p>❗ Involves working with private landlords, often year-long leases. More responsibility but more freedom.</p>
            </CardContent>
          </Card>
        </div>

        <div className="pt-6 text-center">
          <p className="text-lg font-medium">Need help choosing?</p>
          <p className="text-blue-600 underline cursor-pointer">👉 Take the Housing Fit Quiz (coming soon)</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
