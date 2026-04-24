import * as AccordionPrimitive from '@radix-ui/react-accordion';

import type { AccordionProps } from './types';

/**
 * Accordion - Collapsible component that displays multiple panels while showing one or more at a time
 *
 * The Accordion is a vertically stacked list of items that can be expanded and collapsed.
 * It supports two modes: single (only one panel open at a time) and multiple (multiple
 * panels open simultaneously). Use accordions to organize content in expandable sections,
 * allowing users to focus on one piece of information at a time while keeping the rest
 * accessible.
 *
 * @docSectionUsageSingleMode
 * Use type="single" when you want to enforce that only one section is visible at a time.
 * Add the collapsible prop to allow users to close all sections. Ideal for FAQ-style
 * content where showing multiple answers would be overwhelming. This mode provides a
 * clean, focused experience by preventing information overload.
 *
 * @docSectionUsageMultipleMode
 * Use type="multiple" when users should be able to open multiple sections simultaneously.
 * Useful for reference materials or comparison content where users may want to compare
 * information side by side. This mode provides maximum flexibility for users who need
 * to reference multiple sections at once.
 *
 * @docSectionFeaturesAnimated
 * Content expands and collapses with smooth slide-up and slide-down animations.
 * The animation duration and easing can be customized through CSS if needed.
 *
 * @docSectionFeaturesCollapsible
 * Allows closing all panels when type is "single". When true, users can click an open
 * panel to close it, leaving no panels open. When false, at least one panel must remain
 * open at all times, which can be useful for ensuring users always see some content.
 *
 * @docSectionFeaturesDefaultValue
 * Use defaultValue prop to define which panel is open by default when the component
 * mounts. This is useful for highlighting important information or providing a default
 * state in single mode.
 */
function Accordion(props: AccordionProps) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

export { Accordion };
