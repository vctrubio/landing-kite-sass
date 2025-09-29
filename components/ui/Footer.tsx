import { KiteIcon } from "@/components/icons";
import { Calendar, Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-300 px-6 py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="flex items-center justify-center gap-8 mb-8">
          <a 
            href="https://github.com/vctrubio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg px-4 py-2 rounded-lg hover:bg-gray-700"
            onMouseEnter={() => {
              const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFA');
              audio.volume = 0.1;
              audio.play().catch(() => {});
            }}
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/vctrubio"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg px-4 py-2 rounded-lg hover:bg-gray-700"
            onMouseEnter={() => {
              const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFA');
              audio.volume = 0.1;
              audio.play().catch(() => {});
            }}
          >
            <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="https://donkeydrills.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg px-4 py-2 rounded-lg hover:bg-gray-700"
            onMouseEnter={() => {
              const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIcBjiIz/LNeSsFJHfH8N2QQAoUXrTp66hVFA');
              audio.volume = 0.1;
              audio.play().catch(() => {});
            }}
          >
            <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-medium">Portfolio</span>
          </a>
        </div>
        
        <p className="text-gray-400 text-sm">
          © 2025 prototype for Tarifa Kite Hostel, built by a kite surfer, teacher and developer.
        </p>
      </div>
    </footer>
  );
}