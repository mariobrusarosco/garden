## SpecStory

## Fit Code Editor to Screen Width (2/22/2025, 12:23:42 PM)

_**User**_

Can you make the "Code editor" component to fit the screen instead of generating a lateral scroll?

Context
@code-snippet.tsx 

---

_**Assistant**_

I'll help you modify the code to make the code editor component fit the screen width and prevent horizontal scrolling. Let me edit the `code-snippet.tsx` file.

---

_****_

```diff
  const CodeSnippet = (props: any) => {
    return (
-     <div className="">
-       <Code data-ui="code-snippet" className="w-full text-wrap" {...props} />
+     <div className="w-full overflow-x-auto">
+       <Code 
+         data-ui="code-snippet" 
+         className="w-full whitespace-pre-wrap break-words" 
+         style={{ maxWidth: '100%' }}
+         {...props} 
+       />
      </div>
    );
```

---

_****_



I've made several changes to improve how the code editor fits the screen:

1. Added `overflow-x-auto` to the container div to ensure proper overflow handling
2. Added `whitespace-pre-wrap` to allow text to wrap naturally
3. Added `break-words` to prevent overflow by breaking long words if necessary
4. Added `style={{ maxWidth: '100%' }}` to ensure the component never exceeds the screen width
5. Kept the `w-full` class to make the component take up the full available width

These changes should prevent horizontal scrolling while maintaining code readability. The code will now wrap to the next line when it reaches the edge of the container, and long words or strings will break if necessary to prevent overflow.

Is there anything else you'd like me to adjust about the component's layout or behavior?

---



---

