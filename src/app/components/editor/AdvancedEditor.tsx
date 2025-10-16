'use client';

import React, { useCallback, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Highlight } from '@tiptap/extension-highlight';
import { Underline } from '@tiptap/extension-underline';
import { TextAlign } from '@tiptap/extension-text-align';
import { createLowlight } from 'lowlight';

// Initialize lowlight
const lowlight = createLowlight();

interface AdvancedEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const AdvancedEditor: React.FC<AdvancedEditorProps> = ({
  content,
  onChange,
  placeholder = "Start writing your content..."
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // We'll use CodeBlockLowlight instead
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Color,
      TextStyle,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  const handleImageUpload = useCallback(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result && editor) {
          editor.chain().focus().setImage({ src: result }).run();
          setIsImageModalOpen(false);
          setImageFile(null);
          setImageUrl('');
        }
      };
      reader.readAsDataURL(imageFile);
    } else if (imageUrl && editor) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setIsImageModalOpen(false);
      setImageUrl('');
    }
  }, [editor, imageFile, imageUrl]);

  const handleLinkAdd = useCallback(() => {
    const url = window.prompt('Enter URL:');
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-300 p-3">
        <div className="flex flex-wrap gap-1">
          {/* Text Formatting */}
          <div className="flex gap-1 mr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Bold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h4.5a3.5 3.5 0 001.852-6.47A3.5 3.5 0 009.5 3H5zm4.5 6a1.5 1.5 0 100-3H7v3h2.5zm0 2H7v3h2.5a1.5 1.5 0 000-3z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Italic"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 1a1 1 0 000 2h1.5l-3 14H5a1 1 0 100 2h6a1 1 0 100-2h-1.5l3-14H14a1 1 0 100-2H8z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 rounded ${editor.isActive('underline') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Underline"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 18h12v1H4v-1zm6-16c-3.314 0-6 2.686-6 6v4h2V8c0-2.21 1.79-4 4-4s4 1.79 4 4v4h2V8c0-3.314-2.686-6-6-6z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Strikethrough"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 10h14v1H3v-1zm7-7c-2.761 0-5 2.239-5 5v1h2V8c0-1.657 1.343-3 3-3s3 1.343 3 3c0 .789-.306 1.506-.804 2.04L11 11.5v.5h2v-.5l1.196-1.46C15.306 9.506 16 8.289 16 7c0-2.761-2.239-5-5-5z" />
              </svg>
            </button>
          </div>

          <div className="w-px bg-gray-300 mx-1"></div>

          {/* Headings */}
          <div className="flex gap-1 mr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={`px-3 py-2 rounded text-sm font-medium ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={`px-3 py-2 rounded text-sm font-medium ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={`px-3 py-2 rounded text-sm font-medium ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              H3
            </button>
          </div>

          <div className="w-px bg-gray-300 mx-1"></div>

          {/* Lists */}
          <div className="flex gap-1 mr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Bullet List"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 100 2 1 1 0 000-2zM6 5a1 1 0 011-1h9a1 1 0 110 2H7a1 1 0 01-1-1zM3 9a1 1 0 100 2 1 1 0 000-2zM7 10a1 1 0 100 2h9a1 1 0 100-2H7zM3 14a1 1 0 100 2 1 1 0 000-2zM7 15a1 1 0 100 2h9a1 1 0 100-2H7z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Numbered List"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 3v2h1v1H3v1h2V6h1V4H5V3H3zM3 8v3h1v1H3v1h2v-1h1v-1H5v-1h1V9H5V8H3zM3 13v1h1v1H3v1h2v-1h1v-2H5v-1H3z" />
                <path d="M8 4h9v1H8V4zM8 9h9v1H8V9zM8 14h9v1H8v-1z" />
              </svg>
            </button>
          </div>

          <div className="w-px bg-gray-300 mx-1"></div>

          {/* Media & Links */}
          <div className="flex gap-1 mr-2">
            <button
              type="button"
              onClick={() => setIsImageModalOpen(true)}
              className="p-2 rounded bg-white text-gray-700 hover:bg-gray-100"
              title="Insert Image"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleLinkAdd}
              className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Add Link"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="w-px bg-gray-300 mx-1"></div>

          {/* Code & Quote */}
          <div className="flex gap-1 mr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`p-2 rounded ${editor.isActive('code') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Inline Code"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded ${editor.isActive('codeBlock') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Code Block"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              title="Quote"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Editor Content */}
      <div className="bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Image Upload Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Insert Image</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="text-center text-gray-500">OR</div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => {
                  setIsImageModalOpen(false);
                  setImageFile(null);
                  setImageUrl('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleImageUpload}
                disabled={!imageFile && !imageUrl}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedEditor;
