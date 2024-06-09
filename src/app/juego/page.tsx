'use client'

import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

import allQuestions from '../../assets/questions.json';

import Page from '@/components/general/Page'
import Answer from '@/components/juego/Answer'
import Finish from '@/components/juego/Finish'
import GameStatistics from '@/components/juego/GameStatistics'
import Options from '@/components/juego/Options'
import PreFinish from '@/components/juego/PreFinish'
import Question from '@/components/juego/Question'

import { UserContext } from '@/server/context/user.context'
import { GameContext } from '@/server/context/game.context'
import { LOADING } from '@/server/constants/game.const';

import { IUser } from '@/interface/User'
import { IGame, IQuestion } from '@/interface/Game'
import { HelpType } from '@/types/key.props'

import { correctCategory, countCategory, helpsOptions } from '@/helper/playing'
import { emptyOptions } from '@/helper/game';

const Juego = () => {

  const router = useRouter()

  const { categories, amountOptions, categoryAction, helpsAction, helps } = useContext<IUser>(UserContext)
  const { questions, dispatch } = useContext<IGame>(GameContext)

  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [realSeconds, setRealSeconds] = useState<number>(0)
  const [realMinutes, setRealMinutes] = useState<number>(0)

  const [numberQuestion, setNumberQuestion] = useState<number>(0)
  const [corrects, setCorrects] = useState<number>(0)

  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
  const [isPreFinish, setIsPreFinish] = useState<boolean>(false)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [isGameError, setIsGameError] = useState<boolean>(false)
  const [isHelped, setIsHelped] = useState<boolean>(false)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [isIntersitialLoaded, setIsIntersitialLoaded] = useState<boolean>(false)
  const [isRecompensadoLoaded, setIsRecompensadoLoaded] = useState<boolean>(false)

  const [errors, setErrors] = useState<IQuestion[]>([])
  const [gameErrors, setGameErrors] = useState<IQuestion[]>([])

  const [helpType, setHelpType] = useState<HelpType>('help')
  const [optionsHelped, setOptionsHelped] = useState<string[]>(questions.length > 0 ? helpsOptions(questions[numberQuestion], amountOptions) : [])

  const nextQuestion = (value: string) => {

    if (value === (!isGameError ? questions[numberQuestion].answer : gameErrors[numberQuestion].answer)) {
      setIsCorrect(true)
      setCorrects(corrects + 1)
    } else {
      if (!isGameError) {
        setErrors([...errors, questions[numberQuestion]])
      } else {
        setErrors([...errors, gameErrors[numberQuestion]])
      }

      setIsIncorrect(true)
    }

    setRealSeconds(seconds)
    setRealMinutes(minutes)

    if (numberQuestion === questions.length - 1 || numberQuestion === gameErrors.length - 1) {
      setIsPreFinish(true)
    }

    setIsHelped(false)

  }

  const continueGame = () => {
    setIsCorrect(false)
    setIsIncorrect(false)
    setRealSeconds(0)
    setRealMinutes(0)

    if (isPreFinish) return

    setNumberQuestion(numberQuestion + 1)
  }

  const preFinish = () => {
    setIsFinish(true)
    setIsPreFinish(false)
  }

  const showErrors = () => {
    setIsCorrect(false)
    setIsIncorrect(false)
    setIsPreFinish(false)
    setIsFinish(false)
    setIsGameError(true)
    setNumberQuestion(0)
    setCorrects(0)
    setIsHelped(false)
    setGameErrors(errors)
    setErrors([])
    setOptionsHelped([])
  }

  const continueHome = () => {
    const optionsAllQuestions = allQuestions.filter((aq) => aq.options.length > 0)
    emptyOptions(optionsAllQuestions)

    router.push('/')
  }

  const changeHelp = async (type: HelpType) => {
    setIsHelped(true)
    setHelpType(type)

    if (type === 'add') {
      setIsAdd(true)
    }

  }

  const handleHelp = (type: HelpType) => {
    helpsAction!(type)
  }

  useEffect(() => {
    if (questions.length === 0) {
      router.push('/')
    }
  }, [])

  useEffect(() => {
    dispatch!({
      type: LOADING,
      payload: false
    })
  }, [])

  useEffect(() => {
    if (!isGameError) {
      categoryAction!(countCategory(categories, questions[numberQuestion] && questions[numberQuestion].category!))
      setOptionsHelped(questions.length > 0 ? helpsOptions(questions[numberQuestion], amountOptions) : [])
      return
    }

    setOptionsHelped(helpsOptions(gameErrors[numberQuestion], amountOptions))

  }, [numberQuestion])

  useEffect(() => {
    if (isCorrect && !isGameError) {
      categoryAction!(correctCategory(categories, questions[numberQuestion] && questions[numberQuestion].category!))
    }
  }, [corrects])

  useEffect(() => {
    if (isHelped) {
      handleHelp(helpType)
    }
  }, [isHelped])

  return (
    <Page>
      <Question question={!isGameError ? questions[numberQuestion] : gameErrors[numberQuestion]} />
      <GameStatistics minutes={minutes} seconds={seconds} setSeconds={setSeconds} setMinutes={setMinutes}
        questions={!isGameError ? questions.length : gameErrors.length} numberQuestion={numberQuestion + 1} realSeconds={realSeconds} realMinutes={realMinutes} isGameError={isGameError}
        isCorrect={isCorrect} isIncorrect={isIncorrect} isFinish={isFinish} isPreFinish={isPreFinish} isHelped={isHelped} helps={helps} changeHelp={changeHelp}
      />
      {
        (isCorrect || isIncorrect) ?
          <Answer answer={isCorrect} correctAnswer={!isGameError ? questions[numberQuestion].answer! : gameErrors[numberQuestion].answer!} continueGame={continueGame} />
          :
          <Options options={!isGameError ? questions.length > 0 ? questions[numberQuestion].options! : [] : gameErrors.length > 0 ? gameErrors[numberQuestion].options! : []} nextQuestion={nextQuestion} isHelped={isHelped} optionsHelped={optionsHelped} />
      }
      {
        isPreFinish && <PreFinish preFinish={preFinish} />
      }
      {
        isFinish && <Finish seconds={realSeconds} minutes={realMinutes} corrects={corrects} questions={!isGameError ? questions.length : gameErrors.length}
          showErrors={showErrors} continueHome={continueHome} isGameError={isGameError} isAdd={isAdd} changeHelp={changeHelp} />
      }
    </Page>
  )
}

export default Juego