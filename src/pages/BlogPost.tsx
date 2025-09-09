import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { blog } from '@/content/blog';
import { winterPlumbingPost } from '@/content/blog/preventing-winter-plumbing-issues';
import { waterHeaterPost } from '@/content/blog/water-heater-replacement-signs';
import { emergencyPlumbingPost } from '@/content/blog/emergency-plumbing-guide';
import { affordablePlumbingPost } from '@/content/blog/affordable-plumbing-services';
import { choicePlumbingPost } from '@/content/blog/choice-plumbing';
import { contractorsPlumbingPost } from '@/content/blog/contractors-plumbing';
import { countyPlumbingPost } from '@/content/blog/county-plumbing';
import { dayPlumbingServicePost } from '@/content/blog/day-plumbing-service';
import { emergencyDrainServicePost } from '@/content/blog/emergency-drain-service';
import { emergencySewerAndDrainPost } from '@/content/blog/emergency-sewer-and-drain';
import { familyPlumbingAndHeatingPost } from '@/content/blog/family-plumbing-and-heating';
import { hourPlumbingAndSewerPost } from '@/content/blog/hour-plumbing-and-sewer';
import { maintenanceServicesPost } from '@/content/blog/maintenance-services';
import { plumbingDrainCompanyPost } from '@/content/blog/plumbing-drain-company';
import { professionalPlumbingServicesPost } from '@/content/blog/professional-plumbing-services';
import { reliablePlumbersNearPost } from '@/content/blog/reliable-plumbers-near';
import { spigotsPost } from '@/content/blog/spigots';
import { hotWaterHeaterLeaksPost } from '@/content/blog/hot-water-heater-leaks';
import { completePlumbingServicesPost } from '@/content/blog/complete-plumbing-services';
import { topPlumbingPost } from '@/content/blog/top-plumbing';
import { uncloggingAToiletPost } from '@/content/blog/unclogging-a-toilet';
import { waterSoftenerSystemsPost } from '@/content/blog/water-softener-systems';
import { professionalPlumberDrainCleaningPost } from '@/content/blog/professional-plumber-drain-cleaning';
import { choosingSewerDrainServiceGuidePost } from '@/content/blog/choosing-sewer-drain-service-guide';
import { drainCleaningServicesPost } from '@/content/blog/drain-cleaning-services';
import { bathroomDrainCloggedPost } from '@/content/blog/bathroom-drain-clogged';
import { choosingLocalPlumbingCompanyPost } from '@/content/blog/choosing-local-plumbing-company';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Map of post content
  const postContentMap: Record<string, any> = {
    'choosing-local-plumbing-company': choosingLocalPlumbingCompanyPost,
    'choosing-sewer-drain-service-guide': choosingSewerDrainServiceGuidePost,
    'drain-cleaning-services': drainCleaningServicesPost,
    'bathroom-drain-clogged': bathroomDrainCloggedPost,
    'professional-plumber-drain-cleaning': professionalPlumberDrainCleaningPost,
    'water-softener-systems': waterSoftenerSystemsPost,
    'unclogging-a-toilet': uncloggingAToiletPost,
    'top-plumbing': topPlumbingPost,
    'complete-plumbing-services': completePlumbingServicesPost,
    'hot-water-heater-leaks': hotWaterHeaterLeaksPost,
    'spigots': spigotsPost,
    'reliable-plumbers-near': reliablePlumbersNearPost,
    'professional-plumbing-services': professionalPlumbingServicesPost,
    'plumbing-drain-company': plumbingDrainCompanyPost,
    'maintenance-services': maintenanceServicesPost,
    'hour-plumbing-and-sewer': hourPlumbingAndSewerPost,
    'family-plumbing-and-heating': familyPlumbingAndHeatingPost,
    'emergency-sewer-and-drain': emergencySewerAndDrainPost,
    'emergency-drain-service': emergencyDrainServicePost,
    'day-plumbing-service': dayPlumbingServicePost,
    'county-plumbing': countyPlumbingPost,
    'contractors-plumbing': contractorsPlumbingPost,
    'choice-plumbing': choicePlumbingPost,
    'affordable-plumbing-services': affordablePlumbingPost,
    'preventing-winter-plumbing-issues': winterPlumbingPost,
    'water-heater-replacement-signs': waterHeaterPost,
    'emergency-plumbing-guide': emergencyPlumbingPost
  };

  const postContent = slug ? postContentMap[slug] : null;
  const post = blog.posts.find(p => p.slug === slug);

  if (!post || !postContent) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-black uppercase mb-4">Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = () => {
    return (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl leading-relaxed mb-8 text-gray-700">
          {postContent.content.introduction}
        </p>

        {postContent.content.image && (
          <div className="mb-8">
            <img
              src={postContent.content.image.match(/\((.*?)\)/)?.[1] || ''}
              alt={postContent.content.image.match(/!\[(.*?)\]/)?.[1] || ''}
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border-4 border-white"
              loading="lazy"
            />
          </div>
        )}

        {postContent.content.sections.map((section: any, index: number) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 text-plumbing-800 border-b-4 border-plumbing-800 pb-2">
              {section.heading}
            </h2>

            <div className="mb-6">
              <p className="text-lg leading-relaxed mb-4">
                {section.content}
              </p>

              {section.additionalContent && (
                <p className="text-lg leading-relaxed mb-4">
                  {section.additionalContent}
                </p>
              )}

              {section.additionalContent2 && (
                <p className="text-lg leading-relaxed mb-4">
                  {section.additionalContent2}
                </p>
              )}

              {section.additionalContent3 && (
                <p className="text-lg leading-relaxed mb-4">
                  {section.additionalContent3}
                </p>
              )}
            </div>

            {section.list && (
              <ul className="space-y-3 mb-6">
                {section.list.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-plumbing-800 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.numberedList && (
              <ol className="space-y-3 mb-6">
                {section.numberedList.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="bg-plumbing-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {itemIndex + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            )}

            {section.image && (
              <div className="mb-6">
                <img
                  src={section.image.match(/\((.*?)\)/)?.[1] || ''}
                  alt={section.image.match(/!\[(.*?)\]/)?.[1] || ''}
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border-4 border-white"
                  loading="lazy"
                />
              </div>
            )}

            {section.table && (
              <div className="mb-6 overflow-x-auto">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.table }}
                />
              </div>
            )}
          </section>
        ))}

        <div className="bg-plumbing-50 border-l-4 border-plumbing-800 p-6 my-8">
          <p className="text-lg leading-relaxed mb-4 font-medium">
            {postContent.content.conclusion}
          </p>
        </div>

        {postContent.content.callToAction && (
          <div className="bg-white border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-black uppercase mb-4 text-plumbing-800">
              Ready to Take Action?
            </h3>
            <p className="text-lg mb-6 text-gray-700">
              {postContent.content.callToAction.text}
            </p>
            <Button asChild size="lg" className="bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] transition-all duration-200">
              <Link to={postContent.content.callToAction.buttonLink}>
                {postContent.content.callToAction.buttonText}
              </Link>
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{post.meta.title}</title>
        <meta name="description" content={post.meta.description} />
        <meta name="keywords" content={Array.isArray(post.meta.keywords) ? post.meta.keywords.join(', ') : post.meta.keywords} />
        <link rel="canonical" href={`https://agapeplumbinginc.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={post.meta.description} />
        <meta property="og:url" content={`https://agapeplumbinginc.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={blog.categories.find(cat => cat.slug === post.category)?.name} />
        {post.tags.map((tag: string) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.meta.title} />
        <meta name="twitter:description" content={post.meta.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Agape Drain & Plumbing LLC"
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://agapeplumbinginc.com/blog/${post.slug}`
            },
            "articleSection": blog.categories.find(cat => cat.slug === post.category)?.name,
            "keywords": post.tags.join(", ")
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4 border-b-2 border-gray-200">
          <div className="container-custom">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-plumbing-800 hover:text-plumbing-700 font-medium">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/blog" className="text-plumbing-800 hover:text-plumbing-700 font-medium">Blog</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-white border-b-2 border-gray-200">
          <div className="container-custom max-w-4xl">
            <div className="mb-6">
              <Button asChild variant="outline" className="border-2 border-black hover:bg-gray-50">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm font-mono uppercase">
              <span className="bg-plumbing-800 text-white px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
                {blog.categories.find(cat => cat.slug === post.category)?.name}
              </span>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} min read
              </div>
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase mb-6 text-plumbing-800 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 border-2 border-gray-300 text-sm font-medium">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom max-w-4xl">
            {renderContent()}
          </div>
        </section>

        {/* Related Posts / Call to Action */}
        <section className="py-16 bg-white border-t-2 border-gray-200">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-black uppercase mb-6 text-plumbing-800">
              Need Plumbing Help?
            </h2>
            <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
              Our licensed plumbers are ready to help with all your plumbing needs. From emergency repairs to routine maintenance, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-plumbing-800 hover:bg-plumbing-700 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] transition-all duration-200">
                <Link to="/contact">
                  Get Free Estimate
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-black hover:bg-gray-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[-2px] transition-all duration-200">
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;