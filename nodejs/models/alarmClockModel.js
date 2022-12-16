import mongoose from 'mongoose';
import alarmClockSchema from './alarmClockSchema.js';

// Model 
const alarmClockModel = mongoose.model("alarm_clock", alarmClockSchema)

export default alarmClockModel