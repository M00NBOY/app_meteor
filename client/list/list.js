import { Template } from "meteor/templating";
import students from '../../imports/db/students';

Template.list.helpers
(
    {
        students : function()
        {
            return students.find();
        }
    }
)