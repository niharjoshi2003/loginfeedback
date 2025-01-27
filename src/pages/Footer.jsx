import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className=" items-center gap-2">
              <span className="text-xl font-bold">Excuse Me !</span>
              <p className="text-gray-600">
                Co Powered By : Midnight Solutions
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Menu Single', 'Menu (Ecommerce)', 'Menu Single (Ecommerce)', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#FF6B2B]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="font-bold text-lg mb-4">Utility Pages</h3>
            <ul className="space-y-3">
              {['Start here', 'Style guide', '404 Not found', 'Password protected', 'Licenses', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#FF6B2B]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="#" 
              className="inline-block mt-4 text-[#FF6B2B] hover:text-[#FF6B2B]/80 border-b-2 border-[#FF6B2B]"
            >
              Browse More Templates
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[#FFF5F2] p-4 rounded-lg">
                <div className="bg-[#FF6B2B] p-2 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email:</div>
                    <a href="mailto:contact@duper.com" className="text-[#FF6B2B] sm:text-xs hover:text-[#FF6B2B]/80">
                      midnightsolutions750@gmail.com
                    </a>
                  </div>
              </div>
              <div className="flex items-center gap-4 bg-[#FFF5F2] p-4 rounded-lg">
                <div className="bg-[#FF6B2B] p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Phone:</div>
                  <a href="tel:(414)687-5892" className="text-[#FF6B2B] sm:text-xs hover:text-[#FF6B2B]/80">
                    +91 9423515112
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>
            Copyright © Hotel Jagdamb | Designed by {' '}
            <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
              Ayush Itkhede
            </a>
            {' '}- Powered by {' '}
            <a href="#" className="text-[#FF6B2B] hover:text-[#FF6B2B]/80">
              Midnight Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

