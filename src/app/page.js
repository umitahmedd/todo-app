"use client";
import HomeView from "@/app/Views/HomeView";
import Hero from "@/app/Components/Hero";

export default function Home() {
  return (
    <div className="bg-theme-gray-600 min-h-[100vh]">
      <Hero />
      <div className="w-full max-w-7xl mx-auto px-3">
        <HomeView />
      </div>
    </div>
  );
}
