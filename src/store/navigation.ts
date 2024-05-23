import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Tab = {
  title: string,
  linkSections?: Tab[],
  path?: string
}

type NavState = {
  clickedTab: string,
  tabs: Tab[]
}

const initialState: NavState = {
  clickedTab: '',
  tabs: [{
    title: 'Catalogue', path: '/catalogue/all', linkSections: [{
      title: 'All courses', path: '/catalogue/All courses',
      linkSections: [
        {
          title: 'Design', path: '/catalogue/Design courses', linkSections: [{title: 'Web Design', path: '/'},
            {title: 'User Interface Design', path: '/'},
            {title: 'Mobile App Design', path: '/'},
            {title: 'Graphic Design', path: '/'},
            {title: 'UX/UI Design', path: '/'}]
        },
        {title: 'Programming', path: '/catalogue/Programming courses'},
        {title: 'Data Science', path: '/catalogue/Data science courses'}]
    },
      {
        title: 'All lessons', path: '/catalogue/All lessons',
        linkSections: [
          {title: 'Design', path: '/catalogue/Design lessons'},
          {title: 'Programming', path: '/catalogue/Programming lessons'},
          {title: 'Data Science', path: '/catalogue/Data science lessons'}
        ]
      },
      {title: 'All mentors', path: '/aboutschool#ourexperts'}]
  },
    {title: 'Free Courses', path: '/catalogue/All lessons'},
    {title: 'About school', path: '/aboutschool'}]
}

export const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setClickedTab: (state, action: PayloadAction<string>) => {
      state.clickedTab = action.payload
    },
  }
})

export const {setClickedTab} = navSlice.actions
export const navReducer = navSlice.reducer