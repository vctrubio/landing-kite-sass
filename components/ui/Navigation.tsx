import Link from 'next/link';
import { KiteIcon } from '@/components/icons';

export default function Navigation() {
    return (
        <nav className="border-b border-gray-100 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <KiteIcon className="w-8 h-8 text-[#0058A6]" />
                    <span className="text-xl font-bold text-gray-900">KiteFlow</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/docs" className="text-gray-600 hover:text-[#0058A6] transition-colors">
                        How it works
                    </Link>
                    <a href="#contact" className="px-4 py-2 bg-[#0058A6] text-white rounded-lg hover:bg-[#004088] transition-colors">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    );
}
