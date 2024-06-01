'use client'

import { useRouter } from 'next/navigation';

import Page from '@/components/general/Page';

import Menu from "@/components/home/Menu";
import Title from "@/components/home/Title";

export default function Home() {

  const router = useRouter()

  return (
    <Page>
      <Title />
      <Menu router={router} />
    </Page>
  );
}
