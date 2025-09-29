import Link from "next/link";
import { Calendar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Schedule your kite lessons{" "}
          <span className="text-[#0058A6]">effortlessly</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          All-in-one kite school management. Connect students with teachers, automate scheduling, 
          and manage lessons with intelligent filtering and real-time updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://calendly.com/vctrubio/i-m-interested-in-kiteflowm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0058A6] text-white text-lg font-semibold rounded-xl hover:bg-[#004088] transition-all hover:scale-105 inline-flex items-center gap-2 justify-center"
          >
            <Calendar className="w-5 h-5" />
            Book a Meeting
          </a>
          <Link 
            href="/docs" 
            className="px-8 py-4 border border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-[#0058A6] hover:text-[#0058A6] transition-colors"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}