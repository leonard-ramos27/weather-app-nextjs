"use client";

import SomethingWentWrong from '@/components/SomethingWentWrong';
import { useEffect } from 'react';

export default function Error({error}: {error: Error & { digest?: string };}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
        <SomethingWentWrong />
    </main>
  );
}