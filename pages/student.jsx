import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function LeaseRoommateHub() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Sublet",
    description: ""
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await getDocs(collection(db, "leaseRoommatePosts"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const submitPost = async () => {
    if (!form.name || !form.email || !form.description) {
      alert("Please fill out all fields.");
      return;
    }
    await addDoc(collection(db, "leaseRoommatePosts"), {
      ...form,
      timestamp: serverTimestamp()
    });
    setForm({ name: "", email: "", type: "Sublet", description: "" });
    alert("Post submitted!");
    const snapshot = await getDocs(collection(db, "leaseRoommatePosts"));
    setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">🏘️ Student Lease & Roommates Hub</h1>
        <p className="text-gray-600">
          Find a sublet, list your lease, or connect with potential roommates — all student-driven.
        </p>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Post a Listing</h2>
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mb-2"
          />
          <Input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mb-2"
          />
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="mb-2 border rounded px-3 py-2 w-full"
          >
            <option value="Sublet">Sublet</option>
            <option value="Roommate">Roommate</option>
          </select>
          <Textarea
            placeholder="Add details about your situation..."
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mb-2"
          />
          <Button onClick={submitPost}>Submit Post</Button>
        </div>

        <div className="pt-8 space-y-4">
          <h2 className="text-xl font-semibold">Live Listings</h2>
          {posts.map(post => (
            <Card key={post.id}>
              <CardContent className="p-4 space-y-1">
                <h3 className="font-semibold">{post.name} ({post.type})</h3>
                <p className="text-sm">{post.description}</p>
                <p className="text-sm text-blue-600">📧 {post.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
