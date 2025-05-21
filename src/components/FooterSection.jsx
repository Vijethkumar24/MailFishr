import React from 'react'

function FooterSection() {
    return (
        <footer className="bg-[#246BFD] text-white pt-10 pb-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Logo + Description */}
                <div>
                    <h2 className="text-xl font-bold mb-2">MailFishr</h2>
                    <p className="text-sm">Catch only the emails that matter. Smart filters, central inbox, and more — all in one dashboard.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Use Cases</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4 items-center">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg" alt="Twitter" className="w-6 h-6 invert" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" className="w-6 h-6 invert" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" className="w-6 h-6 invert" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 invert" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs mt-10 border-t border-white/20 pt-4">
                © {new Date().getFullYear()} MailFishr. All rights reserved.
            </div>
        </footer>

    )
}

export default FooterSection