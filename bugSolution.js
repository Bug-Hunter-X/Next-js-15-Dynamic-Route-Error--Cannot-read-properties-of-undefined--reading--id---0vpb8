```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(router.query.id);
  }, [router.query]);

  if (!id) {
    return <div>Loading...</div>; // or a better loading indicator
  }

  return (
    <div>
      About Page for ID: {id}
    </div>
  );
}
```