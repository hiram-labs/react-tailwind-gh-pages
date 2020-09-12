import { useEffect } from 'react';
import $ from 'jquery';

/**
 * Controls font-size and line-height based on element width.
 *
 * @param body - the container whose childrens typography will act responsively to resize
 */
export function useResponsiveTypo(body: React.RefObject<HTMLDivElement>) {
  const changes = () => {
    const settings = {
      minimum: 500,
      maximum: 1200,
      minFont: 12,
      maxFont: 20,
      fontRatio: 30
    };
    var $el = $(body.current!),
      elw = $el.width()!,
      width =
        elw > settings.maximum
          ? settings.maximum
          : elw < settings.minimum
          ? settings.minimum
          : elw,
      fontBase = width / settings.fontRatio,
      fontSize =
        fontBase > settings.maxFont
          ? settings.maxFont
          : fontBase < settings.minFont
          ? settings.minFont
          : fontBase;
    $el.css('font-size', fontSize + 'px');
  };

  useEffect(() => {
    body && changes(); // run on load
    window.addEventListener('resize', changes);
    return () => {
      window.removeEventListener('resize', changes);
    };
  }, []);
}
