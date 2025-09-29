import React from 'react';

interface KiteIconProps {
    className?: string;
}

interface HelmetIconProps {
    className?: string;
}

export const HelmetIcon = ({ className = 'w-4 h-4' }: HelmetIconProps) => (
    <svg viewBox="0 0 500 500" className={className}>
        <path
            fill="#FEC602"
            d="M65.76,338.47v-74.52c0,0,5.4-69.9,58.27-105.24l5.78-19.27c0,0,8.81-8.35,26.18-14.46l10.03,4.82l11.85-4.82 l6.42-13.81c0,0,17.03-7.71,38.87-7.71l5.46,7.71c0,0,20.88-2.25,40.8-0.64l6.75-7.07c0,0,17.67,0,36.94,7.71 c0,0,3.21,8.35,4.5,11.24l17.35,8.03l8.03-4.82c0,0,15.74,5.78,25.7,16.38l8.35,16.7c0,0,47.54,29.55,53.97,106.65l3.21,73.24l0,0 c9.7,0,17.56,7.86,17.56,17.56v33.95c0,3.85-3.36,6.84-7.18,6.39C407.7,392.11,234.2,374,55.45,396.45 c-3.84,0.48-7.23-2.51-7.23-6.38v-34.13C48.19,346.27,56.07,338.43,65.76,338.47L65.76,338.47z"
        />
        <path fill="#FFD255" d="M317.6,122.41l7.34,3.4c0,0,10.71,84.94-3.67,210.86C321.27,336.67,329.16,242.23,317.6,122.41z" />
        <path fill="#EDB400" d="M177.87,124.98l-7.12,2.89c0,0,1.03,104.29,15.97,208.8C186.71,336.67,174.76,216.53,177.87,124.98z" />
        <path fill="#FFD255" d="M377.03,158.71l5.59,4.17c0,0,6.51,87.11-11.05,173.79C371.57,336.67,383.77,247.59,377.03,158.71z" />
        <path fill="#EDB400" d="M123.97,158.71l-5.59,4.17c0,0-6.51,87.11,11.05,173.79C129.43,336.67,117.22,247.59,123.97,158.71z" />
    </svg>
);

export const RentalIcon = ({ className = 'w-4 h-4' }: HelmetIconProps) => (
    <svg viewBox="0 0 500 500" className={className}>
        <path
            fill="#DC2626"
            d="M65.76,338.47v-74.52c0,0,5.4-69.9,58.27-105.24l5.78-19.27c0,0,8.81-8.35,26.18-14.46l10.03,4.82l11.85-4.82 l6.42-13.81c0,0,17.03-7.71,38.87-7.71l5.46,7.71c0,0,20.88-2.25,40.8-0.64l6.75-7.07c0,0,17.67,0,36.94,7.71 c0,0,3.21,8.35,4.5,11.24l17.35,8.03l8.03-4.82c0,0,15.74,5.78,25.7,16.38l8.35,16.7c0,0,47.54,29.55,53.97,106.65l3.21,73.24l0,0 c9.7,0,17.56,7.86,17.56,17.56v33.95c0,3.85-3.36,6.84-7.18,6.39C407.7,392.11,234.2,374,55.45,396.45 c-3.84,0.48-7.23-2.51-7.23-6.38v-34.13C48.19,346.27,56.07,338.43,65.76,338.47L65.76,338.47z"
        />
        <path fill="#EF4444" d="M317.6,122.41l7.34,3.4c0,0,10.71,84.94-3.67,210.86C321.27,336.67,329.16,242.23,317.6,122.41z" />
        <path fill="#B91C1C" d="M177.87,124.98l-7.12,2.89c0,0,1.03,104.29,15.97,208.8C186.71,336.67,174.76,216.53,177.87,124.98z" />
        <path fill="#EF4444" d="M377.03,158.71l5.59,4.17c0,0,6.51,87.11-11.05,173.79C371.57,336.67,383.77,247.59,377.03,158.71z" />
        <path fill="#B91C1C" d="M123.97,158.71l-5.59,4.17c0,0-6.51,87.11,11.05,173.79C129.43,336.67,117.22,247.59,123.97,158.71z" />
    </svg>
);

export const HeadsetIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const BookingIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
        <path d="m9 16 2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const KiteIcon = ({ className = 'w-4 h-4' }: KiteIconProps) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2L8 8L12 12L16 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3" />
        <path d="M12 12L8 18L12 22L16 18L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.3" />
    </svg>
);

export const PaymentIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const BookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const CalendarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const FlagIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="4" y1="22" x2="4" y2="15" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const BoomIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="6" width="18" height="12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#8B5CF6" fillOpacity="0.1" />
        <path d="M3 6L12 2L21 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#8B5CF6" fillOpacity="0.2" />
        <path d="M12 2V6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10H16" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H16" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const EquipmentIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="6" width="18" height="12" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#8B5CF6" fillOpacity="0.1" />
        <path d="M3 6L12 2L21 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#8B5CF6" fillOpacity="0.2" />
        <path d="M12 2V6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10H16" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H16" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const BookmarkIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const UsersIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);

export const AdminIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);
