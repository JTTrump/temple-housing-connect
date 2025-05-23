import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";

export default function FurnishedPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const snapshot = await getDocs(collection(db, "furnished"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setListings(data);
    };
    fetchListings();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">📦 Furnished Apartments</h1>
        <p className="text-gray-600">Move-in ready options with student-friendly layouts and utilities.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {listings.map(apt => (
            <Card key={apt.id}>
              <CardContent className="p-4 space-y-2">
                <h2 className="text-lg font-semibold">{apt.name}</h2>
                <p className="text-sm">{apt.address}</p>
                <p className="text-sm">{apt.price}</p>
                <p className="text-sm">{apt.walk}</p>
                <a href={apt.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
                  View Listing ↗
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
