import { RentalIcon, BoomIcon } from '@/components/icons';
import { Clock, TrendingUp } from 'lucide-react';

export default function ComingSoon() {
    return (
        <section className="px-6 py-16 bg-gradient-to-br from-red-50 to-rose-50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <RentalIcon className="w-12 h-12" />
                    <h2 className="text-3xl font-bold text-gray-900">Rental Tracking</h2>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full border border-red-200">Coming Soon</span>
                </div>

                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Track kite equipment rentals alongside lessons. Monitor gear usage, availability, and maintenance schedules in real-time.
                </p>

                {/* Preview Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                        <div className="flex items-center gap-3 mb-3">
                            <RentalIcon className="w-8 h-8" />
                            <h3 className="font-semibold text-gray-900">Rental Tracking</h3>
                        </div>
                        <p className="text-sm text-gray-600">Complete rental workflow from booking to return, with damage tracking and maintenance schedules</p>
                    </div>

                    <div className="bg-white/80 rounded-xl p-6 border border-red-100">
                        <div className="flex items-center gap-3 mb-3">
                            <BoomIcon className="w-8 h-8" />
                            <h3 className="font-semibold text-gray-900">Wings</h3>
                        </div>
                        <p className="text-sm text-gray-600">Addition to our equipment tracking for advanced wing operations</p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <span>Expected launch: Q2 2025</span>
                </div>
            </div>
        </section>
    );
}
