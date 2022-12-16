import express from 'express';
import AlarmClockModel from '../../models/alarmClockModel.js'


const root = express.Router();

class AddEventController {
  static addEvent = async (req, res) => {
    try {

      let event = req.body;
      let data = {};
      let alarmClockModelNew;
      let array_start;
      let array_stop;
      let dateNow_start = new Date();
      let dateNow_stop = new Date();

      data.event_done = false;
      data.name_event = event.name_event;
      data.img_name = event.img_name;

      array_start = event.time_start_alarm.split(":");
      data.time_start_alarm = dateNow_start;
      data.time_start_alarm.setYear(2022);
      data.time_start_alarm.setMonth(10);
      data.time_start_alarm.setDate(7);
      data.time_start_alarm.setHours(array_start[0]);
      data.time_start_alarm.setMinutes(array_start[1]);

      array_stop = event.time_stop_alarm.split(":");
      data.time_stop_alarm = dateNow_stop;
      data.time_stop_alarm.setYear(2022);
      data.time_stop_alarm.setMonth(10);
      data.time_stop_alarm.setDate(7);
      data.time_stop_alarm.setHours(array_stop[0]);
      data.time_stop_alarm.setMinutes(array_stop[1]);

      if (event.allday_alarm == "on") {
        data.use_speech = true;
        data.time_start_alarm.setHours(24);
        data.time_start_alarm.setMinutes(0);
        data.time_stop_alarm.setHours(24);
        data.time_stop_alarm.setMinutes(0);
      } else {
        data.use_speech = false;
      }

      data.delay_on_event = dateNow_start;
      data.delay_off_event =dateNow_start;
      data.time_delay_on = 0;
      data.time_delay_off= 0;

      event.use_speech == "on" ? data.use_speech = true : data.use_speech = false;
      data.string_speech = event.string_speech;

      event.use_cucina_c1_seduto_al_tavolo == "on" ? data.use_cucina_c1_seduto_al_tavolo = true : data.use_cucina_c1_seduto_al_tavolo = false;
      event.value_cucina_c1_seduto_al_tavolo == "on" ? data.value_cucina_c1_seduto_al_tavolo = true : data.value_cucina_c1_seduto_al_tavolo = false;
      event.use_cucina_c2_presenza_nella_stanza == "on" ? data.use_cucina_c2_presenza_nella_stanza = true : data.use_cucina_c2_presenza_nella_stanza = false;
      event.value_cucina_c2_presenza_nella_stanza == "on" ? data.value_cucina_c2_presenza_nella_stanza = true : data.value_cucina_c2_presenza_nella_stanza = false;
      event.use_cucina_c3_piatti_sul_tavolo == "on" ? data.use_cucina_c3_piatti_sul_tavolo = true : data.use_cucina_c3_piatti_sul_tavolo = false;
      event.value_cucina_c3_piatti_sul_tavolo == "on" ? data.value_cucina_c3_piatti_sul_tavolo = true : data.value_cucina_c3_piatti_sul_tavolo = false;
      event.use_cucina_c4_chiusura_frigor == "on" ? data.use_cucina_c4_chiusura_frigor = true : data.use_cucina_c4_chiusura_frigor = false;
      event.value_cucina_c4_chiusura_frigor == "on" ? data.value_cucina_c4_chiusura_frigor = true : data.value_cucina_c4_chiusura_frigor = false;

      event.use_camera_b1_sdraiato_sul_letto == "on" ? data.use_camera_b1_sdraiato_sul_letto = true : data.use_camera_b1_sdraiato_sul_letto = false;
      event.value_camera_b1_sdraiato_sul_letto == "on" ? data.value_camera_b1_sdraiato_sul_letto = true : data.value_camera_b1_sdraiato_sul_letto = false;
      event.use_camera_b2_presenza_nella_stanza == "on" ? data.use_camera_b2_presenza_nella_stanza = true : data.use_camera_b2_presenza_nella_stanza = false;
      event.value_camera_b2_presenza_nella_stanza == "on" ? data.value_camera_b2_presenza_nella_stanza = true : data.value_camera_b2_presenza_nella_stanza = false;

      event.use_sala_s1_presenza_sul_divano == "on" ? data.use_sala_s1_presenza_sul_divano = true : data.use_sala_s1_presenza_sul_divano = false;
      event.value_sala_s1_presenza_sul_divano == "on" ? data.value_sala_s1_presenza_sul_divano = true : data.value_sala_s1_presenza_sul_divano = false;
      event.use_sala_s2_presenza_nella_stanza == "on" ? data.use_sala_s2_presenza_nella_stanza = true : data.use_sala_s2_presenza_nella_stanza = false;
      event.value_sala_s2_presenza_nella_stanza == "on" ? data.value_sala_s2_presenza_nella_stanza = true : data.value_sala_s2_presenza_nella_stanza = false;
      event.use_sala_s5_passaggio_camera_inferiore == "on" ? data.use_sala_s5_passaggio_camera_inferiore = true : data.use_sala_s5_passaggio_camera_inferiore = false;
      event.value_sala_s5_passaggio_camera_inferiore == "on" ? data.value_sala_s5_passaggio_camera_inferiore = true : data.value_sala_s5_passaggio_camera_inferiore = false;

      //console.log("event");
      //console.log(event);
      //console.log("data");
      //console.log(data);

      alarmClockModelNew = new AlarmClockModel(data);
      alarmClockModelNew.save()
        .then(item => {
          res.redirect('/viewAllEvents');
        })
        .catch(err => {
          console.log(`Save DB : ${err}`);
          res.status(400).send("Unable to save to database");
        });
        
    } catch (error) {
      console.log(error)
    }
  }
}

export default AddEventController