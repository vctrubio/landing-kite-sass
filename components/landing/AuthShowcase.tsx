import { Shield, CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';
import { HeadsetIcon, HelmetIcon } from '@/components/icons';

// Google Icon component
function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function AuthShowcase() {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-[#0058A6]" />
            <h2 className="text-3xl font-bold text-gray-900">Secure Google Authentication</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Access KiteFlow securely with your Google account. Role-based permissions ensure the right people see the right data.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Login Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image src="/logo-tkh.png" alt="Tarifa Kite Hostel" fill className="object-contain" priority />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to the community</h3>
              <p className="text-gray-600 text-sm">Sophisticated kite school management for teachers and students</p>
            </div>

            {/* Login Options */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center gap-3 bg-white text-black border border-gray-300 shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200">
                <GoogleIcon />
                <span className="font-medium text-sm text-gray-800">Login with Google</span>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white text-black border border-gray-300 shadow-md p-3 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fill="#25D366"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.594z"
                  />
                </svg>
                <span className="font-medium text-sm text-gray-800">Login with WhatsApp</span>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500">Secure access to your kite school dashboard</div>
          </div>

          {/* User Roles & Permissions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Role-Based Access Control</h3>

            <div className="space-y-4">
              {/* Admin Role */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Admin</h4>
                    <p className="text-sm text-gray-600">Full system access</p>
                  </div>
                </div>
              </div>

              {/* Teacher Role */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <HeadsetIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teachers</h4>
                    <p className="text-sm text-gray-600">Lesson accountability</p>
                  </div>
                </div>
              </div>

              {/* Student Role */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <HelmetIcon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Students</h4>
                    <p className="text-sm text-gray-600">Booking management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Built on Supabase with Google OAuth integration for maximum security and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">OAuth 2.0</h4>
              <p className="text-sm text-gray-600">Industry-standard authentication protocol</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">User Management</h4>
              <p className="text-sm text-gray-600">Seamless user onboarding and role assignment</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Protection</h4>
              <p className="text-sm text-gray-600">Your kite school data stays secure and private</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
