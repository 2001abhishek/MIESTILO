import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const profilePdfDir = path.join(process.cwd(), 'public', 'profile_pdf');
    
    try {
      const files = await fs.readdir(profilePdfDir);
      const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
      
      return NextResponse.json({
        success: true,
        files: pdfFiles
      });
    } catch (error) {
      // Directory doesn't exist or is empty
      return NextResponse.json({
        success: true,
        files: []
      });
    }
  } catch (error) {
    console.error('Error reading PDF files:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to read PDF files' },
      { status: 500 }
    );
  }
}
