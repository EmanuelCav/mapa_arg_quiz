'use client'

import { useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";

import Page from '@/components/general/Page';
import Menu from "@/components/home/Menu";
import Title from "@/components/home/Title";

import { UserContext } from '@/server/context/user.context';
import { GameContext } from '@/server/context/game.context';

import { IGame } from '@/interface/Game';
import { IUser } from '@/interface/User';

import { getStorage } from '@/helper/storage';

export default function Home() {

  const router = useRouter()

  const { categories, amountOptions, amountQuestions, userAction } = useContext<IUser>(UserContext)
  const { dispatch, gameAction } = useContext<IGame>(GameContext)

  useEffect(() => {
    
    (async () => {

      const storage = await getStorage()

      if (storage) {
        userAction!(storage as any)
      }
    })()

  }, [])

  return (
    <Page>
      <Title />
      <Menu router={router} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} dispatch={dispatch} gameAction={gameAction!} />
    </Page>
  );
}
