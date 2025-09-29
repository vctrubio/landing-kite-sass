import { HelmetIcon, HeadsetIcon, BookingIcon, PaymentIcon, EquipmentIcon } from "@/components/icons";
import { BarChart3 } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          Everything you need to run your kite school
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Student Management */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-yellow-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
              <HelmetIcon className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Track student progress, manage bookings, and maintain detailed profiles with languages, sizes, and preferences.
            </p>
          </div>

          {/* Teacher Scheduling */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <HeadsetIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
            <p className="text-gray-600 leading-relaxed">
              Drag-and-drop scheduling with automatic conflict detection and commission management for teachers.
            </p>
          </div>

          {/* Equipment Tracking */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <EquipmentIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor kite usage, assign equipment to teachers, and track maintenance across all your gear.
            </p>
          </div>

          {/* Booking System */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <BookingIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Package Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Create flexible packages with duration, capacity, and pricing. Automatic lesson generation from bookings.
            </p>
          </div>

          {/* Payments */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-amber-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <PaymentIcon className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track teacher payments, commission rates, and generate financial reports with ease.
            </p>
          </div>

          {/* Export & Share */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-500/20 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Export & Analytics</h3>
            <p className="text-gray-600 leading-relaxed">
              Export schedules to CSV, WhatsApp, or PDF. Generate medical reports and track school performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}