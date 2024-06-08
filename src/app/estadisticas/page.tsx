'use client'

import { useContext } from "react";
import { useRouter } from 'next/navigation';

import Page from "@/components/general/Page"
import ButtonAccept from '../../components/general/ButtonAccept'
import HeaderStatistics from "@/components/estadisticas/HeaderStatistics";
import BodyStatistics from "@/components/estadisticas/BodyStatistics";

import { IUser } from "../../interface/User";

import { UserContext } from '../../server/context/user.context'

const Estadisticas = () => {

  const router = useRouter()

  const { categories } = useContext<IUser>(UserContext)

  const goBack = () => {
    router.back()
  }

  return (
    <Page>
      <HeaderStatistics categories={categories} />
      <BodyStatistics categories={categories} />
      <ButtonAccept text="ACEPTAR" isCategory={false} func={goBack} />
    </Page>
  )
}

export default Estadisticas