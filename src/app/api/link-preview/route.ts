import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface LinkMetadata {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // Validate URL
    const targetUrl = new URL(url);

    // Fetch the HTML
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkPreviewBot/1.0)',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();

    // Extract metadata
    const metadata: LinkMetadata = {};

    // Extract Open Graph title
    const ogTitleMatch = html.match(
      /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i,
    );
    const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    metadata.title = ogTitleMatch?.[1] || titleMatch?.[1] || undefined;

    // Extract Open Graph description
    const ogDescMatch = html.match(
      /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i,
    );
    const descMatch = html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i,
    );
    metadata.description = ogDescMatch?.[1] || descMatch?.[1] || undefined;

    // Extract Open Graph image
    const ogImageMatch = html.match(
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i,
    );
    if (ogImageMatch?.[1]) {
      // Handle relative URLs
      const imageUrl = ogImageMatch[1];
      metadata.image = imageUrl.startsWith('http')
        ? imageUrl
        : new URL(imageUrl, targetUrl.origin).href;
    }

    // Generate favicon URL
    metadata.favicon = `https://www.google.com/s2/favicons?domain=${targetUrl.hostname}&sz=128`;

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Error fetching link metadata:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch metadata' },
      { status: 500 },
    );
  }
}
