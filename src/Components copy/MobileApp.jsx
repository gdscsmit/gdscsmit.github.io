import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';

export default function MobileApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      window.location.replace('https://play.google.com/store/apps/details?id=com.gdscsmit.gdsc');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
    </>
  );
}
