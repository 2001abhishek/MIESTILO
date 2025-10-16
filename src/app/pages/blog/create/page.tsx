'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import '@/app/components/editor/editor.css';

const AdvancedEditor = dynamic(() => import('@/app/components/editor/AdvancedEditor'), {
  ssr: false,
  loading: () => <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">Loading editor...</div>
});

const CreateBlogPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    author: '',
    readTime: '',
  });

  const [, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };
    
    checkAuth();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create excerpt from content (first 150 characters of text)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const excerpt = textContent.substring(0, 150) + '...';
    
    const blogData = {
      ...formData,
      content,
      excerpt,
      image: imagePreview || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    };

    try {
      const response = await fetch('/api/blogs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Blog created successfully!');
        router.push('/pages/blog');
      } else {
        alert('Failed to create blog: ' + data.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('An error occurred while creating the blog');
      setIsSubmitting(false);
    }
  };

  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Checking authentication...</div>
        </div>
      </div>
    );
  }

  // Don't render form if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Blog Post</h1>
          <p className="text-gray-600">Fill in the details below to create a new blog post</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Enter blog title"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image *
            </label>
            <input
              type="file"
              id="image"
              name="image"
              required
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
            />
            {imagePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Date and Category Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <input
                type="text"
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., Company Overview"
              />
            </div>
          </div>

          {/* Author and Read Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Author name"
              />
            </div>

            <div>
              <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-2">
                Read Time *
              </label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                required
                value={formData.readTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="e.g., 5 min read"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <AdvancedEditor
              content={content}
              onChange={setContent}
              placeholder="Start writing your blog post..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.push('/pages/blog')}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating...' : 'Create Blog Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
