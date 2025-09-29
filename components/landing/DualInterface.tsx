import { CheckCircle, Users, Share, Shuffle, FlagIcon, Clock, DollarSign } from 'lucide-react';
import { HeadsetIcon } from '@/components/icons';

export default function DualInterface() {
    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Two interfaces, interconnected.</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Billboard - Admin Interface */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#0058A6] rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Billboard</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Create lessons with ease</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Share className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Share actions (WhatsApp, CSV, PDF)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Shuffle className="w-5 h-5 text-green-500" />
                                <span className="text-gray-700">Reschedule optimization</span>
                            </div>
                        </div>
                    </div>

                    {/* Teacher Portal */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <HeadsetIcon className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Teacher Portal</h3>
                        </div>
                        {/* Teacher Stats Preview */}
                        <div className="bg-white rounded-lg p-4 mb-4 border border-green-200">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-600">Matteo</span>
                                <span className="text-lg font-bold text-green-600">€847</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <FlagIcon className="w-3 h-3 text-blue-500" />
                                    <span>12 lessons</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-purple-500" />
                                    <span>24h</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <DollarSign className="w-3 h-3 text-green-500" />
                                    <span>€35/hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
