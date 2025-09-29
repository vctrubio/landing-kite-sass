import { CheckCircle } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          Start free, scale as you grow. Perfect for kite schools of any size.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Free</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Up to 2 teachers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Student management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic exports</span>
              </div>
            </div>
            <a 
              href="mailto:contact@kiteflow.com?subject=Free Trial Request" 
              className="w-full block text-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#0058A6] hover:text-[#0058A6] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Pro Tier */}
          <div className="bg-[#0058A6] p-8 rounded-2xl border border-[#0058A6] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-[#0058A6] px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">€45</span>
              <span className="text-blue-100">/month</span>
            </div>
            <p className="text-blue-100 mb-6">For growing kite schools</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white">Unlimited teachers</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white">Advanced scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white">Payment tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white">All export formats</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white">Priority support</span>
              </div>
            </div>
            <a 
              href="mailto:contact@kiteflow.com?subject=Professional Plan Trial" 
              className="w-full block text-center px-6 py-3 bg-white text-[#0058A6] rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Start Free Trial
            </a>
          </div>

          {/* Multi-location */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Location</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">€90</span>
              <span className="text-gray-600">/extra school</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for multiple locations</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Everything in Pro</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Multiple school management</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Cross-location analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dedicated support</span>
              </div>
            </div>
            <a 
              href="mailto:contact@kiteflow.com?subject=Multi-Location Plan Inquiry" 
              className="w-full block text-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-[#0058A6] hover:text-[#0058A6] transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}