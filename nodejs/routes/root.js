import express from 'express';
import ViewRootController from '../controllers/get/viewRootController.js';
import ViewAllEventsController from '../controllers/get/viewAllEventsController.js';
import ViewCalendarController from '../controllers/get/viewCalendarController.js';
import ViewModifyEventController from '../controllers/get/viewModifyEventController.js';
import ViewAddEventController from '../controllers/get/viewAddEventController.js';

import ModifyEventController from '../controllers/post/modifyEventController.js';
import AddEventController from '../controllers/post/addEventController.js';
import DeleteEventController from '../controllers/post/deleteEventController.js';

const root = express.Router();

root.get('/', ViewRootController.viewRoot);
root.get('/viewAllEvents', ViewAllEventsController.viewAllEvents);
root.get('/viewCalendar', ViewCalendarController.viewCalendar);
root.get('/viewModifyEvent', ViewModifyEventController.viewModifyEvent);
root.get('/viewAddEvent', ViewAddEventController.viewAddEvent);

root.post('/modifyEvent', ModifyEventController.modifyEvent);
root.post('/addEvent', AddEventController.addEvent);
root.post('/deleteEvent', DeleteEventController.deleteEvent);

export default root