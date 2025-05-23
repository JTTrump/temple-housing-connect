import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      const snapshot = await getDocs(collection(db, "agencies"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAgencies(data);
    };
    fetchAgencies();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">🧑‍💼 Agencies & Property Managers</h1>
        <p className="text-gray-600">Explore professionally managed options for reliability and convenience.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {agencies.map(agency => (
            <Card key={agency.id}>
              <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{agency.name}</h2>
                <p className="text-sm">{agency.focus}</p>
                <p className="text-sm">Phone: {agency.phone}</p>
                <a href={agency.contact} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
                  Visit Website ↗
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
