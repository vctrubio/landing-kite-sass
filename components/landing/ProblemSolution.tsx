import { CheckCircle } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stop managing lessons with spreadsheets
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <span className="text-gray-600">Manual scheduling conflicts and double bookings</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <span className="text-gray-600">Lost student information and payment tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-red-600 text-sm">✗</span>
                </div>
                <span className="text-gray-600">Time wasted on administrative tasks instead of teaching</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0058A6] mb-6">
              Automated kite school management
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-600">Smart conflict detection and automatic resolution</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-600">Complete student profiles and payment automation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-600">Focus on teaching while we handle the logistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
