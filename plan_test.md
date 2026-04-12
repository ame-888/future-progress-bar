Here's the plan to fix the "Future Progress Bar" preview:
1. Currently, the preview widget is within the same `flex` row as the title, pushing it left:
```jsx
<div className="flex items-center justify-center gap-4 mb-2 flex-wrap">
  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
    Future Progress Bar
  </h1>
  <div className="flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-sm w-full mt-4 cursor-pointer hover:shadow-2xl transition-all duration-200 group ml-auto"...>
```
2. We want to center the title and move the preview card absolutely to the right, or we can make the parent a relative grid/flex layout to place the title in the center and the widget to the right. We also need to fix text truncation (don't get cut off). The span for the text has `truncate`, which cuts it off.
