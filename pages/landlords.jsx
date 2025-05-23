import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function LandlordsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const snapshot = await getDocs(collection(db, "landlords"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(data);
    };
    fetchListings();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">👤 Independent Landlord Listings</h1>
        <p className="text-gray-600">Find affordable private listings offered directly by local landlords.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listings.map(unit => (
            <Card key={unit.id}>
              <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{unit.name}</h2>
                <p className="text-sm">{unit.address}</p>
                <p className="text-sm">{unit.price}</p>
                <a href={unit.contact} className="text-blue-500 underline text-sm">
                  Contact Landlord
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
