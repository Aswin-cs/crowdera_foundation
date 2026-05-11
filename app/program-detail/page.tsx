import SmoothReveal from '@/components/SmoothReveal';
export default function ProgramDetail() {
  return (
    <>

<main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
{/*  Hero Section  */}
<section className="w-full mb-16 relative rounded-xl overflow-hidden shadow-lg group">
<div className="w-full h-[614px] min-h-[400px] bg-primary relative">
<img alt="Project Vidya Initiative" className="w-full h-full object-cover" data-alt="A high-quality, professional photograph showing a rural classroom illuminated by new solar-powered lights, with students engaging with computers. The lighting is bright and natural, creating a warm, hopeful light-mode aesthetic. The composition focuses on real human impact, showing joyful expressions and educational empowerment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV9raVFxcFDp7xW0I1DBnPygdrLQW_Pwc4PgZqz0N_YNn8bLucMM8tYJ3u2T-ddasky37nXI73OvASOBQpSoGF4z3-9ERgBe2nsQYWmmiP-KZhO-gwC24AfeRoBpvu8E78armsgWpIAON6o2PReLHiIpzqEd9hZOVJKTmY0w_bNc-cz-doB23FFD5w4q69CZyMnbG9xObE77higIVU-K5D7FaI-QeM6QjX9zErnkHVCtIa3qe0ondJJUPzvdoTbWmicHzl1xDawkg"/>
{/*  60% opacity Deep Navy gradient overlay  */}
<div className="absolute inset-0 bg-[#1A237E]/60 flex flex-col justify-end p-8 md:p-16">
<span className="inline-block bg-secondary text-white font-label-sm text-label-sm px-3 py-1 rounded-full mb-4 w-max">Education Initiative</span>
<SmoothReveal delay={0.2}><h1 className="font-display-lg text-display-lg text-white max-w-3xl mb-4">Project Vidya: Powering Rural Education through Electrification</h1></SmoothReveal>
<SmoothReveal delay={0.4}><p className="font-body-lg text-body-lg text-white/90 max-w-2xl">Bridging the digital divide by providing solar power and vital tech infrastructure to underserved rural schools.</p></SmoothReveal>
</div>
</div>
</section>
{/*  Main Content & Sidebar Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Left Column: Content  */}
<div className="lg:col-span-8 space-y-16">
{/*  Narrative Section  */}
<section className="space-y-6">
<h2 className="font-headline-md text-headline-md text-primary">The Challenge &amp; Our Approach</h2>
<div className="font-body-lg text-body-lg text-on-surface space-y-6 leading-relaxed">
<p>In today's digital age, lack of access to electricity means lack of access to modern education. Project Vidya targets rural regions where schools operate without reliable power, leaving students disconnected from the vast resources available online and hindering their future opportunities.</p>
<p>Our approach goes beyond simply delivering laptops. We implement comprehensive, school-managed solar power systems to ensure a reliable energy foundation. Alongside hardware, we prioritize capacity building, equipping local teachers and community leaders with the digital literacy and technical skills needed to maintain the infrastructure and integrate technology effectively into the curriculum, empowering them to solve their own educational challenges.</p>
</div>
</section>
{/*  Transparency Section  */}
<section className="bg-surface border border-outline-variant/40 rounded-xl p-8 lg:p-10 shadow-sm">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary text-[32px] icon-fill" data-icon="pie_chart">pie_chart</span>
<h2 className="font-headline-md text-headline-md text-primary">Zero-Fee Model Stewardship</h2>
</div>
<p className="font-body-md text-body-md text-on-surface mb-8">With our 100% Zero-Fee model, every cent you donate goes directly to the field. Here is exactly how funds are allocated for Project Vidya.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Sky Blue background accents on items  */}
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="solar_power">solar_power</span>
</div>
<div>
<h4 className="font-label-sm text-label-sm text-primary mb-1">Solar Infrastructure (45%)</h4>
<p className="font-body-md text-body-md text-on-surface text-sm">Solar panels, inverters, and high-capacity battery storage systems for uninterrupted power.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="devices">devices</span>
</div>
<div>
<h4 className="font-label-sm text-label-sm text-primary mb-1">Tech Hardware (35%)</h4>
<p className="font-body-md text-body-md text-on-surface text-sm">Durable laptops, tablets, projectors, and necessary networking equipment for classrooms.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="cast_for_education">cast_for_education</span>
</div>
<div>
<h4 className="font-label-sm text-label-sm text-primary mb-1">Capacity Building (15%)</h4>
<p className="font-body-md text-body-md text-on-surface text-sm">Comprehensive training for educators and local technicians on integrating and maintaining the tech.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="wifi">wifi</span>
</div>
<div>
<h4 className="font-label-sm text-label-sm text-primary mb-1">Connectivity (5%)</h4>
<p className="font-body-md text-body-md text-on-surface text-sm">Initial setup and subsidized satellite internet access for remote locations.</p>
</div>
</div>
</div>
</section>
{/*  Impact Story  */}
<section>
<h2 className="font-headline-md text-headline-md text-primary mb-8">Impact Story</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl overflow-hidden shadow-sm">
<div className="h-full min-h-[300px]">
<img alt="Impact Story" className="w-full h-full object-cover" data-alt="A portrait of a young boy in a school uniform using a tablet device in a sunlit classroom. He is looking at the screen with intense focus and a slight smile. The setting is bright and encouraging, reflecting a positive, light-mode corporate aesthetic that emphasizes human connection and educational empowerment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0V1r_BZGPgJqOB5eFpb8joblVobLkP67n7K4lurKQnQ5sontqYm1kdHZxew5Vj7eoEJHQyJNU60iwWOdYcT6xUf-G0trQG1PgXjgzxr_CJgT0i0UeBI5SdFoyVEux9pppAhXDvKvEbolM41Z25Ix8_JtcUcW6kAwZDut3FFFR5AC2bRyjXYqHo04cvGDjQMKcrC6cZaRy45VybgQ3Nnlf9OfzY9Jwa1YxrMGITJuUcn44lW8gcoSCWzanvJIy-4FjZ8xi445g5S0"/>
</div>
<div className="p-8 md:p-10 flex flex-col justify-center">
<span className="material-symbols-outlined text-outline-variant text-[48px] mb-4" data-icon="format_quote">format_quote</span>
<blockquote className="font-body-lg text-body-lg text-on-surface italic mb-6">
                            "Before the solar panels, when it got dark or cloudy, we had to stop reading. Now, we have lights, and I can use the computers to learn about the world. My teacher showed me how to find science videos online. I want to be an engineer now."
                        </blockquote>
<div className="font-label-sm text-label-sm text-primary">
                            — Rajiv, 14<br/>
<span className="text-on-surface/70 font-normal">Chhatrapur District</span>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Sidebar (Sticky Donation Widget)  */}
<div className="lg:col-span-4 relative">
<div className="sticky top-28 bg-white border border-outline-variant/30 rounded-xl p-6 lg:p-8 shadow-md flex flex-col gap-6">
<div className="space-y-2">
<h3 className="font-headline-md-mobile text-headline-md-mobile text-primary">Fund this Project</h3>
<p className="font-body-md text-body-md text-on-surface/80 text-sm">Join us in bringing solar power and tech to the Chhatrapur District.</p>
</div>
{/*  Progress Bar  */}
<div className="space-y-3">
<div className="flex justify-between items-end">
<span className="font-label-sm text-label-sm text-primary text-xl">$145,000 <span className="text-on-surface/60 text-sm font-normal">raised</span></span>
<span className="font-label-sm text-label-sm text-secondary">72%</span>
</div>
<div className="h-2 w-full bg-background rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[72%] rounded-full"></div>
</div>
<div className="font-body-md text-body-md text-on-surface/50 text-xs text-right">Goal: $200,000</div>
</div>
<div className="h-px w-full bg-outline-variant/30"></div>
{/*  Donation Options  */}
<div className="space-y-4">
<div className="grid grid-cols-3 gap-3">
<button className="h-12 border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface hover:border-primary hover:text-primary transition-colors">$50</button>
<button className="h-12 border-2 border-secondary bg-secondary/5 rounded-lg font-label-sm text-label-sm text-secondary transition-colors">$100</button>
<button className="h-12 border border-outline-variant rounded-lg font-label-sm text-label-sm text-on-surface hover:border-primary hover:text-primary transition-colors">$250</button>
</div>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/60 material-symbols-outlined text-[20px]" data-icon="attach_money">attach_money</span>
<input className="w-full h-12 pl-10 pr-4 bg-background/30 border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Custom Amount" type="number"/>
</div>
</div>
<button className="w-full h-14 bg-secondary text-white font-label-sm text-label-sm rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all mt-2 shadow-md">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
                    Donate Now
                </button>
{/*  Social Sharing  */}
<div className="pt-4 flex items-center justify-center gap-4">
<span className="font-label-sm text-label-sm text-on-surface/60 text-sm">Share this project:</span>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface/60 hover:text-primary hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="share">share</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface/60 hover:text-primary hover:border-primary transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="link">link</span>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
