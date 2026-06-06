import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-xl text-white">SCM</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Dedicated to helping orphaned and vulnerable children by providing education, shelter, food, healthcare, and emotional support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-orange-500 transition-colors">Our Programs</Link></li>
              <li><Link to="/stories" className="hover:text-orange-500 transition-colors">Success Stories</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
              <li><Link to="/donate" className="hover:text-orange-500 transition-colors">Donate Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="hover:text-orange-500 transition-colors">Education Support</Link></li>
              <li><Link to="/programs" className="hover:text-orange-500 transition-colors">Food Assistance</Link></li>
              <li><Link to="/programs" className="hover:text-orange-500 transition-colors">Healthcare</Link></li>
              <li><Link to="/programs" className="hover:text-orange-500 transition-colors">Shelter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                <span>123 Hope Street, Kindness City, KC 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                <span>contact@streetchildrenministries.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Street Children Ministries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
