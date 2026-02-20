'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ChannelIO() {
  const pathname = usePathname();
  const channelServiceRef = useRef<typeof import('@channel.io/channel-web-sdk-loader') | null>(
    null,
  );
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    const initialize = async () => {
      const channelService = await import('@channel.io/channel-web-sdk-loader');
      if (!mountedRef.current) return;

      channelServiceRef.current = channelService;
      channelService.loadScript();
    };

    void initialize();

    return () => {
      mountedRef.current = false;
      channelServiceRef.current?.shutdown();
      channelServiceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const channelService = channelServiceRef.current;
    if (!channelService) return;

    if (pathname?.startsWith('/projects')) {
      channelService.boot({
        pluginKey: 'ae604a3f-6c07-4c9b-8839-de67f124680c',
      });
    } else {
      channelService.shutdown();
    }
  }, [pathname]);

  return null;
}
