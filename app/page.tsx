import ProgressBar from '@/components/ProgressBar';
import CountUp from '@/components/CountUp';
import Link from 'next/link';

import SmoothReveal from '@/components/SmoothReveal';
import { Button } from '@/components/ui/button';
import BlurText from '@/components/ui/blur-text';
import { ImagesSlider } from '@/components/ui/images-slider';
import ProgramCard from '@/components/ProgramCard';

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <section className="relative bg-primary text-on-primary h-[100svh] min-h-[600px] max-h-[900px] overflow-hidden">
          <ImagesSlider 
            className="h-full" 
            overlay={false}
            images={[
              "/images/hero1.png",
              "/images/hero2.png",
              "/images/hero3.png",
            ]}
          >
            <div className="absolute inset-0 bg-black/20 z-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-40"></div>
            
            <div className="relative z-50 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col md:w-2/3 lg:w-1/2">
              <SmoothReveal delay={0.1}>
                <span className="font-heading text-xs md:text-sm text-secondary uppercase tracking-widest mb-4 font-bold block">Philanthropic Infrastructure Provider</span>
              </SmoothReveal>
              <SmoothReveal delay={0.3}>
                <div className="mb-6">
                  <BlurText
                    text="Democratizing Philanthropy."
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
                  />
                  <BlurText
                    text="Empowering NGOs."
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
                  />
                </div>
              </SmoothReveal>
              <SmoothReveal delay={0.5}>
                <BlurText
                  text="We leverage technology and capacity building to support grassroots NGOs. Our Zero Fee model ensures that 97% of your funds reach the beneficiaries directly, fueling the Giving Economy."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-xl italic"
                />
              </SmoothReveal>
              <SmoothReveal delay={0.7}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/donate" variant="secondary" animation="donate-hover" className="w-fit">
                    Start Giving
                  </Button>
                  <Button href="/programs" variant="outline" animation="spring" className="w-fit border-white text-white bg-transparent hover:bg-white/20 hover:text-white">
                    Explore Our Work
                  </Button>
                </div>
              </SmoothReveal>
            </div>
          </ImagesSlider>
        </section>

        <section className="bg-surface py-16 md:py-24 border-y border-surface-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">Our Global Impact</h2>
              <p className="font-body text-on-background max-w-2xl mx-auto">Measurable results driven by our commitment to a Zero Fee model and sustainable capacity building.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter text-center">
              <div className="p-8 bg-background rounded-xl reveal-on-scroll delay-100">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="public">public</span>
                <h3 className="font-heading text-4xl md:text-5xl text-primary mb-2"><CountUp to={42} /></h3>
                <p className="font-heading text-xs text-primary/70 uppercase tracking-widest font-bold">Countries Reached</p>
              </div>
              <div className="p-8 bg-background rounded-xl reveal-on-scroll delay-200">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="verified_user">verified_user</span>
                <h3 className="font-heading text-4xl md:text-5xl text-primary mb-2"><CountUp to={97} />%</h3>
                <p className="font-heading text-xs text-primary/70 uppercase tracking-widest font-bold">Funds to Beneficiaries</p>
              </div>
              <div className="p-8 bg-background rounded-xl reveal-on-scroll delay-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" data-icon="monetization_on">monetization_on</span>
                <h3 className="font-heading text-4xl md:text-5xl text-primary mb-2">$<CountUp to={50} />M+</h3>
                <p className="font-heading text-xs text-primary/70 uppercase tracking-widest font-bold">Funds Raised</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background/30">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">Featured Initiatives</h2>
                <p className="font-body text-on-background">Explore our key programs driving capacity building, infrastructure development, and the Giving Economy across the globe.</p>
              </div>
              <Link className="mt-4 md:mt-0 font-heading text-sm text-primary font-bold hover:text-secondary flex items-center gap-1 transition-colors" href="/programs">
                View All Programs <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProgramCard 
                title={'Project "Vidya"'}
                description="Providing rural school electrification and digital learning tools to off-grid communities for uninterrupted education."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCd8HvSRAkT-Lpw0Uni9ehjy8Zgk_92LNsZT13p_iGcZMx8Gm4k0jWi_pyC6H-6DMMrlnV9itllDhi_F0q1ochObPc4LIW8VP4IOUiTrr0aBygHN_R-UdX-JWXRIabOgK07hgAzhNp_-4jcwhFn5Xyti08uhyIiwfNKK1Y7Z4-W26cCanO43utR8o6b4W_sV4ZhPdjnONbInvqr6ovRIhoSSKoUGZGfame5CkrnCXhZk9TdCtqpTowRzflHnNp3ZEsZjhb85DxnesE"
                category="Infrastructure"
                icon="bolt"
                goal="$100k"
                progress={75}
                delay={2.1}
              />
              <ProgramCard 
                title="Social Startup Accelerator"
                description="Incubating and empowering grassroots NGOs through technology grants, specialized mentorship, and operational support."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCAZCtV01wbHpWaVzHfPkn2Z37BWeRfv1CKj0IndaP1Lv3lGULsI5epy9IXkyX9tjjtmxzi7BD7XffSe4X_TLZaMhxz4bwBJlopduKtRISGMPSbOQCMwC7E2Z_pl-H0qqWvmpdQP4tyNjUb0OFhNwmyZXt11AV7130vcA_9FyH6ijvrRBdbEZ0_vG_YE6ztKq3TZNszG-ulsnrgxO6xSDlq51Vk1Bh__2fR1PpVlPpsDYPJNjjzVUo1k_Zc7RfV8A8IQ60sI_pGlY4"
                category="Capacity Building"
                icon="rocket_launch"
                goal="$50k"
                progress={40}
                delay={2.2}
              />
              <ProgramCard 
                title="The Giving Economy"
                description="Fostering a collaborative network where corporations, charities, and individuals co-create sustainable social impact globally."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAHY0gFnWIFgGxefhVJf5vQQ7AGHqRg00hAxSIT2ToX2TuxUmeUu63lTJGF7pdpCM3K_TWZyk1bDtu3UUZDjkRihL0FYy5GctvhxTeDXwXOP_q_bSjm1Gt1GlWthvR6-m_WDclH6d8AM0dXh5w08LkstP_SggFnoYPtsXfQfQrR57-IoIz3Hpy5ipJqhH5Q4KD1sXpLhdfn3kSiv3sqmRW4HfpJgswSF-AqOHSdG8C54LFB9xbR6s8du44zj5Jddg5DL7dBJTT_OSE"
                category="Ecosystem"
                icon="diversity_3"
                goal="$200k"
                progress={90}
                delay={2.3}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

