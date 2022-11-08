'use strict'

class UserController {
    Store ({ request, response, view }) {
        const {nombre, apellido} = request.all()
		response.send(view.render('User',{nombre, apellido}))
    }
}

module.exports = UserController
