import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Static blog data
const blogPosts = [
  {
    id: 1,
    title: 'Summary and Analysis of Miestilo',
    excerpt: 'They describe themselves as a manufacturer of intimate wear (bras, panties, lingerie sets) and linen products (bedsheets, towels, duvet covers, bed runners) for hospitality, healthcare, and retail...',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    date: 'October 15, 2025',
    category: 'Company Overview',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Quality Standards in Hospitality Linen',
    excerpt: 'Discover how Miestilo maintains exceptional quality standards across all hospitality linen products, ensuring customer satisfaction and durability...',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    date: 'October 10, 2025',
    category: 'Quality',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Customization Options for Retail Partners',
    excerpt: 'Explore the wide range of customization options available for retail partners, from design to packaging, with flexible MOQs...',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    date: 'October 5, 2025',
    category: 'Customization',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Sustainable Practices in Manufacturing',
    excerpt: 'Learn about our commitment to sustainable and eco-friendly manufacturing practices that reduce environmental impact...',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    date: 'September 28, 2025',
    category: 'Sustainability',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Healthcare Linen Solutions',
    excerpt: 'Specialized linen solutions designed for healthcare facilities, meeting strict hygiene and durability requirements...',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    date: 'September 20, 2025',
    category: 'Healthcare',
    readTime: '4 min read'
  },
  {
    id: 6,
    title: 'The Future of Intimate Wear',
    excerpt: 'Trends and innovations in intimate wear manufacturing, focusing on comfort, style, and quality materials...',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    date: 'September 15, 2025',
    category: 'Innovation',
    readTime: '5 min read'
  }
];

const BlogGrid = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/pages/blog/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-gray-900 font-medium group-hover:gap-2 transition-all">
                    Read More
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
