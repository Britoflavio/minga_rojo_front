import { createAction } from '@reduxjs/toolkit'

const oneManga = createAction(
  'oneManga',
  (objeto) => {
    return {
      payload: {
        title: objeto.title,
        cover_photo: objeto.cover_photo,
        description: objeto.description
      }
    }
  }
)

const actions = { oneManga }

export default actions
