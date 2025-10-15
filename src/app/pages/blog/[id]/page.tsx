'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Static blog data (same as in BlogGrid)
const blogPosts = [
  {
    id: 1,
    title: 'Summary and Analysis of Miestilo',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    date: 'October 15, 2025',
    category: 'Company Overview',
    readTime: '5 min read',
    author: 'Miestilo Team',
    content: `
      <h2>About Miestilo</h2>
      <p>They describe themselves as a manufacturer of intimate wear (bras, panties, lingerie sets) and linen products (bedsheets, towels, duvet covers, bed runners) for hospitality, healthcare, and retail.</p>
      
      <h2>Quality and Customization</h2>
      <p>They emphasize quality, customization, and flexible pricing / low minimum order quantities (MOQs) for their linen / hotel bedding lines. This approach makes Miestilo accessible to businesses of all sizes, from boutique hotels to large healthcare facilities.</p>
      
      <h2>Expertise and Trust</h2>
      <p>They say they have "over 9 years of expertise" in this domain. With nearly a decade of experience, Miestilo has refined their manufacturing processes and built strong relationships with clients across multiple industries.</p>
      
      <h2>Client Base</h2>
      <p>They claim to be "trusted by top hotels, hospitals & retailers." This trust is built on consistent quality, reliable delivery schedules, and exceptional customer service.</p>
      
      <h2>Product Categories</h2>
      <p>Their product categories include:</p>
      <ul>
        <li><strong>Intimate Wear:</strong> Bras, panties, lingerie sets with focus on comfort and quality</li>
        <li><strong>Hotel Linen:</strong> Bedsheets, duvet covers, bed runners, pillowcases</li>
        <li><strong>Bathroom Linen:</strong> Towels, bath mats, robes</li>
        <li><strong>Healthcare Linen:</strong> Specialized products meeting hygiene standards</li>
        <li><strong>Retail Products:</strong> Consumer-facing intimate wear and home textiles</li>
      </ul>
      
      <h2>Competitive Advantages</h2>
      <p>Miestilo stands out in the market through:</p>
      <ul>
        <li>Flexible MOQs allowing smaller businesses to access quality products</li>
        <li>Extensive customization options for branding and specifications</li>
        <li>Competitive pricing without compromising on quality</li>
        <li>Fast turnaround times and reliable supply chain</li>
        <li>Dedicated customer support and consultation services</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Miestilo has established itself as a reliable partner for businesses seeking quality intimate wear and linen products. Their commitment to customization, competitive pricing, and customer satisfaction continues to drive their growth in the hospitality, healthcare, and retail sectors.</p>
    `
  },
  {
    id: 2,
    title: 'Quality Standards in Hospitality Linen',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    date: 'October 10, 2025',
    category: 'Quality',
    readTime: '4 min read',
    author: 'Quality Team',
    content: `
      <h2>Introduction</h2>
      <p>Discover how Miestilo maintains exceptional quality standards across all hospitality linen products, ensuring customer satisfaction and durability.</p>
      
      <h2>Quality Control Process</h2>
      <p>Our multi-stage quality control process ensures every product meets our high standards before reaching our clients.</p>
      
      <h2>Material Selection</h2>
      <p>We source only the finest materials from trusted suppliers, ensuring durability and comfort in every product.</p>
    `
  },
  {
    id: 3,
    title: 'Customization Options for Retail Partners',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    date: 'October 5, 2025',
    category: 'Customization',
    readTime: '6 min read',
    author: 'Sales Team',
    content: `
      <h2>Customization Overview</h2>
      <p>Explore the wide range of customization options available for retail partners, from design to packaging, with flexible MOQs.</p>
      
      <h2>Design Flexibility</h2>
      <p>Work with our design team to create unique products that match your brand identity and customer preferences.</p>
    `
  },
  {
    id: 4,
    title: 'Sustainable Practices in Manufacturing',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    date: 'September 28, 2025',
    category: 'Sustainability',
    readTime: '5 min read',
    author: 'Sustainability Team',
    content: `
      <h2>Our Commitment</h2>
      <p>Learn about our commitment to sustainable and eco-friendly manufacturing practices that reduce environmental impact.</p>
      
      <h2>Green Initiatives</h2>
      <p>We've implemented numerous green initiatives across our manufacturing facilities to minimize waste and energy consumption.</p>
    `
  },
  {
    id: 5,
    title: 'Healthcare Linen Solutions',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    date: 'September 20, 2025',
    category: 'Healthcare',
    readTime: '4 min read',
    author: 'Healthcare Division',
    content: `
      <h2>Healthcare Standards</h2>
      <p>Specialized linen solutions designed for healthcare facilities, meeting strict hygiene and durability requirements.</p>
      
      <h2>Hygiene Protocols</h2>
      <p>Our healthcare linen products undergo rigorous testing to ensure they meet or exceed industry hygiene standards.</p>
    `
  },
  {
    id: 6,
    title: 'The Future of Intimate Wear',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    date: 'September 15, 2025',
    category: 'Innovation',
    readTime: '5 min read',
    author: 'Innovation Team',
    content: `
      <h2>Industry Trends</h2>
      <p>Trends and innovations in intimate wear manufacturing, focusing on comfort, style, and quality materials.</p>
      
      <h2>Future Innovations</h2>
      <p>We're constantly researching new materials and designs to stay ahead of market trends and customer expectations.</p>
    `
  }
];

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = parseInt(params.id as string);
  
  const post = blogPosts.find(p => p.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/pages/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <div className="mb-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-900">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white text-sm">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-gray-700
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Button */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/pages/blog"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
