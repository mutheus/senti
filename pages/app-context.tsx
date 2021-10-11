import {
  createContext,
  useState,
  ReactNode,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import { useRouter } from 'next/router'
import localforage from 'localforage'

type SongType = {
  id: string
  title: string
  subtitle: string
  url: string
  image: string
}

type AppContextData = {
  inputValue: string
  genre: string
  updateGenre: (genreName: string) => void
  isLogIn: boolean
  cityName: string
  handleInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  handleEnterKey: (e: KeyboardEvent<HTMLInputElement>) => void
  saveInLocalStorage: (songs: SongType[]) => void
  playlists: SongType[][]
  isSaved: boolean
  updatePlaylists: (data: SongType[][]) => void
}

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext({} as AppContextData)

const AppProvider = ({ children }: AppProviderProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [cityName, setCityName] = useState<string>('')
  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const [genre, setGenre] = useState<string>('')
  const [playlists, setPlaylists] = useState<SongType[][]>([])
  const [isSaved, setIsSaved] = useState(false)
  const router = useRouter()

  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCityName(inputValue)
      router.push('/recommended/songs')
      setIsLogIn(true)
    }
  }

  const updateGenre = (genreName: string) => {
    setGenre(genreName)
  }

  const saveInLocalStorage = (songs: SongType[]) => {
    const newPlaylistsArr: SongType[][] = [songs, ...playlists]

    setPlaylists(newPlaylistsArr)

    localforage.setItem('playlists', newPlaylistsArr)

    setIsSaved(true)
  }

  const updatePlaylists = (data: SongType[][]) => {
    setPlaylists(data)
  }

  return (
    <AppContext.Provider
      value={{
        inputValue,
        cityName,
        handleInputValue,
        handleEnterKey,
        isLogIn,
        genre,
        updateGenre,
        playlists,
        saveInLocalStorage,
        isSaved,
        updatePlaylists,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
