import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageContainer } from '@/app/components/layout'
import { TrickHeader, TrickContent, RelatedTricks } from '@/app/components/organisms'
import { mockTricks } from '@/app/lib/mock-data'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return mockTricks.map((trick) => ({
    slug: trick.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const trick = mockTricks.find(t => t.slug === slug)
  
  if (!trick) {
    return {
      title: 'Trick nicht gefunden - AI Tricks Platform'
    }
  }

  return {
    title: `${trick.title} - AI Tricks Platform`,
    description: trick.description,
    openGraph: {
      title: trick.title,
      description: trick.description,
      type: 'article',
      publishedTime: trick.createdAt.toISOString(),
      modifiedTime: trick.updatedAt.toISOString(),
      tags: [trick.category, ...trick.tools],
    }
  }
}

export default async function TrickDetailPage({ params }: PageProps) {
  const { slug } = await params
  const trick = mockTricks.find(t => t.slug === slug)

  if (!trick) {
    notFound()
  }

  return (
    <PageContainer>
      <article className="max-w-4xl mx-auto">
        <TrickHeader trick={trick} />
        
        <div className="mt-8 mb-12">
          <TrickContent trick={trick} />
        </div>
      </article>
      
      <RelatedTricks 
        currentTrickId={trick.id}
        category={trick.category}
        tricks={mockTricks}
      />
    </PageContainer>
  )
}