# Understanding `useCombinedRefs`

## Overview
This project demonstrates how to use `useCombinedRefs` in a React + TypeScript application. The example includes a product search page with an enhanced input field that leverages multiple refs using a custom `useCombinedRefs` hook.

## What is `useCombinedRefs`?
React's `ref` system allows us to reference DOM elements or component instances. However, sometimes we need to use multiple refs together. `useCombinedRefs` helps in merging multiple refs into one, making it easier to work with controlled components and third-party libraries that rely on refs.

## How `useCombinedRefs` is Used in This Project
- The `InputField` component needs access to both `react-hook-form`'s ref and a local ref to manage focus.
- `useCombinedRefs` merges these refs to ensure the input field is properly referenced.
- This improves usability by allowing controlled state management while also preserving direct DOM manipulation when required.

---

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/amandeeptherockstar/yt-useCombinedRefs.git
cd yt-useCombinedRefs
```

### 2. Install Dependencies
```sh
yarn install
# OR
npm install
```

### 3. Run the Development Server
```sh
yarn dev
# OR
npm run dev
```

The application will be available at: [http://localhost:3000](http://localhost:3000)

---

## Project Structure
```
src/
├── components/
│   ├── SearchInput/
│   │   ├── index.tsx
│   │   ├── InputField.tsx
│   ├── hooks/
│   │   ├── useCombinedRefs.ts
├── pages/
│   ├── ProductSearchPage.tsx
├── App.tsx
└── main.tsx
```

---

## Understanding the Code
### `useCombinedRefs.ts`
This custom hook allows combining multiple refs together:
```tsx
import { Ref, useCallback } from "react";

type OptionalRef<T> = Ref<T> | undefined;
type Cleanup = (() => void) | undefined | void;

function setRef<T>(ref: OptionalRef<T>, value: T): Cleanup {
  if (typeof ref === "function") {
    const cleanup = ref(value);
    if (typeof cleanup === "function") {
      return cleanup;
    }
    return () => ref(null);
  } else if (ref) {
    ref.current = value;
    return () => (ref.current = null);
  }
}

export function useCombinedRefs<T>(...refs: OptionalRef<T>[]) {
  return useCallback((value: T | null) => {
    const cleanups: Cleanup[] = [];
    for (const ref of refs) {
      const cleanup = setRef(ref, value);
      cleanups.push(cleanup);
    }
    return () => {
      for (const cleanup of cleanups) {
        cleanup?.();
      }
    };
  }, refs);
}
```

### `InputField.tsx`
Using `useCombinedRefs` to merge multiple refs:
```tsx
const innerRef = useRef<HTMLInputElement | null>(null);
const combinedRef = useCombinedRefs(field.ref, innerRef);
```
This ensures both refs are properly attached to the input field.

---

## Conclusion
This project provides a practical example of how to use `useCombinedRefs` in a real-world scenario, improving React forms and input handling. Clone the repo and try it out!

