import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Kiteflow - Automate Lessons',
    description: 'All-in-one kite school management. Connect students with teachers, automate scheduling, and manage lessons with actions and custom automation.',
    icons: {
        icon: '/northsail.webp',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
