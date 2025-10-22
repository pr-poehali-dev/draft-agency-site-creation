import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-4xl font-black mb-12 text-center">НАША КОМАНДА</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{member.name}</CardTitle>
                <p className="text-primary font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
