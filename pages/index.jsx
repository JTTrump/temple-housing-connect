import DashboardLayout from "../components/DashboardLayout";
import { Card, CardContent } from "../components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-red-700">Temple Housing Connect</h1>
        <p className="text-gray-700">
          Welcome to your one-stop shop for off-campus housing near Temple University. Explore your
          options:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SectionLink href="/furnished" label="Furnished Apartments" />
          <SectionLink href="/unfurnished" label="Unfurnished Apartments" />
          <SectionLink href="/landlords" label="Local Landlords" />
          <SectionLink href="/agencies" label="Off-Campus Agencies" />
          <SectionLink href="/student" label="Student Subleases + Roommates" />
        </div>

        <Card className="mt-8">
          <CardContent className="space-y-2">
            <h2 className="text-xl font-semibold text-red-700">Don’t know where to start?</h2>
            <p>Check out our housing advice and take the quiz below to figure out your fit:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <Link href="/housing-guide" className="text-blue-600 underline">
                  Read the Full Housing Guide →
                </Link>
              </li>
              <li>
                <Link href="/housing-quiz" className="text-blue-600 underline">
                  Take the Housing Fit Quiz →
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <h2 className="text-xl font-semibold text-red-700">Need to List Your Property?</h2>
            <p>
              Are you a landlord or student looking to list a unit or sublease? Use our form and get
              added to the map.
            </p>
            <Link href="/landlords" className="text-blue-600 underline block mt-2">
              Go to Landlord Listing Form →
            </Link>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <h2 className="text-xl font-semibold text-red-700">Want Help Choosing?</h2>
            <p>Our housing dashboard is designed to make your search easier.</p>
            <Link href="/student" className="text-blue-600 underline block mt-2">
              View Subleases + Roommate Exchange →
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function SectionLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block p-4 bg-white rounded shadow hover:bg-gray-50 border text-lg text-blue-700 font-medium"
    >
      {label}
    </Link>
  );
}
