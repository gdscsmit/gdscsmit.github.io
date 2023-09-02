import React from 'react'
import { useEffect } from 'react'

export default function MobileApp() {
    useEffect(() => {
        const timeout = setTimeout(() => {
          window.location.replace('https://play.google.com/store/apps/details?id=com.gdscsmit.gdsc');
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, []);

  return (
    <>
        Redirecting...
    </>
  )
}
