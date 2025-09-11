import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { blog } from '@/content/blog';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPosts = blog.posts.filter(post => post.featured);
  const recentPosts = blog.posts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>{blog.meta.title}</title>
        <meta name="description" content={blog.meta.description} />
        <meta name="keywords" content={blog.meta.keywords} />
        <link rel="canonical" href={blog.meta.canonical} />
        <meta property="og:title" content={blog.meta.title} />
        <meta property="og:description" content={blog.meta.description} />
        <meta property="og:url" content={blog.meta.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.meta.title} />
        <meta name="twitter:description" content={blog.meta.description} />
        <meta property="og:image" content="https://agapeplumbinginc.com/assets/images/logo-og.webp" />
        <meta name="twitter:image" content="https://agapeplumbinginc.com/assets/images/logo-og.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": blog.meta.title,
            "description": blog.meta.description,
            "url": blog.meta.canonical,
            "publisher": {
              "@id": "https://agapeplumbinginc.com/#organization"
            },
            "itemListElement": [
              ...blog.categories.map((category, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Thing",
                  "name": category.name,
                  "url": `https://agapeplumbinginc.com/blog/category/${category.slug}`
                }
              })),
              ...featuredPosts.map((post, index) => ({
                "@type": "ListItem",
                "position": blog.categories.length + index + 1,
                "item": {
                  "@type": "Thing",
                  "name": post.title,
                  "url": `https://agapeplumbinginc.com/blog/${post.slug}`
                }
              }))
            ]
          })}
        </script>
        <meta property="og:image" content="https://agapeplumbinginc.com/assets/images/logo-og.webp" />
        <meta name="twitter:image" content="https://agapeplumbinginc.com/assets/images/logo-og.webp" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-plumbing-800 to-plumbing-900 text-white py-16 border-b-4 border-black">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                {blog.hero.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                {blog.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white border-b-2 border-gray-200">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 text-plumbing-800">
                {blog.sections.featured}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:translate-y-[-4px]">
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4 text-sm font-mono uppercase">
                        <span className="bg-plumbing-800 text-white px-3 py-1 border-2 border-black">
                          {blog.categories.find(cat => cat.slug === post.category)?.name}
                        </span>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 text-plumbing-800 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <Button asChild className="bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] transition-all duration-200">
                          <Link to={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 text-plumbing-800">
              {blog.sections.recent}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:translate-y-[-4px]">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase">
                      <span className="bg-plumbing-800 text-white px-2 py-1 border border-black">
                        {blog.categories.find(cat => cat.slug === post.category)?.name}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>

                    <h3 className="text-xl font-black uppercase mb-3 text-plumbing-800 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min
                      </div>
                      <Button asChild size="sm" className="bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-1px] transition-all duration-200">
                        <Link to={`/blog/${post.slug}`}>
                          Read
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white border-t-2 border-gray-200">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 text-plumbing-800">
              {blog.sections.categories}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blog.categories.map((category) => (
                <div key={category.slug} className="bg-gray-50 border-4 border-black p-6 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-y-[-2px]">
                  <h3 className="text-xl font-black uppercase mb-3 text-plumbing-800">
                    {category.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button asChild size="sm" className="bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-1px] transition-all duration-200">
                    <Link to={`/blog/category/${category.slug}`}>
                      View Posts
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;