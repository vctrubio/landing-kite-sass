import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { HelmetIcon } from '@/components/icons';

export default function CallToAction() {
    return (
        <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The KiteFlow Effect</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform every student interaction into profit while reducing administrative time by 80%</p>
                </div>

                {/* Flow Diagram */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[180px]">
                        <Users className="w-12 h-12 text-[#0058A6] mb-3" />
                        <h3 className="font-semibold text-gray-900 mb-2">Student Arrives</h3>
                        <p className="text-sm text-gray-600">Walk-in or online inquiry</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#0058A6] transform rotate-90 lg:rotate-0" />

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[180px]">
                        <div className="w-12 h-12 bg-[#0058A6] rounded-lg flex items-center justify-center mb-3">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Instant Booking</h3>
                        <p className="text-sm text-gray-600">Package selected & paid</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#0058A6] transform rotate-90 lg:rotate-0" />

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[180px]">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                            <span className="text-white font-bold text-lg">L</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Auto Scheduling</h3>
                        <p className="text-sm text-gray-600">Teacher & equipment assigned</p>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[#0058A6] transform rotate-90 lg:rotate-0" />

                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 min-w-[180px]">
                        <DollarSign className="w-12 h-12 text-green-600 mb-3" />
                        <h3 className="font-semibold text-gray-900 mb-2">Profit + Time</h3>
                        <p className="text-sm text-gray-600">Revenue tracked, admin reduced</p>
                    </div>
                </div>

                {/* Live Booking Tracker */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Live Booking Operations</h3>
                        <div className="flex items-center gap-2 text-green-600">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-semibold">€2,847 today</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Booking Row 1 */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <HelmetIcon className="w-4 h-4" />
                                        <HelmetIcon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-900">Isabell, Francisca</div>
                                        <div className="text-xs text-gray-500">Dec 15-22, 2024</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-700">€480</div>
                                    <div className="text-xs text-gray-600">In Progress</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full shadow-sm" style={{ width: '60%' }}></div>
                                </div>
                                <div className="text-xs text-gray-500 font-medium">6h / 10h</div>
                            </div>
                        </div>

                        {/* Booking Row 2 */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <HelmetIcon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-900">Roberta</div>
                                        <div className="text-xs text-gray-500">Dec 18-25, 2024</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-700">€320</div>
                                    <div className="text-xs text-gray-600">In Progress</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full shadow-sm" style={{ width: '80%' }}></div>
                                </div>
                                <div className="text-xs text-gray-500 font-medium">8h / 10h</div>
                            </div>
                        </div>

                        {/* Booking Row 3 */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        <HelmetIcon className="w-4 h-4" />
                                        <HelmetIcon className="w-4 h-4" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-900">Robert, Fernando</div>
                                        <div className="text-xs text-gray-500">Dec 20-27, 2024</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-gray-700">€640</div>
                                    <div className="text-xs text-gray-600">In Progress</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                                    <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-3 rounded-full shadow-sm" style={{ width: '25%' }}></div>
                                </div>
                                <div className="text-xs text-gray-500 font-medium">2h / 8h</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Real-time progress</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Student tracking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span>Revenue visibility</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        Start by automating your business today. Save hours of rescheduling and messaging. Have it all in one place, and notify who needs to be notified (student, teacher, insurance).
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0058A6] text-white text-lg font-semibold rounded-xl hover:bg-[#004088] transition-all hover:scale-105">
                        <TrendingUp className="w-5 h-5" />
                        See Your School's Potential
                    </a>
                </div>
            </div>
        </section>
    );
}
