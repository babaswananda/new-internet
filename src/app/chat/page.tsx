import { redirect } from 'next/navigation';

// This tells Next.js to dynamically render this page
export const dynamic = 'force-dynamic';

export default function ChatPage() {
  // This will redirect to the LibreChat interface running on port 3081
  redirect('http://localhost:3081');

  // This component won't actually render anything since we're redirecting
  return null;
}
