import { createContext, useState, ReactNode, ChangeEvent, KeyboardEvent } from 'react'

type AppContextData = {
  inputValue: string
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

  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCityName(inputValue)
    }
  }

  return (
    <AppContext.Provider
      value={{
        inputValue,
        cityName,
        handleInputValue,
        handleEnterKey,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
