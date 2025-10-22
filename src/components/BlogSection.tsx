import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h3 className="text-4xl font-black mb-12 text-center">БЛОГ</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
