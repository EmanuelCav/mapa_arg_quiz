'use client'

import { useContext } from 'react';
import { useRouter } from "next/navigation";

import Page from '@/components/general/Page';
import Menu from "@/components/home/Menu";
import Title from "@/components/home/Title";

import { UserContext } from '@/server/context/user.context';
import { GameContext } from '@/server/context/game.context';

import { IGame } from '@/interface/Game';
import { IUser } from '@/interface/User';

export default function Home() {

  const router = useRouter()

  const { categories, amountOptions, amountQuestions } = useContext<IUser>(UserContext)
  const { dispatch, gameAction } = useContext<IGame>(GameContext)

  return (
    <Page>
      <Title />
      <Menu router={router} categories={categories} amountOptions={amountOptions} amountQuestions={amountQuestions} dispatch={dispatch} gameAction={gameAction!} />
    </Page>
  );
}
