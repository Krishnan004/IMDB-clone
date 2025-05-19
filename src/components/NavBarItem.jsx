"use client";
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavBarItem = ({ title, parameter }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link href={`/?genre=${parameter}`}>
        <p className={`text-2xl hover:text-amber-600 ${genre === parameter ? 'underline underline-offset-8 decoration-4 decoration-amber-600 rounded-xl transition-undeline duration-900' : ''}`}>
          {title}
        </p>
      </Link>
    </div>
  );
};

export default NavBarItem;
