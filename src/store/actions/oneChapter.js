import { createAction } from '@reduxjs/toolkit'

const oneChapter = createAction(
  'oneChapter',
  (objeto) => {
    return {
      payload: {
        data: objeto
      }
    }
  }

)

const actions = { oneChapter }

export default actions
