import { createContext, useState, ReactNode, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'

type AppContextData = {
  inputValue: string
  isLogIn: boolean
  cityName: string
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  handleEnterKey: (e: KeyboardEvent<HTMLInputElement>) => void
}

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

const AppProvider = ({ children }: AppProviderProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [cityName, setCityName] = useState<string>('')
  const [isLogIn, setIsLogIn] = useState(false)
  const router = useRouter()

  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCityName(inputValue)
      router.push('/recommended/new')
      setIsLogIn(true)
    }
  }

  return (
    <AppContext.Provider
      value={{
        inputValue,
        cityName,
        handleInputValue,
        handleEnterKey,
        isLogIn,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
