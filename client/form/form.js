import { Template } from 'meteor/templating'
import students from '../../imports/db/students'

Template.form.events(
    {
        "click #submit": (event, template)=> {
            event.preventDefault()
            students.insert(
                {
                    "firstName": template.find("#firstName").value,
                    "lastName": template.find("#lastName").value,
                    "github": template.find("#github").value
                }
            )
        }
    }
)