export const validation = {
      validateEmail(value: string) {
            let error
            if (!value) {
                  error = 'Поле email должно быть заполнено'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                  error = 'Не корректный адрес'
            }
            return error
      },
      validatePass(value: string) {
            let error
            if (!value) {
                  error = 'Поле password должно быть заполнено'
            }
            return error
      },
      validateMessage(value: string) {
            let error
            if (!value) {
                  error = 'Нельзя отправить пустое сообщение'
            }
            return error
      },
}
