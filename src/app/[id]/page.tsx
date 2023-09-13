'use client';
import { useParams } from 'next/navigation';

export default function MovieDetial() {
  const params = useParams();
  return <h1>{params.id}</h1>;
}
