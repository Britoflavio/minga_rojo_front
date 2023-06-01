import { createAction } from '@reduxjs/toolkit'

const saveReading = createAction(
  'saveReading',
  (objeto) => {
    return {
      payload: {
        title: objeto.title,
        page: objeto.page,
        manga: objeto.manga_id
      }
    }
  }

)

const actions = { saveReading }
export default actions
