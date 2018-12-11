import { Template } from "meteor/templating";
import students from '../../imports/db/students';

Template.list.events(
    {
        "click .delete": (event)=>{
            event.preventDefault()
            console.log(event.target.id)
            students.remove(
                {
                    _id: event.target.id
                }
            )
        }
    }
)


Template.list.helpers
(
    {
        students : function()
        {
            return students.find();
        }
    }
)