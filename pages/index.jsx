import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      const q = query(collection(db, "leaseRoommatePosts"), orderBy("timestamp", "desc"), limit(3));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecentPosts(data);
    };
    fetchRecent();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Temple Housing Connect</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Simplifying off-campus housing for students — one click at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SectionLink href="/furnished" label="🏠 Furnished Apartments" />
          <SectionLink href="/unfurnished" label="🏚️ Unfurnished Apartments" />
          <SectionLink href="/agencies" label="🏢 Agencies & Property Managers" />
          <SectionLink href="/landlords" label="🧍 Independent Landlord Listings" />
          <SectionLink href="/lease-roommate-hub" label="🔄 Lease & Roommate Hub (Subleasing)" />
          <SectionLink href="/housing-guide" label="📘 Housing Guide" />
          <SectionLink href="/housing-quiz" label="🧠 Housing Fit Quiz" />
        </div>

        <div className="pt-10">
          <h2 className="text-2xl font-semibold mb-4">🆕 Recent Student Posts</h2>
          <div className="space-y-4">
            {recentPosts.length > 0 ? (
              recentPosts.map(post => (
                <Card key={post.id}>
                  <CardContent className="p-4 space-y-1">
                    <h3 className="font-semibold">{post.name} ({post.type})</h3>
                    <p className="text-sm text-gray-700">{post.description}</p>
                    <p className="text-sm text-blue-600">📧 {post.email}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500">No posts yet.</p>
            )}
          </div>
        </div>

        <div className="pt-10 border-t">
          <h2 className="text-2xl font-semibold mb-4">📘 How to Choose the Right Housing Option</h2>
          <div className="space-y-4 text-gray-700">
            <p>🏠 <strong>Furnished Apartments:</strong> Great for students new to the area or with short leases. More expensive but move-in ready.</p>
            <p>🏚️ <strong>Unfurnished Apartments:</strong> Lower cost, more setup. Ideal for longer-term residents with roommates and furniture.</p>
            <p>🏫 <strong>Student Dorms:</strong> Social, simple, all-in-one. Perfect for first-years who want on-campus life.</p>
            <p>🏘️ <strong>Off-Campus Private Houses:</strong> Bigger spaces, group living. Great for juniors/seniors who want privacy and control.</p>
          </div>
          <div className="pt-4 text-center">
            <Link href="/housing-guide">
              <a className="text-blue-600 underline">Read the Full Housing Guide →</a>
            </Link>
            <span className="mx-2">|</span>
            <Link href="/housing-quiz">
              <a className="text-blue-600 underline">Take the Fit Quiz →</a>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function SectionLink({ href, label }) {
  return (
    <Link href={href}>
      <a className="block p-4 bg-white rounded shadow hover:bg-gray-50 border text-lg text-blue-600">
        {label}
      </a>
    </Link>
  );
}
