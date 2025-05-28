import React from 'react';
import { notFound } from 'next/navigation';
import { getTeamMemberById, aiTeam } from '@/data/aiTeam';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamMemberProfile from '@/components/team/TeamMemberProfile';

interface TeamMemberPageProps {
  params: {
    id: string;
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberById(params.id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <TeamMemberProfile member={member} />
      <Footer />
    </div>
  );
}

// Generate static params for all team members
export async function generateStaticParams() {
  return aiTeam.map((member) => ({
    id: member.id,
  }));
}
