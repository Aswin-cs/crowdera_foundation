import SmoothReveal from '@/components/SmoothReveal';
import BlurText from '@/components/ui/blur-text';
import Timeline from '@/components/Timeline';
import TimelineItem from '@/components/TimelineItem';
import CountUp from '@/components/CountUp';
import { Button } from '@/components/ui/button';
import { BarChartIcon } from '@/components/BarChartIcon';
import { GlobeIcon } from '@/components/GlobeIcon';
import { HeartIcon } from '@/components/HeartIcon';
import { PremiumImageCard } from '@/components/ui/premium-image-card';
import WorldMapDemo from '@/components/WorldMapDemo';

export default function Impact() {
  return (
    <>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-[120px] pb-margin-desktop text-sans">
{/*  Hero Section  */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-[80px]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
<div className="pr-0 lg:pr-12">
<SmoothReveal delay={0.2}>
  <BlurText
    text="Transparent Stewardship, Global Impact."
    delay={150}
    className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary"
  />
</SmoothReveal>
<SmoothReveal delay={0.4}>
  <BlurText
    text="Founded by Chet Jain, the Crowdera Foundation believes that accountability is the foundation of lasting change. We operate on a 'Zero Fee' model to ensure a 97% direct impact rate. Explore our history, track our support of over 5,000 NGOs across India and the US, and review our top-tier ratings from GuideStar and NGO Darpan."
    delay={50}
    className="text-on-surface text-lg mb-8 leading-relaxed"
  />
</SmoothReveal>
</div>
<div className="relative h-[400px] lg:h-[500px] w-full">
  <PremiumImageCard 
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjHlFT0MEJM6itIRPP8QDIqagXkN3-y8KYN69xuX7tLnwDwXQqfWRdPuhuTQpQJZrsWOFhyj0poNDr4468cIZDQptx0gm11Fi8D2KsGqlhpcXZAiGN6bfI34LD9OiaNA7ypNJBYPsIh6SEYzLiNnbVUU1WZl59ROXUjRL82Ke700CGXwiv-p06qugyullwqhii40zATHZ1f60ofGLvCctvoJ3b4ciP3aRdmX7X4UfhcUzncwH2WdP12R1O8rZeUuwb9t9X9UawoiM" 
    alt="Leadership team discussing metrics"
  />
</div>
</div>
</section>
{/*  Foundation History Timeline  */}
<section className="bg-background py-[80px] mb-[80px]">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-primary font-heading text-3xl md:text-4xl font-bold mb-4">A Legacy of Action</h2>
<p className="text-on-surface">Tracing our path from a grassroots initiative to a global force for sustainable development.</p>
</div>

<Timeline>
{/*  Timeline Item 1  */}
<TimelineItem side="left" className="pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right">
<span className="font-heading text-sm text-secondary font-bold block mb-2">2014</span>
<h3 className="text-primary font-heading text-xl font-bold mb-2">The Inception</h3>
<p className="text-on-surface text-sm">Founded with a core mission to provide transparent funding pathways for grassroots NGOs in emerging markets.</p>
</TimelineItem>

{/*  Timeline Item 2  */}
<TimelineItem side="right" className="pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12">
<span className="font-heading text-sm text-secondary font-bold block mb-2">2018</span>
<h3 className="text-primary font-heading text-xl font-bold mb-2">Global Expansion</h3>
<p className="text-on-surface text-sm">Launched our first multi-continent initiative, reaching over 50 communities across Africa and Southeast Asia.</p>
</TimelineItem>

{/*  Timeline Item 3  */}
<TimelineItem side="left" className="pl-8 md:pl-0 w-full md:w-1/2 md:pr-12 md:text-right">
<span className="font-heading text-sm text-secondary font-bold block mb-2">2023</span>
<h3 className="text-primary font-heading text-xl font-bold mb-2">The Transparency Pledge</h3>
<p className="text-on-surface text-sm">Implemented our proprietary real-time impact tracking framework, setting a new standard for institutional accountability.</p>
</TimelineItem>

{/*  Timeline Item 4  */}
<TimelineItem side="right" className="pl-8 md:pl-0 w-full md:w-1/2 md:ml-auto md:pl-12">
<span className="font-heading text-sm text-secondary font-bold block mb-2">2024</span>
<h3 className="text-primary font-heading text-xl font-bold mb-2">Climate Resilience Focus</h3>
<p className="text-on-surface text-sm">Directed new strategic funding and resources toward grassroots climate adaptation and sustainability projects.</p>
</TimelineItem>
</Timeline>

</div>
</section>

{/*  Financial Stewardship Section  */}
<section className="bg-surface py-[80px] mb-[80px]">
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <SmoothReveal delay={0.2}>
          <h2 className="text-primary font-heading text-3xl md:text-4xl font-bold mb-6">Our Zero Fee Model</h2>
        </SmoothReveal>
        <SmoothReveal delay={0.4}>
          <p className="text-on-surface text-lg mb-8 leading-relaxed">
            Most crowdfunding platforms charge between 5% to 15% in platform fees. At Crowdera Foundation, we believe every penny should go to those in need. 
          </p>
        </SmoothReveal>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">check_circle</span>
            </div>
            <div>
              <h4 className="font-heading font-bold text-primary">No Platform Fees</h4>
              <p className="text-on-surface text-sm">We don't take a cut from your donations. 100% of the platform costs are covered by our corporate partners.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">trending_up</span>
            </div>
            <div>
              <h4 className="font-heading font-bold text-primary">Maximized Impact</h4>
              <p className="text-on-surface text-sm">Our 97% direct impact rate is among the highest in the industry, verified by GuideStar.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 bg-background p-12 rounded-2xl shadow-ambient border border-primary/5 flex items-center justify-center relative overflow-hidden h-[300px] group">
        <BarChartIcon size={200} strokeWidth={1} className="text-primary opacity-10 absolute scale-150 rotate-12" />
        <div className="relative z-10 text-center">
          <div className="text-6xl font-heading font-bold text-secondary mb-2">97%</div>
          <div className="text-primary font-heading font-bold uppercase tracking-widest text-xs">Direct Fund Utilization</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  Global Project Locations Map  */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-[80px]">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center">
    <div className="lg:col-span-2">
      <WorldMapDemo />
    </div>
    <div className="flex flex-col gap-6">
{/*  Stat Card 1  */}
<div className="bg-background p-8 rounded-xl reveal-on-scroll delay-100 shadow-ambient flex-grow border border-primary/10 group">
<GlobeIcon className="text-primary mb-4 w-9 h-9 transition-colors group-hover:text-secondary" size={36} />
<h4 className="text-primary font-heading text-4xl font-bold mb-2"><CountUp to={5000} separator="," />+</h4>
<p className="font-heading text-xs text-on-surface font-bold uppercase tracking-widest">NGOs Supported</p>
</div>
{/*  Stat Card 2  */}
<div className="bg-background p-8 rounded-xl reveal-on-scroll delay-200 shadow-ambient flex-grow border border-primary/10 group">
<HeartIcon className="text-primary mb-4 w-9 h-9 transition-colors group-hover:text-secondary" size={36} />
<h4 className="text-primary font-heading text-4xl font-bold mb-2"><CountUp to={97} />%</h4>
<p className="font-heading text-xs text-on-surface font-bold uppercase tracking-widest">Direct Impact Rate</p>
</div>
{/*  Stat Card 3  */}
<div className="bg-primary text-white p-8 rounded-xl shadow-ambient flex-grow">
<BarChartIcon className="text-secondary mb-4 w-9 h-9" size={36} />
<h4 className="font-heading text-4xl font-bold mb-2 text-white">Zero</h4>
<p className="font-heading text-xs text-white/70 font-bold uppercase tracking-widest">Fee Model</p>
</div>
</div>
</div>
</section>

{/*  Meet the Team  */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-[80px]">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-primary font-heading text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
<p className="text-on-surface mb-2">Dedicated professionals committed to maximizing our global impact through strategic stewardship.</p>
<p className="text-[10px] text-red-500 uppercase tracking-tighter italic">
  Note: This team representation is for demo purposes only. The profiles shown are not of real individuals.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-gutter max-w-3xl mx-auto">
{/*  Team Member 1 */}
<div className="flex flex-col items-center text-center group">
<div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-background shadow-ambient transition-transform duration-500 group-hover:scale-105">
<img alt="Chet Jain" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOjnnEF0aSi3fbHjGB8UiRZowmDwTS13PiXIJYZ39KNSfTf8Z1mFv8VBefOeYmFSNc0CieSY84xQzaVt-geDbeCLmTGEQ7KyKtuxf02qypeQHQ2t-5vWyrdpRWaasQMBw1kpq0fRqoU2aAPuKPGFY9M7KpqnQujF60WlTF41N-EkCUXn1LVa3Uod1Swu3GUgPxiEESfBsMIvCZi0y0N6rfuxXXqX5R30GvJl2CtJ3uEuHQ8wyXA4cW7KogWeOmFTn-S-eo304O9kE"/>
</div>
<h3 className="text-primary font-heading text-xl font-bold mb-1 transition-colors group-hover:text-secondary">Chet Jain</h3>
<p className="text-secondary font-heading text-xs font-bold uppercase tracking-wider">Founder &amp; CEO</p>
</div>
{/*  Team Member 2 */}
<div className="flex flex-col items-center text-center group">
<div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-background shadow-ambient transition-transform duration-500 group-hover:scale-105">
<img alt="Marcus Thorne" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5UVUp2Fh4D29WKmktj7fNSSzzlMM4uxUCE2dn4ADuR5KKTwdVM5ySI-NPDMah_ABguKnSQLCcQIrFsE3CkVavXR2kFtBLe83DOGpR4Xjo7HdPhoxlX-XFP9_1BuZHgNoiB7m7s9UGf8Q11p8P4fRhPcRT1mtxS6pDWsB4sw25PUf8tOsytZkH5bX7bGtn6ytnpNQYmBoM7KTwKyiyLaioydSzQvS1pGw09PKEE3PByAxiYeln3M-4gcCmlsj1LtKebYtGF1g-5Xs"/>
</div>
<h3 className="text-primary font-heading text-xl font-bold mb-1 transition-colors group-hover:text-secondary">Marcus Thorne</h3>
<p className="text-secondary font-heading text-xs font-bold uppercase tracking-wider">Director of Operations</p>
</div>
</div>
</section>
</main>


    </>
  );
}
