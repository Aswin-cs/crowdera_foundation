import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary w-full mt-auto text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="col-span-1 lg:col-span-2">
          <Link className="font-heading text-2xl text-on-primary flex items-center gap-2 mb-4" href="/">
            <span className="material-symbols-outlined text-3xl" data-icon="volunteer_activism" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
            Crowdera Foundation
          </Link>
          <p className="font-body text-sm text-white/70 max-w-sm mb-6">
            We are a philanthropic infrastructure provider dedicated to democratizing philanthropy through technology and capacity building for grassroots NGOs worldwide.
          </p>
          <div className="flex gap-4">
            <a className="text-white/60 hover:text-secondary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined" data-icon="mail">mail</span>
            </a>
            <a className="text-white/60 hover:text-secondary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined" data-icon="share">share</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-xs text-on-primary mb-4 uppercase tracking-widest font-bold">Quick Links</h4>
          <ul className="space-y-3 font-body text-sm">
            <li><Link className="text-white/70 hover:text-secondary transition-colors duration-200" href="/impact">Financial Transparency</Link></li>
            <li><Link className="text-white/70 hover:text-secondary transition-colors duration-200" href="/programs">Program Directory</Link></li>
            <li><Link className="text-white/70 hover:text-secondary transition-colors duration-200" href="/impact">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-xs text-on-primary mb-4 uppercase tracking-widest font-bold">Support</h4>
          <ul className="space-y-3 font-body text-sm">
            <li><a className="text-white/70 hover:text-secondary transition-colors duration-200" href="#">Contact Support</a></li>
            <li><a className="text-white/70 hover:text-secondary transition-colors duration-200" href="#">Privacy Policy</a></li>
            <li><a className="text-white/70 hover:text-secondary transition-colors duration-200" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 text-center text-white/50 font-heading text-xs">
          © 2024 Crowdera Foundation. Democratizing philanthropy through technology.
        </div>
      </div>
    </footer>
  );
}
