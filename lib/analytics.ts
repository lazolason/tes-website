/**
 * Plausible Analytics Utility
 * 
 * Provides type-safe event tracking for Plausible Analytics.
 * Only tracks events if Plausible is loaded (window.plausible exists).
 */

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number> }
    ) => void;
  }
}

/**
 * Track a custom event with Plausible Analytics
 * 
 * @param eventName - The name of the event to track
 * @param props - Optional properties to attach to the event
 * 
 * @example
 * trackEvent('Contact Form Submitted');
 * trackEvent('PDF Download', { file: 'Lost_Megawatts_Restored' });
 * trackEvent('CTA Clicked', { location: 'Hero Section' });
 */
export const trackEvent = (
  eventName: string,
  props?: Record<string, string | number>
): void => {
  // Only track if we're in the browser and Plausible is loaded
  if (typeof window !== 'undefined' && window.plausible) {
    try {
      window.plausible(eventName, props ? { props } : undefined);
    } catch (error) {
      // Silently fail - don't break the user experience if analytics fails
      console.warn('Analytics tracking failed:', error);
    }
  }
};
