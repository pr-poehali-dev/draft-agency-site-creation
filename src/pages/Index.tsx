import { useState, useEffect } from 'react';
import HalloweenDecor from '@/components/HalloweenDecor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import EarningsSection from '@/components/EarningsSection';
import SubscribeSection from '@/components/SubscribeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    if (window.history.length > 1) {
      setShowBackButton(true);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    window.history.back();
  };

  const teamMembers = [
    {
      name: 'Попов Михаил Максимович',
      role: 'Арт-директор',
      image: 'https://cdn.poehali.dev/files/d9877295-ced6-49af-95bc-9e805d360997.jpg',
    },
    {
      name: 'Агаев Наум',
      role: 'Дизайнер',
      image: 'https://cdn.poehali.dev/files/7da73c75-c1d3-4e73-8b49-9b63943c2438.jpg',
    },
  ];

  const blogPosts = [
    {
      title: 'Тренды цифрового искусства 2025',
      excerpt: 'Исследуем новейшие направления в мире дизайна и цифровой графики',
      date: '15 октября 2025',
    },
    {
      title: '10 секретов идеальной ретуши',
      excerpt: 'Профессиональные техники работы в Photoshop от наших экспертов',
      date: '10 октября 2025',
    },
    {
      title: 'Пиксельное искусство: возрождение классики',
      excerpt: 'Как пиксель-арт стал новым трендом в современном дизайне',
      date: '5 октября 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <HalloweenDecor />
      <Navigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        showBackButton={showBackButton}
        onBackClick={handleBack}
      />
      <HeroSection 
        onContactClick={() => scrollToSection('contact')}
        onBlogClick={() => scrollToSection('blog')}
      />
      <AboutSection />
      <TeamSection teamMembers={teamMembers} />
      <EarningsSection />
      <SubscribeSection />
      <BlogSection blogPosts={blogPosts} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;