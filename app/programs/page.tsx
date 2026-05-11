import SmoothReveal from '@/components/SmoothReveal';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import ProgramCard from '@/components/ProgramCard';

export default function Programs() {
  return (
    <>


<main className="flex-grow pb-24">
{/*  Hero Section  */}
<section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
  <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
    <div className="max-w-3xl">
      <SmoothReveal delay={0.1}>
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          Global Initiatives
        </span>
      </SmoothReveal>
      <SmoothReveal delay={0.2}>
        <BlurText
          text="Active Programs"
          delay={150}
          className="font-display-lg text-5xl md:text-6xl text-primary mb-6 font-bold"
        />
      </SmoothReveal>
      <SmoothReveal delay={0.4}>
        <BlurText
          text="Discover and support initiatives driving meaningful change across the globe. Filter by category to find the causes closest to your heart."
          delay={30}
          className="text-xl md:text-2xl text-on-background/80 leading-relaxed mb-8 max-w-2xl"
        />
      </SmoothReveal>
    </div>
  </div>
  {/* Decorative background circle */}
  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
</section>
{/*  Rapid Response Dashboard  */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
<div className="bg-error-container text-on-error-container rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-ambient reveal-on-scroll">
<div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-error text-white rounded-full">
<span className="material-symbols-outlined text-3xl">emergency</span>
</div>
<div className="flex-grow">
<h2 className="font-headline-md-mobile text-headline-md-mobile font-bold mb-2">Rapid Response Dashboard</h2>
<p className="font-body-md text-body-md">Urgent appeal for immediate disaster relief efforts. Your contribution provides critical supplies and assistance to affected communities.</p>
</div>
<div className="flex-shrink-0 w-full md:w-auto">
<Button href="/donate" variant="secondary" animation="donate-hover" className="w-full md:w-auto">Support Now</Button>
</div>
</div>
</section>

{/*  Program Gallery Grid  */}
<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <ProgramCard 
            title={'Project "Vidya"'}
            description="A rural electrification and digital literacy initiative providing solar-powered learning tools and internet access to remote village schools."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDHZQ0POyShLgOwr5a6d4tetn9PpmFb2FuYNYRbkBobuq_o8TtfYWAHM8Ub0gEld5D3sEsQiDyWS9OmI7FVq5EMRpaJWXJTPO5DW0SmESl8qxtUW1dyuRfyycLwyoDWJGHya3BWfXrFp-Ofehu2u0kLA82Msv7-ZgdgTxkBy4l2MgH9jP6yGtToNeDSgrJfhifc91Gem1k9fXOekpLwlp9mHeRKob0uKOpdvYww-TqAThW4cUbFzS6Zt1vta44sg5PEeor5pHJVBiA"
            category="Education"
            icon="school"
            goal="$50,000"
            progress={90}
            delay={0.1}
          />
          <ProgramCard 
            title="Social Startup Accelerator"
            description="Incubating and funding early-stage social enterprises that are building scalable solutions to pressing global challenges."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDz63DBj1edssq6uoni_8P7obTlZRdhRCdYODOtSl-azEa6Ir6RnHg6aeYb0WHIrddnGvYXyhxn2H-vCsUlDz1624DCN9S_8orMwSgqOuvMyAY7BuPM5Vx83WMo6jonQL6Gd6zvVhadHb1iVuQoC41VUpucm7CrJu75hxx9gkHxsH4WMWtOwMacBWk4Mw4bSq5diG6fn9mC-F3PGsANFqfKeug7us_uKjlTKL0WpqXEl5JdMryeckuw8R6SchoyzxLINxtdw1mcKyQ"
            category="Innovation"
            icon="rocket_launch"
            goal="$120,000"
            progress={66}
            delay={0.2}
          />
          <ProgramCard 
            title="Nonprofit Digital Transformation"
            description="Equipping 5,000+ NGOs with critical cloud infrastructure, software licenses, and digital capacity-building training to maximize their impact."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDn91OBCYqE1wM1nLbCwEBFIOhxg03hOnfNA6cqyWGk3kN4pnQBHcSvm0cCzmPJxJ1wrBQ0nxyxGxXDUUAYWuqExPiD2pcEcefVVUlVOSFVyHwxTN-4lxkUmNUSDaFtnRqFOy2_S4uWGpSXC3ZbFuaAOV4BgUXA6d91iIXCLUr1pyK3vWADY-n6SDzrfob37TmCFaqTgOL8-x07kEl3xbh_nrZ2MonquJmD3bdLZ2ffGToM0DhYRASXSmbU10HJP6yuW8jh3J1CTRI"
            category="Technology"
            icon="computer"
            goal="$30,000"
            progress={50}
            delay={0.3}
          />
        </div>

</section>
</main>
    </>
  );
}
