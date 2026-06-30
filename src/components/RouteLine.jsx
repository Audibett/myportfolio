// A thin "shipment route" line with node markers — the site's recurring signature motif.
// Used as section dividers throughout the page.
export default function RouteLine({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
      <svg
        className="flex-1 h-3"
        viewBox="0 0 400 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6 C 40 6, 60 1, 100 1 S 160 11, 200 6 S 260 1, 300 1 S 360 11, 400 6"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-teal/40"
        />
      </svg>
      <span className="h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
    </div>
  )
}
