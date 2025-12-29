# Dashboard Color Scheme Update

## New Theme (Matching Main Site)

### Colors
- **Primary Red**: `red-600` (replaces slate-900)
- **Background**: `white` (replaces #F5F1E8)
- **Text**: `neutral-900`, `neutral-600`, `neutral-500` (replaces slate variants)
- **Borders**: `neutral-200` with 2px width (replaces slate-200/50 with 1px)
- **Accent Red**: `red-100`, `red-700` for badges (replaces amber variants)

### Typography
- **Headings**: `font-black` (replaces font-bold)
- **Body**: `font-semibold` for descriptions (replaces font-medium)
- **Labels**: `font-bold` (replaces font-medium)

### Components to Update

#### Replace Color Classes:
```
slate-900 → red-600 (for active states, buttons)
slate-900 → neutral-900 (for text)
slate-700 → neutral-700
slate-600 → neutral-600
slate-500 → neutral-500
slate-200 → neutral-200
slate-100 → neutral-100
slate-50 → neutral-50

bg-[#F5F1E8] → bg-white
border-slate-200/50 → border-neutral-200 with border-2 or border-b-2
```

#### Replace Typography:
```
font-bold → font-black (for h1, h2, h3)
font-medium → font-semibold (for descriptions)
font-medium → font-bold (for labels, buttons)
```

#### Specific Updates:
- Active sidebar items: `bg-red-600` instead of `bg-slate-900`
- Badge backgrounds: `bg-red-100 text-red-700` instead of `bg-amber-100 text-amber-700`
- Primary buttons: `bg-red-600 hover:bg-red-700` instead of `bg-slate-900 hover:bg-slate-800`
- Headers: Add `border-b-2` instead of `border-b`
- Cards: Use `shadow-md` and cleaner borders

## Files Updated
- ✅ src/app/(app)/dashboard/page.tsx
- ✅ src/app/(app)/dashboard/layout.tsx
- ✅ src/app/(app)/dashboard/components/DashboardSidebar.tsx
- ⏳ All other dashboard pages need similar updates
