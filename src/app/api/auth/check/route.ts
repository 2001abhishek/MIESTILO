import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('session');

    if (session) {
      return NextResponse.json(
        { isAuthenticated: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { isAuthenticated: false },
        { status: 200 }
      );
    }
  } catch {
    return NextResponse.json(
      { isAuthenticated: false },
      { status: 500 }
    );
  }
}
