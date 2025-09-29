import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Trusted by kite schools worldwide
        </h2>
        
        {/* North Sails Partnership */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/northsail.webp"
                  alt="North Sails"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">North Sails</h3>
                <p className="text-gray-600">Industry Leader</p>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 text-lg">
                "We partner with KiteFlow to provide our professional kite schools with the most advanced 
                management system in the industry. The precision and reliability match our equipment standards."
              </p>
              <p className="text-gray-500 font-medium mt-3">
                — North Action Sports, global kite industry leader
              </p>
            </div>
          </div>
        </div>

        {/* Tarifa Testimonial */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#0058A6] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TKH</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">Tarifa Kite Hostel</h3>
                <p className="text-gray-600">Tarifa, Spain</p>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 text-lg italic">
                "KiteFlow transformed our operations completely. What used to take hours of manual work 
                now happens automatically. Our teachers love the interface and our students never miss a lesson."
              </p>
              <p className="text-gray-500 font-medium mt-3">
                — Leading kite school operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}